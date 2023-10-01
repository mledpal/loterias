import { useRef, useState } from "react";
import { Numbers, Otros } from "../../helpers/Icons";

export const InputBox = ({ valor = 6, min = 1, max = 6, tipo }) => {
	const [value, setValue] = useState(valor);
	const inputRef = useRef();

	return (
		<label>
			{tipo === "C" ? <Numbers /> : <Otros />}
			<input
				type='number'
				value={value}
				min={min}
				max={max}
				ref={inputRef}
				onChange={() => {
					setValue(inputRef.current.value);
				}}
				required
			/>
		</label>
	);
};
