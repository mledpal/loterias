import "./CheckBox.css";
export const CheckBox = ({ enabled, setEnabled }) => {
	return (
		<label htmlFor='chkFilter'>
			<input
				type='checkbox'
				name='chkFilter'
				onChange={() => {
					setEnabled(!enabled);
				}}
				checked={enabled ? "checked" : ""}
			/>
		</label>
	);
};
