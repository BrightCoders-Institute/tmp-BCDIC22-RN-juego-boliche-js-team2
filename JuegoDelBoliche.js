var frame1 = [{ lanzamiento: 1, bolosDerribados: 1 },
{ function: hayStrike(bolosDerribados)},
{ lanzamiento: 2, bolosDerribados: 4 },
{ totalBolos: 5 },
{ function: hayRepuesto()},
{ puntuacion: 5 }];

var frame2 = [{ lanzamiento: 1, bolosDerribados: 4 },
{ function: huboRepuesto(bolosDerribados)},
{ function: hayStrike(bolosDerribados)},
{ lanzamiento: 2, bolosDerribados: 5 },
{ totalBolos: 5 },
{ function: huboStrike() },
{ function: hayRepuesto()},
{ puntuacion: 14 }];

var frame3 = [{ lanzamiento: 1, bolosDerribados: 6 },
{ lanzamiento: 2, bolosDerribados: 4 }, // repuesto
{ puntuacion: 29 }];

var frame4 = [{ lanzamiento: 1, bolosDerribados: 5 },
{ lanzamiento: 2, bolosDerribados: 5 }, // repuesto
{ puntuacion: 49 }];

var frame5 = [{ lanzamiento: 1, bolosDerribados: 10 }, // strike
{ lanzamiento: 2, bolosDerribados: 0 },
{ puntuacion: 60 }];

var frame6 = [{ lanzamiento: 1, bolosDerribados: 0 },
{ lanzamiento: 2, bolosDerribados: 1 },
{ puntuacion: 61 }];

var frame7 = [{ lanzamiento: 1, bolosDerribados: 7 },
{ lanzamiento: 2, bolosDerribados: 3 }, // repuesto
{ puntuacion: 77 }];

var frame8 = [{ lanzamiento: 1, bolosDerribados: 6 },
{ lanzamiento: 2, bolosDerribados: 4 }, // repuesto
{ puntuacion: 97 }];

var frame9 = [{ lanzamiento: 1, bolosDerribados: 10 }, // strike
{ lanzamiento: 2, bolosDerribados: 0 },
{ puntuacion: 117 }];

// 10° frame tiene 3 lanzamientos (sólo si hace repuesto o strike)
var frame10 = [{ lanzamiento: 1, bolosDerribados: 2 },
{ lanzamiento: 2, bolosDerribados: 8 }, // repuesto
{ lanzamiento: 3, bolosDerribados: 6 },
{ puntuacion: 133 }];
