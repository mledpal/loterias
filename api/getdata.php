<?php

// Cabeceras 
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, PUT");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 3600");

// Patrones y valores para hacer comprobaciones
$tipo_sorteo = ['BONO', 'EMIL', 'LOTU', 'LAPR', 'ELGR', 'LAQU', 'QGOL', 'QUPL', 'LNAC', 'TODOS'];
$datePattern = "/^\d{8}$/";

// Datos obtenidos mediante GET del cliente API
$fInicio = $_GET['fInicio'];
$fFin = $_GET['fFin'];
$sorteo = $_GET['sorteo'];

// Construcción del mensaje de error con los valores obtenidos
$error = [
  'error' => 'Algún dato no es correcto',
  'fInicio' => $fInicio,
  'fFin' => $fFin,
  'sorteo' => $sorteo
];

// Construcción de la variable url para acceder a la API de la web de loterias
$url = "https://www.loteriasyapuestas.es/servicios/buscadorSorteos?game_id=" . $sorteo . "&celebrados=true&fechaInicioInclusiva=" . $fInicio . "&fechaFinInclusiva=" . $fFin;

// Se comprueban los datos y si son correctos, se ejecuta la consulta
// Si no, se devuelve un error
if (preg_match($datePattern, $fInicio) && preg_match($datePattern, $fFin) && in_array($sorteo, $tipo_sorteo)) {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  $output = json_encode(curl_exec($ch));
  curl_close($ch);
} else {
  echo json_encode($error);
}
