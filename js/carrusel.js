// * Clase 98. DOM: Ejercicios Prácticos | Responsive Slider 
const d = document;
export default function slider() {
    const $nextBtn = d.querySelector(".slider-btns .next");
    const $prevBtn = d.querySelector(".slider-btns .prev");
    const $slides = d.querySelectorAll(".slider-slide");

    let i = 0;
    d.addEventListener("click", (e) => {
        if (e.target === $prevBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;
            i = (i < 0) ? ($slides.length - 1) : i;
            $slides[i].classList.add("active");
        }
        if (e.target === $nextBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;
            i = (i > ($slides.length - 1)) ? 0 : i;
            $slides[i].classList.add("active");
        }
    });
}