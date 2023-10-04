import "./Date.css";
import { iconoFecha } from "/src/variables.js";
import { Start, Stop } from "../../helpers/Icons";
import { useRef } from "react";
import { getToday } from "../../helpers/handleDates";

export const FechaSelector = ({ filter, tipo, fechas, setFechas }) => {
	const icono = tipo === iconoFecha.Start;
	const inpDate = useRef();

	const handleFechasChange = () => {
		const nuevasFechas = { ...fechas };
		nuevasFechas[tipo] = inpDate.current.value;
		setFechas(nuevasFechas);
	};

	return (
		<label htmlFor={tipo}>
			{icono ? <Start /> : <Stop />}
			<input
				ref={inpDate}
				name={tipo}
				value={fechas[tipo]}
				type='date'
				max={getToday(true)}
				onChange={handleFechasChange}
				disabled={filter ? "" : "disabled"}
			/>
		</label>
	);
};
