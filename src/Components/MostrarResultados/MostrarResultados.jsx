import { Bola } from "../Bola/Bola";
import "./MostrarResultados.css";
export const MostrarResultados = ({ combinacion }) => {
	if (combinacion.length > 0) {
		return (
			<div className='bolasContainer'>
				<div className='numeros'>
					{combinacion[0].map((num) => {
						return <Bola key={num} num={num} tipo='bola N' />;
					})}
				</div>
				<div className='estrellas'>
					{combinacion[1].map((num) => {
						return <Bola key={num} num={num} tipo='bola E' />;
					})}
				</div>
			</div>
		);
	} else {
		return (
			<div className='bolasContainer'>
				<h3>
					Pulse en <span> Generar </span> para empezar
				</h3>
			</div>
		);
	}
};
