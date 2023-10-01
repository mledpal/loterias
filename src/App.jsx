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
			</aside>

			<main>
				<form action=''>
					<label for='numeros'>
						Números
						<input name='nums' id='nums' type='number' value='6' required />
					</label>
					<label for='otros'>
						Otros
						<input name='otros' id='otros' type='number' value='2' required />
					</label>
					<button type='button' id='actualizar'>
						Actualizar
					</button>
				</form>

				<div class='numeros'>
					<div id='numeros'></div>
					<div id='estrellas'></div>
				</div>
			</main>

			<footer>
				<p>Miguel Ledesma Palacios</p>
				<p>2023</p>
			</footer>
		</>
	);
};

export default App;
