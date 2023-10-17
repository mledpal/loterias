import "./CheckBox.css";
export const CheckBox = ({ filter, setFilter }) => {
	return (
		<label htmlFor='chkFilter'>
			<input
				type='checkbox'
				name='chkFilter'
				onChange={() => {
					setFilter(!filter);
					localStorage.setItem("sorteos", JSON.stringify([]));
				}}
				checked={filter ? "checked" : ""}
			/>
		</label>
	);
};
