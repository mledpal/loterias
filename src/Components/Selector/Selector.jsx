import { SORTEOS } from "../../variables";
import { Dado } from "../../helpers/Icons";
const sorteos = Object.keys(SORTEOS);

export const Selector = ({
	sorteoSeleccionado,
	setSorteoSeleccionado,
	setSorteo,
	filter,
}) => {
	return (
		<label>
			<Dado />
			<select
				name='tiposorteos'
				disabled={filter ? "" : "disabled"}
				onChange={(e) => {
					setSorteo(e.target.value);
					setSorteoSeleccionado(e.target.value);
				}}
			>
				<option value={sorteoSeleccionado}>{sorteoSeleccionado}</option>
				{sorteos.map((sorteo) => {
					return (
						<option value={SORTEOS[sorteo]} key={sorteo}>
							{sorteo}
						</option>
					);
				})}
			</select>
		</label>
	);
};
