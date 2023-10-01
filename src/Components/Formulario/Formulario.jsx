import { Numbers, Otros } from "../../helpers/Icons";
import "./Formulario.css";

export const Formulario = () => {
	return (
		<>
			<form action=''>
				<label for='numeros'>
					<Numbers />
					<input name='nums' id='nums' type='number' value='6' required />
				</label>
				<label for='otros'>
					<Otros />
					<input name='otros' id='otros' type='number' value='2' required />
				</label>
				<button type='button' id='actualizar'>
					Actualizar
				</button>
			</form>
		</>
	);
};
