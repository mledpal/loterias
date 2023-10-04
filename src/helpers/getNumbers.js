export const generarNumeros = (CANTIDAD, MAXIMO, filtro, numerosFiltrados) => {
	const numeros = [];

	for (let i = 0; i < CANTIDAD; i++) {
		let num = Math.floor(Math.random() * MAXIMO) + 1;
		while (
			numeros.includes(num) ||
			(filtro && numerosFiltrados.includes(num))
		) {
			num = Math.floor(Math.random() * MAXIMO) + 1;
		}
		numeros.push(num);
	}

	return numeros.sort((a, b) => {
		return a - b;
	});
};
