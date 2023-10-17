import { handleSorteos } from "../../helpers/handleSorteos";
import { Bola } from "../Bola/Bola";

export const DatosSorteo = ({
	sorteo,
	numerosFiltrados,
	setNumerosFiltrados,
}) => {
	const { fecha, numeros, otros } = handleSorteos(sorteo);

	return (
		<div className='datosSorteo'>
			<span className='fechaSorteo'>{fecha}</span>

			<span className='numerosSorteo'>
				{numeros.map((num) => {
					return (
						<Bola
							key={num}
							num={num}
							tipo='bola N'
							numerosFiltrados={numerosFiltrados}
							setNumerosFiltrados={setNumerosFiltrados}
						/>
					);
				})}
			</span>

			<span className='otrosSorteo'>
				{otros.map((num) => {
					return (
						<Bola
							key={num}
							num={num}
							tipo='bola E'
							numerosFiltrados={numerosFiltrados}
							setNumerosFiltrados={setNumerosFiltrados}
						/>
					);
				})}
			</span>
		</div>
	);
};
