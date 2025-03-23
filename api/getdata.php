<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$tipo_sorteo = ['BONO', 'EMIL', 'LOTU', 'LAPR', 'ELGR', 'LAQU', 'QGOL', 'QUPL', 'LNAC', 'TODOS'];
$datePattern = "/^\d{8}$/";

$fInicio = $_GET['fInicio'] ?? null;
$fFin = $_GET['fFin'] ?? null;
$sorteo = $_GET['sorteo'] ?? null;

if (
  preg_match($datePattern, $fInicio) &&
  preg_match($datePattern, $fFin) &&
  in_array($sorteo, $tipo_sorteo) &&
  ($fFin >= $fInicio)
) {
  $url = "https://www.loteriasyapuestas.es/servicios/buscadorSorteos?game_id={$sorteo}&celebrados=true&fechaInicioInclusiva={$fInicio}&fechaFinInclusiva={$fFin}";

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);

  // 🔥 Añadir encabezados para simular un navegador
  curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/json",
    "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer: https://www.loteriasyapuestas.es"
  ]);

  $output = curl_exec($ch);
  $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $error = curl_error($ch);

  curl_close($ch);

  if ($http_status === 200 && $output !== false) {
    echo $output;
  } else {
    http_response_code($http_status ?: 500);
    echo json_encode([
      'error' => $error ?: 'Error en la solicitud externa',
      'status' => $http_status,
      'response' => $output
    ]);
  }
} else {
  http_response_code(400);
  echo json_encode([
    'error' => 'Algún dato no es correcto',
    'fInicio' => $fInicio,
    'fFin' => $fFin,
    'sorteo' => $sorteo
  ]);
}
