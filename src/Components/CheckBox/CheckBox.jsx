import "./CheckBox.css";
export const CheckBox = ({ filter, setFilter }) => {
	return (
		<label htmlFor='chkFilter'>
			<input
				type='checkbox'
				name='chkFilter'
				onChange={() => {
					setFilter(!filter);
				}}
				checked={filter ? "checked" : ""}
			/>
		</label>
	);
};
