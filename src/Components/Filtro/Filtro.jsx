import { CheckBox, FechaSelector } from "..";
import "./Filtro.css";

export const Filtro = ({ obtenerDatos }) => {
	return (
		<>
			<CheckBox />
			<FechaSelector tipo='Start' />
			<FechaSelector tipo='Stop' />
			<button
				id='btnFetch'
				type='button'
				onClick={() => {
					obtenerDatos();
				}}
			>
				Obtener
			</button>
		</>
	);
};
