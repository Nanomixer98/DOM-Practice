// * Clase 82 y 83. DOM: Ejercicios Prácticos | Alarma Sonora 
const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo;

    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 500);
            e.target.disabled = true;
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    });
}

export function alarm(sound, btnPlay, btnStop) {
    let soundTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;

    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            soundTempo = setTimeout(() => {
                $alarm.play();
            }, 2000);
            e.target.disabled = true
        }
        if (e.target.matches(btnStop)) {
            clearTimeout(soundTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
        }
    });
}