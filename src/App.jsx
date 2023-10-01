import { Formulario } from "./Components";
import { Filtro } from "./Components/Filtro/Filtro";
import { obtenerDatos } from "./helpers/getData";

export const App = () => {
	return (
		<>
			<header>
				<h1>LotoGenerator</h1>
			</header>

			<aside>
				<Filtro obtenerDatos={obtenerDatos} />
				<Formulario />
			</aside>

			<main>
				<h2>Resultados</h2>
			</main>

			<footer>
				<p>Miguel Ledesma Palacios</p>
				<p>2023</p>
			</footer>
		</>
	);
};

export default App;
