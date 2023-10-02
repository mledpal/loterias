import { useState } from "react";
import { InputBox } from "../InputBox/InputBox";
import "./Formulario.css";

const generarNumeros = (CANTIDAD, MAXIMO) => {
	const numeros = [];

	for (let i = 0; i < CANTIDAD; i++) {
		let num = Math.floor(Math.random() * MAXIMO) + 1;

		while (numeros.includes(num)) {
			num = Math.floor(Math.random() * MAXIMO) + 1;
		}
		numeros.push(num);
	}

	return numeros.sort((a, b) => {
		return a - b;
	});
};

export const Formulario = ({ setCombinacion }) => {
	const [numAleatorios, setNumeros] = useState(6);
	const [numOtros, setOtros] = useState(2);

	return (
		<>
			<form action=''>
				<InputBox tipo='C' valor={numAleatorios} setValor={setNumeros} />
				<InputBox tipo='R' max={2} valor={numOtros} setValor={setOtros} />
				<button
					type='button'
					id='actualizar'
					onClick={() => {
						const nums = generarNumeros(numAleatorios, 49);
						const otros = generarNumeros(numOtros, 12);
						setCombinacion([nums, otros]);
					}}
				>
					Generar
				</button>
			</form>
		</>
	);
};
