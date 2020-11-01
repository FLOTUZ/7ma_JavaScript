//Ejercicio 2.1: Crear una función que reciba una
//cadena y un carácter, debe regresar el número de
//veces que se encuentra ese carácter en la cadena.

function frecuencyChar(boton) {
    let form = boton.form.elements;
    let word = form["word"].value;
    let character = form["char"].value;

    let indices = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === character) indices.push(i);
    }
    document.getElementById("resultado").innerHTML = "Hé encontrado: " + indices.length + " coincidencias";
}

// Ejercicio 2.2: Crear función que reciba una letra 
// y regrese su valor correspondiente del alfabeto radiofónico.
function alphabet(botton) {
    let alphabet = {
        "a": "alfa",
        "b": "bravo",
        "c": "charlie",
        "d": "delta",
        "e": "echo",
        "f": "foxtrot",
        "g": "golf",
        "h": "hotel",
        "i": "india",
        "j": "juliett",
        "k": "kilo",
        "l": "lima",
        "m": "mike",
        "n": "november",
        "o": "oscar",
        "p": "papa",
        "q": "quebec",
        "r": "romeo",
        "s": "sierra",
        "t": "tango",
        "u": "uniform",
        "v": "victor",
        "w": "whiskey",
        "x": "xray",
        "y": "yankee",
        "z": "zulu",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "0": "zero"
    };
    let form = botton.form.elements;
    let letter = form["letter"].value;
    //Se obtiene la llave que busco en mi objeto alphabet
    let code = alphabet[letter];

    document.getElementById("code").innerHTML = letter + " en el alfabeto radiofonico es " + code;

}


// Ejercicio 2.3: Crear función que reciba un carácter 
// y regrese su valor en correspondiente en ascii.
function ascii(button) {
    console.log(button.form.elements);
    let form = button.form.elements;
    let letra = form['letra'].value;;

    let asciiCode = letra.charCodeAt(letra);

    document.getElementById("asc").innerHTML = letra + " en codigo ascii es: " + asciiCode;
}