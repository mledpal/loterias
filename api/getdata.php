<?php
// Permitir CORS desde el cliente
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Patrones y valores para hacer comprobaciones
$tipo_sorteo = ['BONO', 'EMIL', 'LOTU', 'LAPR', 'ELGR', 'LAQU', 'QGOL', 'QUPL', 'LNAC', 'TODOS'];
$datePattern = "/^\d{8}$/";

// Datos obtenidos mediante GET
$fInicio = $_GET['fInicio'] ?? null;
$fFin = $_GET['fFin'] ?? null;
$sorteo = $_GET['sorteo'] ?? null;

$error = [
  'error' => 'Algún dato no es correcto',
  'fInicio' => $fInicio,
  'fFin' => $fFin,
  'sorteo' => $sorteo
];

// Validación de datos
if (
  preg_match($datePattern, $fInicio) &&
  preg_match($datePattern, $fFin) &&
  in_array($sorteo, $tipo_sorteo) &&
  ($fFin >= $fInicio)
) {
  $url = "https://www.loteriasyapuestas.es/servicios/buscadorSorteos?sorteo={$sorteo}&celebrados=true&fechaInicioInclusiva={$fInicio}&fechaFinInclusiva={$fFin}";

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Para obtener el resultado como string
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Si hay problema con SSL
  curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Timeout de 10 segundos

  $output = curl_exec($ch);
  $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $error = curl_error($ch);

  curl_close($ch);

  if ($http_status === 200 && $output !== false) {
    echo $output; // Devuelve directamente el JSON
  } else {
    http_response_code($http_status ?: 500);
    echo json_encode(['error' => $error ?: 'Error en la solicitud externa']);
  }
} else {
  http_response_code(400);
  echo json_encode($error);
}
