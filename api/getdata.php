<?php

header("Access-Control-Allow-Origin: http://localhost:5173"); // Corregir el puerto
header("Access-Control-Allow-Methods: GET, PUT");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 3600");

$error = [
  'error' => 'Algún dato no es correcto'
];

$datePattern = "^/d{8}";


$fInicio = $_GET['fInicio'];
$fFin = $_GET['fFin'];
$sorteo = $_GET['sorteo'];

$url = "https://www.loteriasyapuestas.es/servicios/buscadorSorteos?game_id=" . $sorteo . "&celebrados=true&fechaInicioInclusiva=" . $fInicio . "&fechaFinInclusiva=" . $fFin;

if (preg_match($datePattern, $fInicio) && preg_match($datePattern, $fFin)) {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  $output = json_encode(curl_exec($ch));
  curl_close($ch);
} else {
  echo json_encode($error);
}
