import { Bola } from "../Bola/Bola";
import "./MostrarFiltrados.css";

export const MostrarFiltrados = ({ numerosFiltrados }) => {
	return (
		<div className='descartados'>
			<h4>Números descartados</h4>
			{numerosFiltrados.map((num) => {
				return <Bola key={num} num={num} tipo='bola U' />;
			})}
		</div>
	);
};
