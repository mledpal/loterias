import { date2Number } from "./handleDates";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const obtenerDatos = async (fechas, sorteo) => {
	let resultado = [];

	const fecha_inicio = date2Number(fechas["Start"]);
	const fecha_fin = date2Number(fechas["Stop"]);

	const url = `https://loterias.ledemar.es/api/getdata.php?fInicio=${fecha_inicio}&fFin=${fecha_fin}&sorteo=${sorteo}`;
	console.log(url);

	await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"cors": "no-cors",
			"Access-Control-Allow-Origin": "*",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			data.map((sorteo) => {
				const id = sorteo.id_sorteo;
				const fecha = sorteo.fecha_sorteo.split(" ")[0];
				const juego = sorteo.game_id;
				const combinacion = convertir(sorteo.combinacion);

				resultado.push({ id, juego, fecha, combinacion });
			});
		})
		.catch((err) => {
			Swal.fire({
				icon: "error",
				title: "No hay datos",
				text: "No se han podido obtener datos. Elija otras fechas.",
			});
		});

	return resultado;
};

const convertir = (combi) => {
	const numeros = combi.trim().replaceAll("-", " ").replaceAll("  ", "").split(" ");

	const combinacion = numeros.map((n) => {
		if (n.charAt(0) == "C") return parseInt(n.slice(2, 4));
		if (n.charAt(0) == "R") return parseInt(n.slice(2, 3));
		return parseInt(n);
	});

	return combinacion;
};
