import { Numbers, Otros } from "../../helpers/Icons";
import { InputBox } from "../InputBox/InputBox";
import "./Formulario.css";

export const Formulario = () => {
	return (
		<>
			<form action=''>
				<InputBox tipo='C' valor={6} />
				<InputBox tipo='R' max={2} valor={2} />
				<button type='button' id='actualizar'>
					Generar
				</button>
			</form>
		</>
	);
};
