// * Clase 97. DOM: Ejercicios Prácticos | Sorteo Digital
const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector);
        const random = Math.floor(Math.random() * $players.length);
        const $winner = $players[random];

        return `El ganador es: ${$winner.textContent}`;
    }

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
        }
    });
}

// Función para obtener comentario random de YT o cualquier comentario que viva en una cada de comantarios
const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector);
    const random = Math.floor(Math.random() * $players.length);
    const $winner = $players[random];

    return `El ganador es: ${$winner.textContent}`;
}

// getWinnerComment("ytd-comment-thread-renderer #author-text span");