// * Clase 93. DOM: Ejercicios Prácticos | Detección del estado de la red
const d = document;
const w = window;
const n = navigator;

export function networkStatus() {
    const isOnline = () => {
        const $div = d.createElement("div");
        if (n.onLine) {
            $div.textContent = "Conexión Reestablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexión Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => {
            d.body.removeChild($div);
        }, 2000);
    }
    w.addEventListener("online", (e) => isOnline());
    w.addEventListener("offline", (e) => isOnline());
}