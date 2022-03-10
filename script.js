let lastKey = "";

for (i=0; i<10; i++) {
    for (j=0; j<10; j++) {
        field = document.querySelector('#table').rows[i].cells[j];
        field.textContent = getRandomKey();
    }
}

function getRandomKey() {
    const keys = ["Ab", "A",  "Bb", "B", "Cb", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G"]
    const item = keys[Math.floor(Math.random()*keys.length)];
    if(lastKey === item) {
        return getRandomKey();
    }
    lastKey = item;
    return item;
}