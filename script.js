// script.js
const keys = ["Ab", "A",  "Bb", "B", "Cb", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G"] // keys
let lastKey = ""; // so as not to repeat key

// create 240 paragraphs in the table div
for(let i=0; i<240; i++) {
    let paragraph = document.createElement("p");
    document.getElementById("table").appendChild(paragraph);
}

// updates each paragraph to a random key
let field = document.querySelectorAll('p');
field.forEach(element => element.textContent = getRandomKey());

// return a random string key from keys without consecutive repetition
function getRandomKey() {
    const randomKey = keys[Math.floor(Math.random()*keys.length)]; // random key

    // doesn't repeat consecutive key
    if(lastKey === randomKey) {
        return getRandomKey(); // pick another random key
    }
    lastKey = randomKey; // save key to avoid repetition

    return randomKey;
}
