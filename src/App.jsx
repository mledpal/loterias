import { useState } from "react";
import {
	Formulario,
	Filtro,
	MostrarResultados,
	MostrarFiltrados,
	Cabecera,
} from "./Components";

export const App = () => {
	const [combinacion, setCombinacion] = useState([]);
	const [numerosFiltrados, setNumerosFiltrados] = useState([]);
	const [filter, setFilter] = useState(false);

	return (
		<>
			<header>
				<Cabecera />
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
				<p>
					<a href='https://github.com/mledpal/loterias' target='_new'>
						Proyecto en GitHub
					</a>
				</p>
				<p>2023</p>
			</footer>
		</>
	);
};

export default App;
