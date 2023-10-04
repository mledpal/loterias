import { Bola } from "../Bola/Bola";

export const MostrarFiltrados = ({ numerosFiltrados }) => {
	return numerosFiltrados.map((num) => {
		return <Bola key={num} num={num} tipo='bola U' />;
	});
};
