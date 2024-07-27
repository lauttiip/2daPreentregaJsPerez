alert("Bienvenido a Lauti´s Quiezzes");

let nombreUser = String(prompt("Antes de empezar vamos a necesitar tu nombre"));
let validacionDeNombre = false;

do {
    nombreUser = nombreUser.trim();
    if (nombreUser !== "") {
        alert("Buen nombre, ahora si arranquemos " + nombreUser);
        validacionDeNombre = true;
        break;
    } else {
        alert("Nombre incorrecto");
    }
    nombreUser = String(prompt("Introduce de vuelta un nombre"));
} while (true);

const preguntas = [
    {
        pregunta: "¿Cual es la capital de Argentina?",
        opciones: ["A: Mendoza", "B: Cordoba", "C: Buenos Aires", "D: Ninguna de las anteriores"],
        correcta: "C"
    },
    {
        pregunta: "¿Cual fue el ECMAScript mas importante hasta la fecha?",
        opciones: ["A: ES8", "B: ES6", "C: ES12", "D: ES5"],
        correcta: "B"
    },
    {
        pregunta: "¿Quien se dice que es el PIONERO de la programacion?",
        opciones: ["A: Ada Lovelace", "B: Grace Hopper", "C: Bill Gates", "D: Alan Turing"],
        correcta: "A"
    }
];

const preguntasMath = [
    {
        pregunta: "Juan tiene 5 pelotas. Su amigo Nacho le da 3 pelotas más. Luego, Juan le da 2 pelotas a su amiga Ana. ¿Cuántas pelotas tiene Juan ahora?",
        opciones: ["A: 2", "B: 6", "C: 4", "D: 5"],
        correcta: "B"
    },
    {
        pregunta: "Ana tiene 12 galletas. Ella decide dar 3 galletas a cada uno de sus 4 amigos. Después, recibe 8 galletas más de su mamá. Luego, decide dividir todas sus galletas restantes en partes iguales entre ella y su hermana. ¿Cuántas galletas recibe cada una al final?",
        opciones: ["A: 3", "B: 2", "C: 4", "D: 6"],
        correcta: "C"
    }
];

function validarRespuesta(respuesta, correcta) {
    return respuesta.toUpperCase() === correcta;
}

function obtenerOpcionesConFiltro(pregunta) {
    return pregunta.opciones.filter(opcion => !opcion.includes('Ninguna'));
}

function obtenerPreguntaPorIndice(preguntas, indice) {
    return preguntas.find((pregunta, idx) => idx === indice);
}

function questions() {
    for (let i = 0; i < preguntas.length; i++) {
        let pregunta = obtenerPreguntaPorIndice(preguntas, i);
        alert(pregunta.pregunta);
        let opciones = obtenerOpcionesConFiltro(pregunta);

        for (let j = 0; j < 4; j++) {
            const respuesta = prompt(opciones.join("\n"));
            if (validarRespuesta(respuesta, pregunta.correcta)) {
                alert("Felicidades respondiste correctamente");
                break;
            } else if (j < 3) {
                alert(`Incorrecto, te quedan ${2 - j} intentos`);
            } else {
                alert("Has perdido en la pregunta, se reiniciará solo, tocar enter");
                return false;
            }
        }
    }
    return true;
}

function questionsMath() {
    for (let i = 0; i < preguntasMath.length; i++) {
        let pregunta = obtenerPreguntaPorIndice(preguntasMath, i);
        alert(pregunta.pregunta);
        let opciones = obtenerOpcionesConFiltro(pregunta);

        for (let j = 0; j < 3; j++) {
            const respuesta = prompt(opciones.join("\n"));
            if (validarRespuesta(respuesta, pregunta.correcta)) {
                alert("Felicidades respondiste correctamente");
                break;
            } else if (j < 2) {
                alert(`Incorrecto, te quedan ${2 - j} intentos`);
                usarCalculadora();
            } else {
                alert("Has perdido en la pregunta, se reiniciará solo, tocar enter");
                return false;
            }
        }
    }
    return true;
}

function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case 1:
            return num1 + num2;
        case 2:
            return num1 - num2;
        case 3:
            return num1 * num2;
        case 4:
            return num1 / num2;
        default:
            alert("No introdujo ninguna operación");
            break;
    }
}

function usarCalculadora() {
    let operacion = Number(prompt("¿Qué desea?\n 1: sumar 2: restar 3: multiplicar 4: dividir 5: salir"));
    while (operacion !== 5) {
        let numero1 = Number(prompt("Ingresar primer número"));
        let numero2 = Number(prompt("Ingresar segundo número"));
        let resultado = calculadora(numero1, numero2, operacion);
        alert("El resultado es " + resultado);
        operacion = Number(prompt("¿Qué desea?\n 1: sumar 2: restar 3: multiplicar 4: dividir 5: salir"));
    }
}

if (validacionDeNombre) {
    if (questions()) {
        if (questionsMath()) {
            alert("MUCHAS GRACIAS POR PARTICIPAR, próximamente se hará su aplicación web.");
        }
    }
}
