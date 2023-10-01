export const getToday = () => {
	const fechaHoy = new Date();
	const year = fechaHoy.getFullYear();
	const month = fechaHoy.getMonth() + 1;
	const day = fechaHoy.getDate();

	return `${year}-${month < 10 ? "0" + month : month}-${
		day < 10 ? "0" + day : day
	}`;
};
