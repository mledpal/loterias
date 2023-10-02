import { useRef } from "react";
import { Numbers, Otros } from "../../helpers/Icons";

export const InputBox = ({ valor = 6, min = 1, max = 6, tipo, setValor }) => {
	const inputRef = useRef();

	return (
		<label>
			{tipo === "C" ? <Numbers /> : <Otros />}
			<input
				type='number'
				value={valor}
				min={min}
				max={max}
				ref={inputRef}
				onChange={() => {
					setValor(inputRef.current.value);
				}}
				required
			/>
		</label>
	);
};
