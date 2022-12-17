function hayRepuesto (arregloActual) {
    if (arregloActual[0].bolosDerribados < 10 && arregloActual[4].totalBolos === 10) {
        return true
    } else {
        return false
    }
}

function huboRepuesto (arregloAnt, arregloActual) { // sumar el primer intento del siguiente frame al puntaje
    if (arregloAnt[6] === true) {
        arregloAnt[7].puntuacion += arregloActual[0].bolosDerribados
    }
}

function hayStrike (arregloActual) {
    if (arregloActual[0].bolosDerribados === 10) {
        return true
    } else {
        return false
    }
}

/*
function huboStrike(arregloAnt, arregloActual){ // Sumar totalBolos del frame actual + totalBolos del siguiente frame
    if( arregloAnt[5].totalBolos == 10){
        arregloAnt[5].totalBolos += arregloActual[6].totalBolos;

    }
}
*/

function huboStrike (arregloAnt, arregloActual) { // Sumar totalBolos del frame actual + totalBolos del siguiente frame
    if (arregloAnt[2] === true) {
        arregloAnt[7].puntuacion += arregloActual[4].totalBolos
    }
}
