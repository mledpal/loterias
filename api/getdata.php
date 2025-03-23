<?php
// Permitir el acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  // Terminamos aquí, solo necesitamos responder a la solicitud OPTIONS
  exit(0);
}

// Definir tipos de sorteo permitidos
$tipo_sorteo = ['BONO', 'EMIL', 'LOTU', 'LAPR', 'ELGR', 'LAQU', 'QGOL', 'QUPL', 'LNAC', 'TODOS'];
$datePattern = "/^\d{8}$/";

// Obtener los parámetros GET
$fInicio = $_GET['fInicio'] ?? null;
$fFin = $_GET['fFin'] ?? null;
$sorteo = $_GET['sorteo'] ?? null;

// Verificar la validez de los parámetros
if (
  preg_match($datePattern, $fInicio) &&
  preg_match($datePattern, $fFin) &&
  in_array($sorteo, $tipo_sorteo) &&
  ($fFin >= $fInicio)
) {
  $url = "https://www.loteriasyapuestas.es/servicios/buscadorSorteos?game_id={$sorteo}&celebrados=true&fechaInicioInclusiva={$fInicio}&fechaFinInclusiva={$fFin}";

  // Iniciar cURL
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);  // No verificar SSL (ajústalo si es necesario)
  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);

  // Establecer encabezados HTTP (simulando un navegador)
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language: es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,fr;q=0.5,ca;q=0.4",
    "Cache-Control: max-age=0",
    "DNT: 1",
    "Priority: u=0, i",
    "Sec-CH-UA: \"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Microsoft Edge\";v=\"134\"",
    "Sec-CH-UA-Mobile: ?0",
    "Sec-CH-UA-Platform: \"Windows\"",
    "Sec-Fetch-Dest: document",
    "Sec-Fetch-Mode: navigate",
    "Sec-Fetch-Site: none",
    "Sec-Fetch-User: ?1",
    "Upgrade-Insecure-Requests: 1",
    "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0",
    "Cookie: usr-lang=es; UUID=WEB-7ca145c7-d5a4-460c-ab82-b4a1a8de8af8; CookieConsent={stamp:%27bwQeh4hG1wJT0Xp06hZ6WArB3LHWpmE2OlPYInl+Z2iJm3uHIkDHPQ==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1742737115211%2Cregion:%27es%27}; cms=APRrJYF7b8HCVQ5IoSW7RQ$$"
  ]);

  // Ejecutar la solicitud cURL
  $output = curl_exec($ch);
  $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $error = curl_error($ch);

  curl_close($ch);

  // Verificar el estado de la respuesta
  if ($http_status === 200 && $output !== false) {
    echo $output;  // Devolver los datos obtenidos al cliente
  } else {
    http_response_code($http_status ?: 500);  // Enviar código de error si algo falla
    echo json_encode([
      'error' => $error ?: 'Error en la solicitud externa',
      'status' => $http_status,
      'response' => $output
    ]);
  }
} else {
  http_response_code(400);  // Solicitud incorrecta
  echo json_encode([
    'error' => 'Algún dato no es correcto',
    'fInicio' => $fInicio,
    'fFin' => $fFin,
    'sorteo' => $sorteo
  ]);
}
