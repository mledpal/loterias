import { useState } from "react";
import { Formulario, Filtro, MostrarResultados } from "./Components";

export const App = () => {
	const [combinacion, setCombinacion] = useState([]);

	return (
		<>
			<header>
				<h1>Header</h1>
			</header>

			<aside>
				<Formulario setCombinacion={setCombinacion} />
				<Filtro />
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
