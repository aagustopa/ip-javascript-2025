class Crono {
    tiempoInicio = 0;
    tiempoFinal = 0;
    start() {
        this.tiempoInicio = Date.now()
    }
    stop() {
        this.tiempoFinal = Date.now();
    }
    showtime() {
        const tiempoTotal = this.tiempoFinal - this.tiempoInicio;;
        return tiempoTotal / 1000;
    }
    reset() {
        // poner a 0 ambos valores
        this.tiempoInicio = 0;
        this.tiempoFinal = 0;
    }
}

const crono1 = new Crono();

// const start = Date.now();
// console.log(start);

// const start = new Date();

// const currentDate = Math.floor((Date.now() - start) / 1000);
// console.log(currentDate);