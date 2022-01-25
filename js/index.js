import responsiveMedia from "./objeto_responsive.js";
import scrollTopButton from "./btn_scroll.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js"
import { moveBall, shortcuts, validatePointerHover } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import { networkStatus } from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_spy.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    validatePointerHover(".stage");
    countdown("countdown", "Nov 15, 2022 13:27:30", "Feliz fin de esta clase 😎");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 700px)",
        `<a href="https://www.youtube.com/watch?v=GBr_SthDzgA" target="_blank" rel="noopener"> Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qPQBS6JpNZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 700px)",
        `<a href="https://goo.gl/maps/mpZhA2Sw5TFZRYkK6" target="_blank" rel="noopener"> Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.0320264925726!2d-100.38861997530304!3d20.58674967209933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d344d3509c49cd%3A0x258886342492caa0!2sAlameda%20Hidalgo!5e0!3m2!1ses-419!2smx!4v1637087884167!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
    );
    responsiveTester("responsive-tester");
    userDeviceInfo('user-device');
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();