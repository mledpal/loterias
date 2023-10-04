import { CheckBox, FechaSelector, Selector } from "..";
import { useFilter } from "../../hooks/useFilter";
import "./Filtro.css";

export const Filtro = ({ filter, setFilter, setNumerosFiltrados }) => {
	const { sorteoSeleccionado, setSorteo, fechas, setFechas, handleResSorteos } =
		useFilter({ setNumerosFiltrados });

	return (
		<>
			<CheckBox filter={filter} setFilter={setFilter} />
			<Selector
				filter={filter}
				setSorteo={setSorteo}
				sorteoSeleccionado={sorteoSeleccionado}
			/>

			<FechaSelector
				filter={filter}
				tipo='Start'
				fechas={fechas}
				setFechas={setFechas}
			/>
			<FechaSelector
				filter={filter}
				tipo='Stop'
				fechas={fechas}
				setFechas={setFechas}
			/>

			<button
				id='btnFetch'
				type='button'
				onClick={handleResSorteos}
				disabled={filter ? "" : "disabled"}
			>
				Obtener
			</button>
		</>
	);
};
