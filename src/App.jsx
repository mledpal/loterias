import { Formulario } from "./Components";
import { Filtro } from "./Components/Filtro/Filtro";

export const App = () => {
	return (
		<>
			<header>
				<h1>LotoGenerator</h1>
				<hr />
			</header>

			<aside>
				<Filtro />
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
