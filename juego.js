class JuegoBoliche{
    fila

    constructor (){
        this.setFila
    }

    setFila(){
        this.setFila = []
    }

    random (min, max){
        return Math.floor((Math.random()* (max - min + 1)) + min)
    }

    llenarFila (){
        for (let i = 0; i < this.fila; i++){
            this.fila[i] = new Array(0)
        }
        console.log(this.fila)

        for (let i=0; i < 10; i++) {
        }
    }
    
}
