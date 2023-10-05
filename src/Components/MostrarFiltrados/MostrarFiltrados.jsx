import { Bola } from "../Bola/Bola";

export const MostrarFiltrados = ({ numerosFiltrados }) => {
	return (
		<div class='descartados'>
			<h4>Números descartados</h4>
			{numerosFiltrados.map((num) => {
				return <Bola key={num} num={num} tipo='bola U' />;
			})}
		</div>
	);
};
