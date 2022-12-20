<h1 align="center">
    <p align="center">El juego del Boliche</p>
    <img src="img/logo.png" alt="Brigthcoders">
</p>
</h1>

- [Ver instrucciones](./instructions.md)

<p align="center">
    <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
    <img src="https://img.shields.io/github/stars/camilafernanda?style=social">
    <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest">
    <a href="https://www.codacy.com/gh/BrightCoders-Institute/tmp-BCDIC22-RN-juego-boliche-js-team2/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BrightCoders-Institute/tmp-BCDIC22-RN-juego-boliche-js-team2&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/64e5eff9d59e4b3d8e67f58b87f5ccf0"/></a>
</p>

> **Estamos aprendiendo sobre la marcha :D**

- [Descripción](#descripción)
- [Cómo instalar y correr el proyecto](#cómo-instalar-y-correr-el-proyecto)
- [Cómo usar el proyecto](#cómo-usar-el-proyecto)
- [Tecnologías](#tecnologías)
- [Créditos](#créditos)

## Descripción
Este proyecto trata de emular el juego del boliche.

- El juego del bolcihe consiste en 10 frames como se muestra en la imagen de abajo.
- En cada frame el jugador tiene 2 oportunidades para derribar 10 bolos. El puntaje para el frame es el número total de bolos derribados, más los bonus por strikes y repuestos.
    - Un repuesto es cuando el jugaor derriba los 10 bolos en 2 intentos. El bonus para ese frame es el número de bolos derribados en el siguiente turno.
    - Un strike es cuando el jugador derriba los 10 bolos en su primer intento. El bonus para ese frame es el valor de las siguientes dos bolas rodadas.
    - En el décimo frame, el jugador que logre hacer un repuesto o un stike, tiene permitido un tercer intento para completar el frame. Aunque no más de 3 bolas pueden ser rodadas en el décimo frame.

![Juego-del-boliche](img/bowling.png)

## Cómo instalar y correr el proyecto
- Clonar el repositorio. Este proyecto se ejecuta con node.

## Cómo usar el proyecto
```bash
node Cuadros.js
```
Se puede ejecutar las veces que sean necesarias y los cuadros serán distintos cada vez. Si da un error en la terminal, es cuestión de ejecutarlo hasta que funcione.

## Tecnologías
- ESLint
- Jest
- Codacy

## Créditos
| [<img src="https://avatars.githubusercontent.com/u/116323123?v=4" width=115><br><sub>Esmeralda Flores</sub>](https://github.com/FloresEsme) |  [<img src="https://avatars.githubusercontent.com/u/72289396?v=4" width=115><br><sub>Carlos Baltazar</sub>](https://github.com/Zarlbarlt) |  [<img src="https://avatars.githubusercontent.com/u/61769763?v=4" width=115><br><sub>Elias Franco</sub>](https://github.com/EliasCode79) |
| :---: | :---: | :---: |