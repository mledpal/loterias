import { SORTEOS } from "/src/variables.js";

const sorteo = SORTEOS.PRIMITIVA;

const fecha_inicio = 20230930;
const fecha_fin = 20231001;

const URL = `https://www.loteriasyapuestas.es/servicios/buscadorSorteos?game_id=${sorteo}&celebrados=true&fechaInicioInclusiva=${fecha_inicio}&fechaFinInclusiva=${fecha_fin}`;

export const obtenerDatos = async () => {
	fetch(URL, {
		headers: {
			"Access-Control-Allow-Headers": "Content-Type",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Content-Type",
		},
		origin: "http://localhost",
	})
		.then((response) => response.json())
		.then((data) => {
			data.forEach((sorteo) => {
				const id = sorteo.id_sorteo;
				const fecha = sorteo.fecha_sorteo;
				const resultado = convertir(id, fecha, sorteo.combinacion);
				console.log(resultado);
			});
		})
		.catch((err) => {
			console.error("caught it!", err);
		});
};

const convertir = (id, fecha, combi) => {
	const numeros = combi.replaceAll("-", " ").replaceAll("  ", "").split(" ");
	const complementario = parseInt(numeros.splice(6, 1)[0].slice(2, 4));
	const reintegro = parseInt(numeros.splice(6, 1)[0].slice(2, 3));

	const combinacion = numeros.map((n) => {
		return parseInt(n);
	});

	const max = Math.max(...combinacion);
	const min = Math.min(...combinacion);
	const suma = combinacion.reduce((suma, c) => suma + c);
	const media = Math.round(suma / combinacion.length);

	return {
		id,
		fecha,
		combinacion,
		complementario,
		reintegro,
	};
};
