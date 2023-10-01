import { CheckBox, FechaSelector } from "..";

export const Filtro = () => {
	return (
		<>
			<CheckBox />
			<FechaSelector tipo='Start' />
			<FechaSelector tipo='Stop' />
		</>
	);
};
