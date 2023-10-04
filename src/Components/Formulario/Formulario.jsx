import { useState } from "react";
import { InputBox } from "../InputBox/InputBox";
import { generarNumeros } from "../../helpers/getNumbers";
import "./Formulario.css";

export const Formulario = ({ setCombinacion, filter, numerosFiltrados }) => {
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
						const nums = generarNumeros(
							numAleatorios,
							49,
							filter,
							numerosFiltrados
						);
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
