// * Clase 91. DOM: Ejercicios Prácticos | Responsive Tester 
const d = document;
const w = window;
export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e) => {
        if (e.target === $form) {
            e.preventDefault();
            tester = w.open(
                $form.direccion.value,
                "tester",
                `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
            );
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target === $form.cerrar) tester.close();
    });
}