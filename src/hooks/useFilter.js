import { useEffect, useState } from "react";
import { SORTEOS, bolasSorteos } from "../variables";
import { getToday } from "../helpers/handleDates";
import { obtenerDatos } from "../helpers/getData";

export const useFilter = ({ setNumerosFiltrados }) => {
	const [sorteoSeleccionado, setSorteoSeleccionado] = useState(
		SORTEOS.EUROMILLONES
	);
	const [sorteosObtenidos, setObtenidos] = useState([]);
	const [isLoading, setLoading] = useState(false);

	const [fechas, setFechas] = useState({
		Start: getToday(false),
		Stop: getToday(true),
	});

	const handleResSorteos = async () => {
		setLoading(true);
		const datos = await obtenerDatos(fechas, sorteoSeleccionado);
		setObtenidos(datos);
		setLoading(false);
	};

	const updateNumerosFiltrados = () => {
		const newFilterNumbers = [];

		if (!isLoading) {
			sorteosObtenidos.map((sorteo) => {
				for (let i = 0; i < bolasSorteos[sorteoSeleccionado]; i++) {
					let num = sorteo.combinacion[i];
					if (!newFilterNumbers.includes(num)) newFilterNumbers.push(num);
				}
			});
			setNumerosFiltrados(
				newFilterNumbers.sort((a, b) => {
					return a - b;
				})
			);
		}
	};

	useEffect(() => {
		updateNumerosFiltrados();
	}, [sorteosObtenidos]);

	return {
		sorteoSeleccionado,
		setSorteoSeleccionado,
		sorteosObtenidos,
		setObtenidos,
		fechas,
		setFechas,
		handleResSorteos,
	};
};
