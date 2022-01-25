// * Clase 104. DOM: Ejercicios Prácticos | Narrador (Lector de Voz) 
const d = document;
const w = window;

export default function speechReader(params) {
    const $speechSelect = d.getElementById("speech-select");
    const $speechTextarea = d.getElementById("speech-text");
    const $speechBtn = d.getElementById("speech-btn");
    const speechMessage = new SpeechSynthesisUtterance();

    // console.log(speechMessage);

    let voices = [];

    d.addEventListener("DOMContentLoaded", (e) => {
        console.log(w.speechSynthesis);
        w.speechSynthesis.addEventListener("voiceschanged", (e) => {
            voices = w.speechSynthesis.getVoices();

            voices.forEach((voice) => {
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.lang} - ${voice.name}`;
                $speechSelect.appendChild($option);
            });
        });
    });

    d.addEventListener("change", (e) => {
        if (e.target === $speechSelect) {
            speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target === $speechBtn) {
            speechMessage.text = $speechTextarea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });
}