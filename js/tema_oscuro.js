// * Clase 88. DOM: Ejercicios Prácticos | Tema Dark/Light
const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn);
    const $selectors = d.querySelectorAll("[data-dark]");
    let moon = "🌙";
    let sun = "☀️";

    const lightMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        localStorage.setItem("theme", "light");
    }

    const darkMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        localStorage.setItem("theme", "dark");
    }

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === moon) {
                lightMode();
            } else {
                darkMode();
            }
        }
    });

    // * Clase 89. DOM: Ejercicios Prácticos | API localStorage
    d.addEventListener("DOMContentLoaded", (e) => {
        // alert("Hola desde el módulo dark theme");
        if (!ls.getItem("theme")) ls.setItem("theme", "light");
        if (ls.getItem("theme") == "light") lightMode();
        if (ls.getItem("theme") == "dark") darkMode();
    });

}