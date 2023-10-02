import "./Date.css";
import { iconoFecha } from "/src/variables.js";
import { Start, Stop } from "../../helpers/Icons";
import { useRef } from "react";
import { getToday } from "../../helpers/handleDates";

export const FechaSelector = ({ tipo }) => {
	const inpDate = useRef();

	const icono = tipo === iconoFecha.Start;
	return (
		<label htmlFor={tipo}>
			{icono ? <Start /> : <Stop />}
			<input ref={inpDate} name={tipo} type='date' max={getToday()} />
		</label>
	);
};
