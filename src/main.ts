import "./style.css";

const botonDameCarta = document.getElementById("dame-carta");
const botonMostrarCarta = document.getElementById("mostrar-carta");
const botonMePlanto = document.getElementById("me-planto");
const botonNuevaPartida = document.getElementById("nueva-partida");
const elementoPuntuacion = document.getElementById("puntuacion");
const elementoImagen = document.getElementById("imagen-carta");

const numeroAleatorio = (): number => {
    const carta = Math.floor (Math.random() * 10) + 1;
        if (carta > 7) {
            return carta + 2;
        }
    return carta;
}

let puntos = 0;

const sumarPuntos = (carta:number):number => {

    switch (carta) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            return puntos + carta;
        case 10:
        case 11:
        case 12:
            return puntos +0.5;
        default:
            return puntos +0;       
    }
}

const mostrarPuntuacion = (puntosTotales:number) => {
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLDivElement) {
        elementoPuntuacion.innerHTML = puntosTotales.toString();
    }
}

const actualizarPuntos = (puntosSumados:number) => {
    puntos = puntosSumados;
}

if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", () => {
        const carta = numeroAleatorio();
        console.log(carta, puntos);
        const puntosSumados = sumarPuntos(carta);
        actualizarPuntos(puntosSumados);
        mostrarPuntuacion(puntosSumados);
    })
}