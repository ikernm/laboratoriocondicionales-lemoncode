import "./style.css";

const botonDameCarta = document.getElementById("dame-carta");
const botonMePlanto = document.getElementById("me-planto");
const botonNuevaPartida = document.getElementById("nueva-partida");
const elementoPuntuacion = document.getElementById("puntuacion");
const elementoImagen = document.getElementById("carta");
const elementoMensaje = document.getElementById("mensaje");

/*
const numeroAleatorio = (): number => {
    const carta = Math.floor (Math.random() * 10) + 1;
        if (carta > 7) {
            return carta + 2;
        }
    return carta;
}
*/
const dameNumeroAleatorio = () => {
    return Math.floor (Math.random() * 10) + 1;
}

const dameNumeroCarta = (numeroAleatorio: number): number => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    }
    return numeroAleatorio; 
}

let puntos = 0;

const damePuntosCarta = (carta: number): number => {
    if (carta > 7) {
        return 0.5;
    } else {
        return carta;
    }
}

const sumarPuntos = (puntosCarta:number):number => {

    return puntos + puntosCarta;
   /* switch (carta) {
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
    */
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

const gameOver = () => {
    if (puntos === 7.5) {
        mostrarMensaje("¡¡Has ganado🎉🎉!!");
        botonesInactivos();
    } else if (puntos > 7.5) {
        mostrarMensaje("Has obtenido " + puntos + " puntos. Has perdido🫣");
        botonesInactivos();
    }
}

const dameMensajeCuandoMePlanto = (puntos: number) => {
    if (puntos < 5) {
        return "Has sido muy conservador.";
    } else if (puntos === 5) {
        return "Te ha entrado el canguelo, ¿eh?";
    } else if (puntos > 5 && puntos <= 7) {
        return "Casi casi...";
    } else if (puntos === 7.5) {
        return "¡Lo has clavado! ¡Enhorabuena!";
    } else {
        return "error!";
    }
}


const mePlanto = () => {  
    const mensaje = dameMensajeCuandoMePlanto(puntos);
    mostrarMensaje(mensaje);
    botonesInactivos();
    ocultarBotonesPrincipales();
    activarBotonProbar();

    /*if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
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
    */
}

const ocultarBotonesPrincipales = () => {
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement &&
        botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonDameCarta.style.display = "none";
            botonMePlanto.style.display = "none";
    }
}

const activarBotonesPrincipales = () => {
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement &&
        botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonDameCarta.style.display = "block";
            botonMePlanto.style.display = "block";
    }
}


const contenedorBotones = document.querySelector(".botones");

const activarBotonProbar = () => {
    const botonProbar = document.getElementById('boton-probar');
    if (botonProbar && botonProbar instanceof HTMLButtonElement) {
        botonProbar.style.display = "block";
    }
}

const ocultarBotonProbar = () => {
    const botonProbar = document.getElementById('boton-probar');
    if (botonProbar && botonProbar instanceof HTMLButtonElement) {
        botonProbar.style.display = "none";
    }
}

const nuevaPartida = () => {
    // puntos = 0;
    actualizarPuntos(0);
    mostrarPuntuacion(puntos);
    mostrarCarta("/src/images/back.jpg");
    mostrarMensaje("");
    botonesActivos();
    activarBotonesPrincipales();
    ocultarBotonProbar();
}

const dameCarta = () => {
    const numeroAleatorio = dameNumeroAleatorio();
    const carta = dameNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarCarta(urlCarta);
    const puntosCarta = damePuntosCarta(carta)
    const puntosSumados = sumarPuntos(puntosCarta);
    actualizarPuntos(puntosSumados);
    mostrarPuntuacion(puntosSumados);
    gameOver();
}

if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", () => {
        dameCarta();
    })
}

if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", () => { 
        mePlanto();
    })
}

if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.addEventListener("click", () => {
        nuevaPartida();
    })
}

const probar = () => {
    const numeroAleatorio = dameNumeroAleatorio();
    const carta = dameNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarCarta(urlCarta);
    const puntosSimulados = sumarPuntos(carta);
    mostrarMensaje(`La siguiente carta sería un ${carta} y habrías llegado a ${puntosSimulados} puntos.`);

    const botonProbar = document.getElementById('boton-probar')
    if (botonProbar && botonProbar instanceof HTMLButtonElement) {
        botonProbar.disabled = true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const botonProbar = document.createElement("button");
    botonProbar.textContent = "¿Quieres seguir probando?";
    botonProbar.classList.add("boton");
    botonProbar.id = "boton-probar";
    botonProbar.style.display = "none";

    if (contenedorBotones && contenedorBotones instanceof HTMLDivElement) {
        contenedorBotones.appendChild(botonProbar);
    }

    if (botonProbar && botonProbar instanceof HTMLButtonElement) {
        botonProbar.addEventListener("click", () => {
            probar();
        });
    };
})