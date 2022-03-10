let lastKey = "";

let field = document.querySelectorAll('p');
console.log(field);
field.forEach(element => element.textContent = getRandomKey());

function getRandomKey() {
    const keys = ["Ab", "A",  "Bb", "B", "Cb", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G"]
    const item = keys[Math.floor(Math.random()*keys.length)];
    if(lastKey === item) {
        return getRandomKey();
    }
    lastKey = item;
    return item;
}