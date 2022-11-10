import './App.css';
import SimpleBottomNavigation from './SimpleBottomNavigation';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
	const [page, setPage] = useState(0);

	let button;

	function dibujarHojaRandom() {
		setPage(0);

		const keys = ["Ab", "A", "Bb", "B", "Cb", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G"] // keys
		let lastKey = ""; // so as not to repeat key

		document.getElementById("table")!.innerHTML = '';

		// create i paragraphs in the table div
		for (let i = 0; i < 150; i++) {
			let paragraph = document.createElement("p");
			document.getElementById("table")!.appendChild(paragraph);
		}

		// updates each paragraph to a random key
		let field = document.querySelectorAll('p');
		field.forEach(element => element.textContent = getRandomKey());

		// return a random string key from keys without consecutive repetition
		function getRandomKey(): string {
			const randomKey = keys[Math.floor(Math.random() * keys.length)]; // random key

			// doesn't repeat consecutive key
			if (lastKey === randomKey) {
				return getRandomKey(); // pick another random key
			}
			lastKey = randomKey; // save key to avoid repetition

			return randomKey;
		}
	}

	function dibujarAcordes() {
		setPage(1);
		console.log("dibujando acordes");
	
		document.getElementById("table")!.innerHTML = '';
	}
	
	function dibujarModos() {
		setPage(2);
		console.log("dibujando modos");
	}
	
	switch (page) {
		case 1: {
			button = <Button variant="contained" onClick={dibujarAcordes}>Generar</Button>;
			break;
		}
		case 2: {
			button = <Button variant="contained" onClick={dibujarModos}>Generar</Button>;
			break;
		}
		default: {
			button = <Button variant="contained" onClick={dibujarHojaRandom}>Generar</Button>;
			break;
		}
	}

	return (
		<div className="App">
			<meta name="viewport" content="initial-scale=1, width=device-width" />

			<div className="contenido">
				<SimpleBottomNavigation dibujarHojaRandom={dibujarHojaRandom} dibujarAcordes={dibujarAcordes} dibujarModos={dibujarModos} />
				<div className="table" id="table"></div>
				{button}
			</div>
		</div>
	);
}

export default App;
