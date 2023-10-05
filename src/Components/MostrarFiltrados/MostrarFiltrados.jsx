import { Bola } from "../Bola/Bola";
import "./MostrarFiltrados.css";

export const MostrarFiltrados = ({ setNumerosFiltrados, numerosFiltrados }) => {
	return (
		<div className='descartados'>
			<h4>Números descartados</h4>
			{numerosFiltrados.map((num) => {
				return (
					<Bola
						numerosFiltrados={numerosFiltrados}
						setNumerosFiltrados={setNumerosFiltrados}
						key={num}
						num={num}
						tipo='bola U'
					/>
				);
			})}
		</div>
	);
};
