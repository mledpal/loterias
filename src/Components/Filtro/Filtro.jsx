import { useState } from "react";
import { CheckBox, FechaSelector } from "..";
import "./Filtro.css";

export const Filtro = ({ obtenerDatos }) => {
	const [enabled, setEnabled] = useState(true);

	return (
		<>
			<CheckBox enabled={enabled} setEnabled={setEnabled} />
			<FechaSelector tipo='Start' />
			<FechaSelector tipo='Stop' />

			<button
				id='btnFetch'
				type='button'
				onClick={() => {
					obtenerDatos();
				}}
				disabled={enabled ? "" : "disabled"}
			>
				Obtener
			</button>
		</>
	);
};
