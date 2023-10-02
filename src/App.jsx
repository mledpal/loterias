import { useState } from "react";
import { Formulario } from "./Components";
import { Filtro } from "./Components/Filtro/Filtro";
import { obtenerDatos } from "./helpers/getData";
import { MostrarResultados } from "./Components/MostrarResultados/MostrarResultados";

export const App = () => {
	const [combinacion, setCombinacion] = useState([]);

	return (
		<>
			<header>
				<h1>LotoGenerator</h1>
			</header>

			<aside>
				<Formulario setCombinacion={setCombinacion} />
				<Filtro obtenerDatos={obtenerDatos} />
			</aside>

			<main>
				<MostrarResultados combinacion={combinacion} />
			</main>

			<footer>
				<p>Miguel Ledesma Palacios</p>
				<p>2023</p>
			</footer>
		</>
	);
};

export default App;
