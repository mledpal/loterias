import "./Date.css";
import { iconoFecha } from "/src/variables.js";
import { Start, Stop } from "../../helpers/Icons";
import { useRef } from "react";
import { getToday } from "../../helpers/handleDates";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const FechaSelector = ({ filter, tipo, fechas, setFechas }) => {
	const icono = tipo === iconoFecha.Start;
	const inpDate = useRef();

	const handleFechasChange = () => {
		const nuevasFechas = { ...fechas };

		const fechaIntroducida = new Date(inpDate.current.value);

		if (tipo === "Stop" && fechaIntroducida < new Date(fechas.Start)) {
			Swal.fire({
				icon: "error",
				title: "Fecha no válida",
				text: "La fecha de fin no puede ser anterior a la inicial",
			});
		} else {
			nuevasFechas[tipo] = inpDate.current.value;
			setFechas(nuevasFechas);
		}
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
