import { useEffect, useState } from "react";
import { InputBox } from "../InputBox/InputBox";
import { SORTEOS } from "../../variables";
import { generarNumeros } from "../../helpers/getNumbers";
import "./Formulario.css";

export const Formulario = ({
	setCombinacion,
	filter,
	numerosFiltrados,
	sorteo,
}) => {
	const [numAleatorios, setNumeros] = useState(5);
	const [numOtros, setOtros] = useState(2);

	useEffect(() => {
		switch (sorteo) {
			case SORTEOS.EUROMILLONES: {
				setNumeros(5);
				setOtros(2);
				break;
			}
			case SORTEOS.BONOLOTO:
			case SORTEOS.PRIMITIVA:
			case SORTEOS.ELGORDO: {
				setNumeros(6);
				setOtros(1);
				break;
			}
		}
	}, [sorteo]);

	return (
		<>
			<form action=''>
				<InputBox tipo='C' valor={numAleatorios} setValor={setNumeros} />
				<InputBox tipo='R' max={2} valor={numOtros} setValor={setOtros} />
				<button
					type='button'
					id='actualizar'
					onClick={() => {
						const nums = generarNumeros(
							numAleatorios,
							49,
							filter,
							numerosFiltrados
						);
						const otros = generarNumeros(numOtros, 12);
						const combi = [nums, otros];
						setCombinacion([nums, otros]);

						if (sorteo === SORTEOS.BONOLOTO) {
							let segundaApuesta = generarNumeros(
								numAleatorios,
								49,
								filter,
								numerosFiltrados
							);
							let otrosSegundaApuesta = generarNumeros(numOtros, 9);
							const nuevaCombinacion = [segundaApuesta, otrosSegundaApuesta];
							const apuestas = [];
							apuestas.push(combi);
							apuestas.push(nuevaCombinacion);
							setCombinacion(apuestas);
							console.log(apuestas);
						}
					}}
				>
					Generar
				</button>
			</form>
		</>
	);
};
