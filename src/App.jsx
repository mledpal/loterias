import { useState } from "react";
import {
	Formulario,
	Filtro,
	MostrarResultados,
	MostrarFiltrados,
} from "./Components";

export const App = () => {
	const [combinacion, setCombinacion] = useState([]);
	const [numerosFiltrados, setNumerosFiltrados] = useState([]);
	const [filter, setFilter] = useState(false);

	return (
		<>
			<header>
				<h1>Header</h1>
			</header>

			<aside>
				<Formulario
					filter={filter}
					numerosFiltrados={numerosFiltrados}
					setCombinacion={setCombinacion}
				/>
				<Filtro
					filter={filter}
					setFilter={setFilter}
					setNumerosFiltrados={setNumerosFiltrados}
				/>
			</aside>

			<main>
				<MostrarResultados combinacion={combinacion} />
				<footer>
					<MostrarFiltrados numerosFiltrados={numerosFiltrados} />
				</footer>
			</main>

			<footer>
				<p>Miguel Ledesma Palacios</p>
				<p>2023</p>
			</footer>
		</>
	);
};

export default App;
