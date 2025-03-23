<?php
// Permitir el acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

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

  // Simular un navegador para evitar bloqueos
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/json",
    "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer: https://www.loteriasyapuestas.es",
    "Accept-Encoding: gzip, deflate, br",
    "Accept-Language: es-ES,es;q=0.9,en;q=0.8"
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
