let frame1 = [{ lanzamiento: 1, bolosDerribados: 1 },
    { lanzamiento: 2, bolosDerribados: 4 },
    { totalBolos: 5 },
    { puntuacion: 5 }]

let frame2 = [{ lanzamiento: 1, bolosDerribados: 4 },
    { lanzamiento: 2, bolosDerribados: 5 },
    { totalBolos: 9 },
    { puntuacion: 14 }]

let frame3 = [{ lanzamiento: 1, bolosDerribados: 6 },
    huboRepuesto(bolosDerribados, totalBolos), // False (frame2)
    hayStrike(bolosDerribados), // False
    { lanzamiento: 2, bolosDerribados: 4 }, // Hay repuesto
    { totalBolos: 10},
    huboStrike(), // True (frame2)
    hayRepuesto(), // True
    { puntuacion: 29 }]

let frame4 = [{ lanzamiento: 1, bolosDerribados: 5 },
    huboRepuesto(bolosDerribados, totalBolos), // True (frame 3)
    hayStrike(bolosDerribados), // False
    { lanzamiento: 2, bolosDerribados: 5 }, // Hay repuesto
    { totalBolos: 10 },
    huboStrike(), // False (frame 3)
    hayRepuesto(), // True
    { puntuacion: 49 }]

let frame5 = [{ lanzamiento: 1, bolosDerribados: 10 }, // Hay strike
    { lanzamiento: 2, bolosDerribados: 0 },
    { totalBolos: 10 },
    { puntuacion: 60 }]

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
    { puntuacion: 117 }]

// 10° frame tiene 3 lanzamientos (sólo si hace repuesto o strike)
let frame10 = [{ lanzamiento: 1, bolosDerribados: 2 },
    { lanzamiento: 2, bolosDerribados: 8 }, // Hay repuesto
    { lanzamiento: 3, bolosDerribados: 6 },
    { totalBolos: 16 },
    { puntuacion: 133 }]
