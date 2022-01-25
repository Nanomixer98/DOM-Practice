// * Clase 94. DOM: Ejercicios Prácticos | Detección de la WebCam
const d = document;
const n = navigator;
export default function webCam(id) {
    const $video = d.getElementById(id);

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({
                video: true,
                audio: false
            })
            .then((strem) => {
                $video.srcObject = strem;
                $video.play();
            })
            .catch((err) => {
                $video.insertAdjacentHTML("afterend", `<p><mark>${err}</mark></p>`);
            });
    }
}