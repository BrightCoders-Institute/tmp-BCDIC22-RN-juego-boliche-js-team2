/*
function hayRepuesto (arregloActual) {
    if (arregloActual.bolosDerribados < 10 && arregloActual.totalBolos === 10) {
        return true
    } else {
        return false
    }
}

function huboRepuesto (arregloAnt, arregloActual) { // sumar el primer intento del siguiente frame al puntaje
    if (arregloAnt[6] === true) {
        arregloAnt.puntuacion += arregloActual.bolosDerribados
    }
}

function hayStrike (arregloActual) {
    if (arregloActual.bolosDerribados === 10) {
        return true
    } else {
        return false
    }
}
*/

/*
function huboStrike(arregloAnt, arregloActual){ // Sumar totalBolos del frame actual + totalBolos del siguiente frame
    if( arregloAnt[5].totalBolos == 10){
        arregloAnt[5].totalBolos += arregloActual[6].totalBolos;

    }
}

function huboStrike (arregloAnt, arregloActual) { // Sumar totalBolos del frame actual + totalBolos del siguiente frame
    if (arregloAnt[2] === true) {
        arregloAnt.puntuacion += arregloActual.totalBolos
    }
}
*/

let frame1 = [{ lanzamiento: 1, bolosDerribados: 1 },
    { lanzamiento: 2, bolosDerribados: 4 },
    { totalBolos: 5 },
    { puntuacion: 5 }]

let frame2 = [{ lanzamiento: 1, bolosDerribados: 4 },
    { lanzamiento: 2, bolosDerribados: 5 },
    { totalBolos: 9 },
    { puntuacion: 14 }]

let frame3 = [{ lanzamiento: 1, bolosDerribados: 6 },
    // huboRepuesto(6, 10), // False (frame2)
    // hayStrike(6), // False
    { lanzamiento: 2, bolosDerribados: 4 }, // Hay repuesto
    { totalBolos: 10 },
    // huboStrike(), // True (frame2)
    // hayRepuesto(), // True
    { puntuacion: 29 }] // 24 + 5

let frame4 = [{ lanzamiento: '1', bolosDerribados: 5 },
    // huboRepuesto(5, 10), // True (frame 3)
    // hayStrike(5), // False
    { lanzamiento: '2', bolosDerribados: 5 }, // Hay repuesto
    { totalBolos: 10 },
    // huboStrike(), // False (frame 3)
    // hayRepuesto(), // True
    { puntuacion: 49 }] // 29 + 10 + 10

let frame5 = [{ lanzamiento: 1, bolosDerribados: 10 }, // Hay strike
    { lanzamiento: 2, bolosDerribados: 0 },
    { totalBolos: 10 },
    { puntuacion: 60 }] // 49 + 10 + 1

let frame6 = [{ lanzamiento: 1, bolosDerribados: 0 },
    { lanzamiento: 2, bolosDerribados: 1 },
    { totalBolos: 1 },
    { puntuacion: 61 }]

let frame7 = [{ lanzamiento: 1, bolosDerribados: 7 },
    { lanzamiento: 2, bolosDerribados: 3 }, // Hay repuesto
    { totalBolos: 10 },
    { puntuacion: 77 }]

let frame8 = [{ lanzamiento: 1, bolosDerribados: 6 },
    { lanzamiento: 2, bolosDerribados: 4 }, // Hay repuesto
    { totalBolos: 10 },
    { puntuacion: 97 }]

let frame9 = [{ lanzamiento: 1, bolosDerribados: 10 }, // Hay strike
    { lanzamiento: 2, bolosDerribados: 0 },
    { totalBolos: 10 },
    { puntuacion: 117 }] // 97 + 10 + 10

// 10° frame tiene 3 lanzamientos (sólo si hace repuesto o strike)
let frame10 = [{ lanzamiento: 1, bolosDerribados: 2 },
    { lanzamiento: 2, bolosDerribados: 8 }, // Hay repuesto
    { lanzamiento: 3, bolosDerribados: 6 },
    { totalBolos: 16 },
    { puntuacion: 133 }] // 117 + 16

let encontrar = frame4.find(encontrar => encontrar.lanzamiento === '1') // && carro.tipo === "cabrio"

/*
const ejecuta = frame4.map(function (element) {
    // return `${element.firstName} ${element.lastName}`
    return console.log(frame4)
})
*/

console.log(encontrar)
