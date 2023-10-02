import { useState } from "react";
import { CheckBox, FechaSelector } from "..";
import "./Filtro.css";

export const Filtro = ({ obtenerDatos }) => {
	const [filter, setFilter] = useState(false);

	return (
		<>
			<CheckBox filter={filter} setFilter={setFilter} />
			<FechaSelector tipo='Start' />
			<FechaSelector tipo='Stop' />

			<button
				id='btnFetch'
				type='button'
				onClick={() => {
					obtenerDatos();
				}}
				disabled={filter ? "" : "disabled"}
			>
				Obtener
			</button>
		</>
	);
};
