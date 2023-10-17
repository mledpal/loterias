import { SORTEOS } from "../variables/";

export const handleSorteos = (sorteo) => {
	const fecha = new Date(sorteo.fecha).toLocaleDateString();
	const juego = sorteo.juego;
	const combi = sorteo.combinacion;
	const numeros = [];
	const otros = [];

	const combinacion = {
		numeros: 0,
		otros: 0,
	};

	switch (juego) {
		case SORTEOS.EUROMILLONES: {
			combinacion.numeros = 5;
			combinacion.otros = 2;
			break;
		}
		case SORTEOS.BONOLOTO:
		case SORTEOS.PRIMITIVA: {
			combinacion.numeros = 6;
			combinacion.otros = 2;
			break;
		}
		case SORTEOS.ELGORDO: {
			combinacion.numeros = 5;
			combinacion.otros = 1;
			break;
		}
	}

	for (let i = 0; i < combinacion.numeros; i++) {
		numeros.push(combi[i]);
	}

	for (
		let i = combinacion.numeros;
		i < combinacion.numeros + combinacion.otros;
		i++
	) {
		otros.push(combi[i]);
	}

	return {
		fecha,
		juego,
		numeros,
		otros,
	};
};
