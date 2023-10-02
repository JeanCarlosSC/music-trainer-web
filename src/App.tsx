import './App.css';
import SimpleBottomNavigation from './SimpleBottomNavigation';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
	const [page, setPage] = useState(0);

	let button;
	let lastRandomValue = "";

	const keys = ["Ab", "A", "Bb", "B", "Cb", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G"]
	const notes = ["C", "D", "E", "F", "G", "A", "B"];
	const alteraciones = ["", "#", "b"];
	const details = ["maj7", "7", "7(b5)", "7(#5)", "m7", "m7(b5)", "°7", "7sus", "6", "mMaj7"];
	const inversiones = ["7", "6/5", "4/3", "2"];
	const modes = ["Jónico", "Dórico", "Frigio", "Lidio", "Eólico", "Mixolidio", "Locrio"];
	const intervalos = ["Unísono", "Segunda menor", "Segunda mayor", "Tercera menor", "Tercera mayor", "Cuarta justa", "Tritono", "Quinta justa", "Sexta menor", "Sexta mayor", "Séptima menor", "Séptima mayor", "Octava"];
	const triadas = ["Tríada mayor", "Tríada menor", "Tríada disminuida", "Tríada aumentada"]

	function goToPage(i: number) {
		setPage(i);
		document.querySelector("#content")!.innerHTML = '';
	}

	function getRandomFrom(array: string[]): string {
		const randomValue = array[Math.floor(Math.random() * array.length)]; // random key

		// doesn't repeat consecutive key
		if (lastRandomValue === randomValue) {
			return getRandomFrom(array); // pick another random key
		}
		lastRandomValue = randomValue; // save key to avoid repetition

		return randomValue;
	}

	function getRandomKey(): string {
		return getRandomFrom(notes) + getRandomFrom(alteraciones);
	}

	function isValidInput(array: string[][], value: string, pos: number[]) {
		for (let j = 0; j < 12; j++) {
			if (array[pos[0]][j] === value) {
				return false;
			}
		}
		for (let i = 0; i < pos[0]; i++) {
			if (array[i][pos[1]] === value) {
				return false;
			}
		}
		return true;
	}

	// sort an array randomly
	function shuffle(array: Array<string>) {
		let currentIndex = array.length, randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex > 0) {

			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	function dibujarHojaRandom() {
		goToPage(0);

		let pOutput1 = document.createElement("DIV");
		pOutput1.classList.add("center");
		document.querySelector("#content")!.appendChild(pOutput1);

		let dTable = document.createElement("DIV");
		dTable.classList.add("table");
		pOutput1.appendChild(dTable);

		// create i paragraphs in the table div
		for (let i = 0; i < 144; i++) {
			let paragraph = document.createElement("P");
			paragraph.classList.add("square");
			paragraph.classList.add("full_width");
			dTable.appendChild(paragraph);
		}

		// updates each paragraph to a random key
		const matrix: string[][] = []
		
		for (let i = 0; i < 12; i++) {
			const keyLine = [
				getRandomFrom(["C", "B#"]),
				getRandomFrom(["C#", "Db"]),
				"D",
				getRandomFrom(["D#", "Eb"]),
				getRandomFrom(["E", "Fb"]),
				getRandomFrom(["F", "E#"]),
				getRandomFrom(["F#", "Gb"]),
				"G",
				getRandomFrom(["G#", "Ab"]),
				"A",
				getRandomFrom(["A#", "Bb"]),
				getRandomFrom(["B", "Cb"])
			]
			shuffle(keyLine)
			matrix[i] = keyLine
		}

		// updates each paragraph to a matrix correspondient
		let field = document.querySelectorAll('P');
		let i = 0
		let j = 0
		field.forEach(element => {
			element.textContent = matrix[i][j]
			j++
			if (j == 12) {
				j = 0
				i++
			}
		});
	}

	function dibujarAcordes() {
		goToPage(1);

		let pOutput1 = document.createElement("DIV");
		pOutput1.classList.add("output");
		document.querySelector("#content")!.appendChild(pOutput1);

		let pKey = document.createElement("P");
		pKey.textContent = getRandomKey();
		pKey.classList.add("square");
		pOutput1.appendChild(pKey);

		let pDetail = document.createElement("p");
		pDetail.textContent = getRandomFrom(details);
		pDetail.classList.add("square");
		pOutput1.appendChild(pDetail);

		let pInversion = document.createElement("p");
		pInversion.textContent = getRandomFrom(inversiones);
		pInversion.classList.add("square");
		pOutput1.appendChild(pInversion);
	}

	function dibujarModos() {
		goToPage(2);

		let d1 = document.createElement("DIV");
		d1.classList.add("output");
		document.querySelector("#content")!.appendChild(d1);

		let pKey = document.createElement("P");
		pKey.textContent = getRandomKey();
		pKey.classList.add("square");
		d1.appendChild(pKey);

		let pMode = document.createElement("P");
		pMode.textContent = getRandomFrom(modes);
		pMode.classList.add("square");
		d1.appendChild(pMode);
	}

	function dibujarIntervalos() {
		goToPage(3);

		let pOutput1 = document.createElement("DIV");
		pOutput1.classList.add("output");
		document.querySelector("#content")!.appendChild(pOutput1);

		let pKey = document.createElement("P");
		pKey.textContent = getRandomKey();
		pKey.classList.add("square");
		pOutput1.appendChild(pKey);

		let pIntervalo = document.createElement("P");
		pIntervalo.textContent = getRandomFrom(intervalos);
		pIntervalo.classList.add("square");
		pOutput1.appendChild(pIntervalo);

		let hAcordes = document.createElement("H1");
		hAcordes.textContent = "Acordes";
		document.querySelector("#content")!.appendChild(hAcordes);

		let pOutput2 = document.createElement("DIV");
		pOutput2.classList.add("output");
		document.querySelector("#content")!.appendChild(pOutput2);

		let pTriada = document.createElement("P");
		pTriada.textContent = getRandomFrom(triadas);
		pTriada.classList.add("square");
		pOutput2.appendChild(pTriada);

		let pInversion = document.createElement("P");
		pInversion.textContent = getRandomFrom(inversiones);
		pInversion.classList.add("square");
		pOutput2.appendChild(pInversion);

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
		case 3: {
			button = <Button variant="contained" onClick={dibujarIntervalos}>Generar</Button>
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
				<SimpleBottomNavigation
					dibujarHojaRandom={dibujarHojaRandom} dibujarAcordes={dibujarAcordes}
					dibujarModos={dibujarModos} dibujarIntervalos={dibujarIntervalos} />
				<div id='content'></div>
				{button}
			</div>
		</div>
	);
}

export default App;
