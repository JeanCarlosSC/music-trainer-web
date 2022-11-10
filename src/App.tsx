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

		document.getElementById("table")!.innerHTML = '';

		let lastKey = "";
		function getRandomKey(): string {
			const notes = ["C", "D", "E", "F", "G", "A", "B"];
			const randomNote = notes[Math.floor(Math.random() * notes.length)];

			const alteraciones = ["", "#", "b"];
			const randomAlteracion = alteraciones[Math.floor(Math.random() * alteraciones.length)];

			const randomKey = randomNote + randomAlteracion;

			// doesn't repeat consecutive key
			if (lastKey === randomKey) {
				return getRandomKey(); // pick another random key
			}
			lastKey = randomKey; // save key to avoid repetition

			return randomKey;
		}
		let pKey = document.createElement("p");
		pKey.textContent = getRandomKey();
		document.getElementById("table")!.appendChild(pKey);

		let lastDetail = "";
		function getRandomDetail(): string {
			const details = ["maj7", "7", "7(b5)", "7(#5)", "m7", "m7(b5)", "°7", "7sus", "6", "mMaj7"];
			const randomDetail = details[Math.floor(Math.random() * details.length)];

			// doesn't repeat consecutive key
			if (lastDetail === randomDetail) {
				return getRandomDetail(); // pick another random key
			}
			lastDetail = randomDetail; // save key to avoid repetition

			return randomDetail;
		}
		let pDetail = document.createElement("p");
		pDetail.textContent = getRandomDetail();
		document.getElementById("table")!.appendChild(pDetail);

		let lastInversion = "";
		function getRandomInversion(): string {
			const inversions = ["7", "6/5", "4/3", "2"];
			const randomInversion = inversions[Math.floor(Math.random() * inversions.length)];

			// doesn't repeat consecutive key
			if (lastInversion === randomInversion) {
				return getRandomInversion(); // pick another random key
			}
			lastInversion = randomInversion; // save key to avoid repetition

			return randomInversion;
		}
		let pInversion = document.createElement("p");
		pInversion.textContent = getRandomInversion();
		document.getElementById("table")!.appendChild(pInversion);
	}

	function dibujarModos() {
		setPage(2);

		document.getElementById("table")!.innerHTML = '';

		let lastKey = "";
		function getRandomKey(): string {
			const notes = ["C", "D", "E", "F", "G", "A", "B"];
			const randomNote = notes[Math.floor(Math.random() * notes.length)];

			const alteraciones = ["", "#", "b"];
			const randomAlteracion = alteraciones[Math.floor(Math.random() * alteraciones.length)];

			const randomKey = randomNote + randomAlteracion;

			// doesn't repeat consecutive key
			if (lastKey === randomKey) {
				return getRandomKey(); // pick another random key
			}
			lastKey = randomKey; // save key to avoid repetition

			return randomKey;
		}
		let pKey = document.createElement("p");
		pKey.textContent = getRandomKey();
		document.getElementById("table")!.appendChild(pKey);

		let lastMode = "";
		function getRandomMode(): string {
			const Modes = ["Jónico", "Dórico", "Frigio", "Lidio", "Eólico", "Mixolidio", "Locrio"];
			const randomMode = Modes[Math.floor(Math.random() * Modes.length)];

			// doesn't repeat consecutive key
			if (lastMode === randomMode) {
				return getRandomMode(); // pick another random key
			}
			lastMode = randomMode; // save key to avoid repetition

			return randomMode;
		}
		let pMode = document.createElement("p");
		pMode.textContent = getRandomMode();
		document.getElementById("table")!.appendChild(pMode);
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
				<div className="center">
					<div className="table" id="table"></div>
				</div>
				{button}
			</div>
		</div>
	);
}

export default App;
