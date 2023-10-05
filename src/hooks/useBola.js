import { useRef } from "react";

export const useBola = (setNumerosFiltrados, numerosFiltrados) => {
	const bolaRef = useRef();

	const eliminarBolaLista = () => {
		const numero = parseInt(bolaRef.current.innerHTML);
		const index = numerosFiltrados.indexOf(numero);
		const nuevoFiltro = [...numerosFiltrados];
		nuevoFiltro.splice(index, 1);
		setNumerosFiltrados(nuevoFiltro);
	};

	const handleClick = (e) => {
		bolaRef.current.classList.add("quitarBola");
		const borrarTimeOut = setTimeout(eliminarBolaLista, 300);
	};

	return {
		bolaRef,
		handleClick,
	};
};
