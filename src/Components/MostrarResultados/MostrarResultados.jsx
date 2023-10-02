import { Bola } from "../Bola/Bola";
import "./MostrarResultados.css";
export const MostrarResultados = ({ combinacion }) => {
	if (combinacion.length > 0) {
		return (
			<div className='bolasContainer'>
				<div className='numeros'>
					{combinacion[0].map((num) => {
						return <Bola key={num} num={num} />;
					})}
				</div>
				<div className='estrellas'>
					{combinacion[1].map((num) => {
						return <Bola key={num} num={num} />;
					})}
				</div>
			</div>
		);
	} else {
		return <h3>No hay datos</h3>;
	}
};
