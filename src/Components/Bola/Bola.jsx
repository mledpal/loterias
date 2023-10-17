import { useBola } from "../../hooks/useBola";
import "./Bola.css";

export const Bola = ({ num, tipo, setNumerosFiltrados, numerosFiltrados }) => {
	const { bolaRef, handleClick } = useBola(
		setNumerosFiltrados,
		numerosFiltrados
	);

	return (
		<div
			className={tipo}
			ref={bolaRef}
			onClick={(e) => {
				handleClick(e);
			}}
		>
			{num}
		</div>
	);
};
