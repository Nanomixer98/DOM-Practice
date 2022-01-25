// * Clases 84 y 85. DOM: Ejercicios | Eventos del Teclado (movimientos y colisiones) 
const d = document;
let x = 0;
let y = 0;
let intoStage = false;

export function shortcuts(e) {
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`ctrl: ${e.ctrlKey}, alt: ${e.altKey}, shift: ${e.shiftKey}`);

    if (e.key === 'a' && e.altKey) {
        alert("Alerta lanzada con el teclado :v\nPD: alt + a");
    }
    if (e.key === 'c' && e.altKey) {
        confirm("Confirmación lanzada con el teclado :v\nPD: alt + c");
    }
    if (e.key === 'p' && e.altKey) {
        prompt("Promop lanzado con el teclado :v\nPD: alt + p");
    }
}

export function moveBall(e, ball, stage) {
    if (intoStage) {
        const $ball = d.querySelector(ball);
        const $stage = d.querySelector(stage);
        const limitsBall = $ball.getBoundingClientRect();
        const limitsStage = $stage.getBoundingClientRect();
        // console.log(limitsBall, limitsStage);
        // console.log(e.keyCode);
        // console.log(e.key);
        // console.log(limitsBall.bottom);
        // console.log(limitsStage.bottom);

        switch (e.keyCode) {
            case 37:
                move($ball, e);
                if (limitsBall.left > limitsStage.left) {
                    x--;
                }
                break;

            case 38:
                move($ball, e);
                if (limitsBall.top > limitsStage.top) {
                    y--;
                }
                break;

            case 39:
                move($ball, e);
                if (limitsBall.right < limitsStage.right) {
                    x++;
                }
                break;

            case 40:
                move($ball, e);
                if (limitsBall.bottom < limitsStage.bottom) {
                    y++;
                }
                break;

            default:
                break;
        }
    }
}

function move($ball, e) {
    e.preventDefault();
    $ball.style.transform = `translate(${x*5}px, ${y*5}px)`;
}

export function validatePointerHover(stage) {
    const $stage = d.querySelector(stage);
    $stage.addEventListener("pointerover", (e) => {
        intoStage = true;
    });
    $stage.addEventListener("mouseleave", (e) => {
        intoStage = false;
    });
}