import "./style.css";

const botonDameCarta = document.getElementById("dame-carta");
const botonMePlanto = document.getElementById("me-planto");
const botonNuevaPartida = document.getElementById("nueva-partida");
const elementoPuntuacion = document.getElementById("puntuacion");
const elementoImagen = document.getElementById("carta");
const elementoMensaje = document.getElementById("mensaje");

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

const obtenerUrlCarta = (carta:number):string => {

    switch (carta) {
        case 1:
            return '/src/images/1_as-copas.jpg';
        case 2:
            return '/src/images/2_dos-copas.jpg';
        case 3:
            return '/src/images/3_tres-copas.jpg';
        case 4:
            return '/src/images/4_cuatro-copas.jpg';
        case 5:
            return '/src/images/5_cinco-copas.jpg';
        case 6:
            return '/src/images/6_seis-copas.jpg';
        case 7:
            return '/src/images/7_siete-copas.jpg';
        case 10:
            return '/src/images/10_sota-copas.jpg';
        case 11:
            return '/src/images/11_caballo-copas.jpg';
        case 12:
            return '/src/images/12_rey-copas.jpg';
        default:
            return '/src/images/back.jpg';
    }
}

const mostrarCarta = (urlCarta:string) => {
    if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
        elementoImagen.src = urlCarta;
    }
}

const mostrarMensaje = (mensaje:string) => {
    if (elementoMensaje && elementoMensaje instanceof HTMLDivElement) {
        elementoMensaje.innerHTML = mensaje;
    }
}

const botonesInactivos = () => {
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.disabled = true;
    }
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.disabled = true;
    }
}

const botonesActivos = () => {
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.disabled = false;
    }
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.disabled = false;
    }
}

const gameOver = (puntosTotales:number) => {
    if (puntosTotales === 7.5) {
        mostrarMensaje("¡¡Has ganado🎉🎉!!");
        botonesInactivos();
    } else if (puntosTotales > 7.5) {
        mostrarMensaje("Has obtenido " + puntosTotales + " puntos. Has perdido🫣");
        botonesInactivos();
    }
}

const mePlanto = (puntosTotales:number) => {
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        if (puntosTotales < 5) {
            mostrarMensaje("Has sido muy conservador.");
            botonesInactivos();
        } else if (puntosTotales === 5) {
            mostrarMensaje("Te ha entrado el canguelo, ¿eh?");
            botonesInactivos();
        } else if (puntosTotales > 5 && puntosTotales <= 7) {
            mostrarMensaje("Casi casi...");
            botonesInactivos();
        } else if (puntosTotales === 7.5) {
            mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
            botonesInactivos();
        }
    }
}

const nuevaPartida = () => {
    puntos = 0;
    mostrarPuntuacion(puntos);
    mostrarCarta("/src/images/back.jpg");
    mostrarMensaje("");
    botonesActivos();
}


const ocultarBotones = () => {
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement &&
        botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonDameCarta.style.display = "none";
            botonMePlanto.style.display = "none";
    }
    
}   

const botonProbar = document.createElement("button");
botonProbar.textContent = "¿Quieres seguir probando?";
botonProbar.classList.add("botonProbar");
botonProbar.id="boton-probar";

const contenedorBotones = document.querySelector(".botones");
if (contenedorBotones && contenedorBotones instanceof HTMLDivElement) {
    contenedorBotones.appendChild(botonProbar);
}

if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", () => {
        const carta = numeroAleatorio();
        obtenerUrlCarta(carta);
        const urlCarta = obtenerUrlCarta(carta);
        mostrarCarta(urlCarta)
        const puntosSumados = sumarPuntos(carta);
        actualizarPuntos(puntosSumados);
        mostrarPuntuacion(puntosSumados);
        const puntosTotales = puntosSumados;
        gameOver(puntosTotales);
    })
}

if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", () => { 
        mePlanto(puntos);
        ocultarBotones();
    })
}

if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.addEventListener("click", () => {
        nuevaPartida();
    })
}

if (botonProbar && botonProbar instanceof HTMLButtonElement) {
    botonProbar.addEventListener("click", () => {
        const carta = numeroAleatorio();
        const urlCarta = obtenerUrlCarta(carta);
        mostrarCarta(urlCarta);
        const puntosSimulados = sumarPuntos(carta);
        mostrarMensaje(`La siguiente carta sería un ${carta} y habrías llegado a ${puntosSimulados} puntos.`);
        botonProbar.disabled = true; 
    });
};