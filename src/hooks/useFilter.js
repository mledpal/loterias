import { useState } from "react";
import { SORTEOS } from "../variables";
import { getToday } from "../helpers/handleDates";
import { obtenerDatos } from "../helpers/getData";

export const useFilter = () => {
	const [filter, setFilter] = useState(true);
	const [sorteoSeleccionado, setSorteo] = useState(SORTEOS.EUROMILLONES);
	const [sorteosObtenidos, setObtenidos] = useState([]);

	const [fechas, setFechas] = useState({
		Start: "2023-10-01",
		Stop: getToday(),
	});

	const handleResSorteos = () => {
		const datos = obtenerDatos(fechas, sorteoSeleccionado);
		setObtenidos(datos);
		console.log(datos);
	};

	return {
		filter,
		setFilter,
		sorteoSeleccionado,
		setSorteo,
		sorteosObtenidos,
		setObtenidos,
		fechas,
		setFechas,
		handleResSorteos,
	};
};
