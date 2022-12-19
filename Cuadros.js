const frames = [
    {
        frame: 1,
        lanzamiento1: 0, // bolos derribados
        lanzamiento2: 0,
        totalBolos: 0,
        puntuacion: 0,
        repuesto: false,
        strike: false
    },
    {
        frame: 2,
        lanzamiento1: 0, // bolos derribados
        lanzamiento2: 0,
        totalBolos: 0,
        puntuacion: 0,
        repuesto: false,
        strike: false
    },
    {
        frame: 3,
        lanzamiento1: 0, // bolos derribados
        lanzamiento2: 0,
        totalBolos: 0,
        puntuacion: 0,
        repuesto: false,
        strike: false
    },
    {
        frame: 4,
        lanzamiento1: 0, // bolos derribados
        lanzamiento2: 0,
        totalBolos: 0,
        puntuacion: 0,
        repuesto: false,
        strike: false
    },
    {
        frame: 5,
        lanzamiento1: 0, // bolos derribados
        lanzamiento2: 0,
        totalBolos: 0,
        puntuacion: 0,
        repuesto: false,
        strike: false
    },
    {
        frame: 6,
        lanzamiento1: 0, // bolos derribados
        lanzamiento2: 0,
        totalBolos: 0,
        puntuacion: 0,
        repuesto: false,
        strike: false
    },
    {
        frame: 7,
        lanzamiento1: 0, // bolos derribados
        lanzamiento2: 0,
        totalBolos: 0,
        puntuacion: 0,
        repuesto: false,
        strike: false
    },
    {
        frame: 8,
        lanzamiento1: 0, // bolos derribados
        lanzamiento2: 0,
        totalBolos: 0,
        puntuacion: 0,
        repuesto: false,
        strike: false
    },
    {
        frame: 9,
        lanzamiento1: 0, // bolos derribados
        lanzamiento2: 0,
        totalBolos: 0,
        puntuacion: 0,
        repuesto: false,
        strike: false
    },
    {
        frame: 10,
        lanzamiento1: 0, // bolos derribados
        lanzamiento2: 0,
        lanzamiento3: 0,
        totalBolos: 0,
        puntuacion: 0,
        repuesto: false,
        strike: false
    }
]

const bolos1 = frames.map(item => { // bolos en intento 1
    item.lanzamiento1 = Math.floor((Math.random() * (0 + 10)) + 1)
    return item.lanzamiento1
}
)
console.log(bolos1)

const bolos2 = frames.map(item => { // bolos en intento 2
    let c = 10
    if (item.lanzamiento1 === 10) {
        item.lanzamiento2 = 0
    } else {
        c = c - item.lanzamiento1
        item.lanzamiento2 = Math.floor((Math.random() * (0 + c)) + 1)
    }
    return item.lanzamiento2
})
console.log(bolos2)

const bolosTotales = frames.map(item => { // total de bolos
    item.totalBolos = item.lanzamiento1 + item.lanzamiento2
    return item.totalBolos
})
console.log(bolosTotales)

const hayRepuesto = frames.map(item => { // verificar repuesto
    if (item.frame === 10) {
        if (item.lanzamiento1 + item.lanzamiento2 === 10 && item.lanzamiento1 !== 10) {
            item.repuesto = true
        }
    } else if (item.lanzamiento1 < 10 && item.totalBolos === 10) {
        item.repuesto = true
    } else {
        item.repuesto = false
    }
    return item.lanzamiento1
})
console.log(hayRepuesto)

const hayStrike = frames.map(item => { // verificar strike
    if (item.lanzamiento1 === 10) {
        item.strike = true
    } else {
        item.strike = false
    }
    return item.bolosTotales
})
console.log(hayStrike)

const puntaje = frames.map(item => { // puntaje
    let c = 0
    if (item.frame === 1) {
        if (item.repuesto === true) {
            c = item.frame + 1
            item.puntuacion = item.totalBolos + frames[c].lanzamiento1
        } else if (item.strike === true) {
            c = item.frame + 1
            item.puntuacion = item.totalBolos + frames[c].totalBolos
        } else {
            item.puntuacion = item.totalBolos
        }
    } else if (item.frame === 10) {
        if (item.repuesto === true) {
            c = item.frame - 2
            item.puntuacion = item.totalBolos + frames[c].puntuacion
        } else if (item.strike === true) {
            c = item.frame - 2
            item.puntuacion = item.totalBolos + frames[c].puntuacion
        }
    } else if (item.repuesto === true) {
        c = item.frame - 2
        item.puntuacion = frames[c].puntuacion + item.totalBolos
        c = item.frame + 2
        item.puntuacion += frames[c].lanzamiento1
    } else if (item.strike === true) {
        c = item.frame - 2
        item.puntuacion = frames[c].puntuacion + item.totalBolos
        c = item.frame + 2
        item.puntuacion += frames[c].totalBolos
    } else {
        c = item.frame - 2
        item.puntuacion = frames[c].puntuacion + item.totalBolos
    }
    return item.puntuacion
})
console.log(puntaje)

console.log(frames)

/*
let item = frames.forEach(item => {
    item[saludo] = 'hola'
})
*/

module.exports = frames
