import { useState } from "react";
import {
	Formulario,
	Filtro,
	MostrarResultados,
	MostrarFiltrados,
	Cabecera,
} from "./Components";

import { SORTEOS } from "./variables";

export const App = () => {
	const [combinacion, setCombinacion] = useState([]);
	const [sorteo, setSorteo] = useState(SORTEOS.EUROMILLONES);
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
					setSorteo={setSorteo}
					sorteo={sorteo}
				/>
				<Filtro
					filter={filter}
					setFilter={setFilter}
					setSorteo={setSorteo}
					setNumerosFiltrados={setNumerosFiltrados}
				/>
			</aside>

			<main>
				<span></span>
				<MostrarResultados sorteo={sorteo} combinacion={combinacion} />
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
