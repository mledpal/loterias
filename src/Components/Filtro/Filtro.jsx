import { CheckBox, FechaSelector, Selector } from "..";
import { useFilter } from "../../hooks/useFilter";
import "./Filtro.css";

export const Filtro = ({
	filter,
	setFilter,
	setNumerosFiltrados,
	sorteo,
	setSorteo,
}) => {
	const {
		sorteoSeleccionado,
		fechas,
		setFechas,
		setSorteoSeleccionado,
		handleResSorteos,
	} = useFilter({ setNumerosFiltrados });

	return (
		<>
			<CheckBox filter={filter} setFilter={setFilter} />
			<Selector
				filter={filter}
				setSorteo={setSorteo}
				setSorteoSeleccionado={setSorteoSeleccionado}
				sorteoSeleccionado={sorteoSeleccionado}
				sorteo={sorteo}
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
