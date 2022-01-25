// * Clase 86. DOM: Ejercicios Prácticos
let d = document;
export default function countdown(id, limitDate, finalMessage) {
    const $countdown = d.getElementById(id);
    const countdownDate = new Date(limitDate).getTime();
    let countdownTempo = setInterval(() => {
        let now = new Date().getTime();
        let limitTime = countdownDate - now;
        let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
        let hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2);
        let minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2);
        let seconds = ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);
        $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes}
        minutos ${seconds} segundos</h3>`;

        if (limitTime < 0) {
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }

    }, 1000);
}