import "./style.css";

const cartaAleatoria = (): number => {
    return Math.floor (Math.random() * 12) + 1;
    if (cartaAleatoria() > 7) {
        return cartaAleatoria() + 2;
    }
}
