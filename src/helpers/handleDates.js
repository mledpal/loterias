const getToday = () => {
	const fechaHoy = new Date();
	const year = fechaHoy.getFullYear();
	const month = fechaHoy.getMonth() + 1;
	const day = fechaHoy.getDate();

	return `${year}-${month < 10 ? "0" + month : month}-${
		day < 10 ? "0" + day : day
	}`;
};

const date2Number = (fecha) => {
	const fechaTransformar = new Date(fecha);
	const year = fechaTransformar.getFullYear();
	const month = fechaTransformar.getMonth() + 1;
	const day = fechaTransformar.getDate();

	return `${year}-${month < 10 ? "0" + month : month}-${
		day < 10 ? "0" + day : day
	}`;
};

export { date2Number, getToday };
