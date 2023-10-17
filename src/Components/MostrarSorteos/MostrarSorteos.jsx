import { useEffect, useState } from "react";
import { DatosSorteo } from "..";
import "./MostrarSorteos.css";

export const MostrarSorteos = ({ numerosFiltrados, setNumerosFiltrados }) => {
	const [sorteosFiltrados, setSorteosFiltrados] = useState([]);

	useEffect(() => {
		console.log("useEffect");
		setSorteosFiltrados(JSON.parse(localStorage.getItem("sorteos")));
	}, [numerosFiltrados]);

	return (
		<div className='sorteos'>
			<h4>Sorteos</h4>
			{sorteosFiltrados.length > 0 &&
				sorteosFiltrados.map((sorteo) => {
					return (
						<DatosSorteo
							key={sorteo.id}
							sorteo={sorteo}
							numerosFiltrados={numerosFiltrados}
							setNumerosFiltrados={setNumerosFiltrados}
						/>
					);
				})}
		</div>
	);
};
