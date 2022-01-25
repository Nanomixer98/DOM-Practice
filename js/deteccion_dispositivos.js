// * Clase 92. DOM: Ejercicios Prácticos | Detección de Dispositivos User Agent 
const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(id) {
    const $id = d.getElementById(id);
    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function() {
            return this.android() || this.ios() || this.windows();
        },
    };
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function() {
            return this.linux() || this.mac() || this.windows();
        },
    };
    const isBrowser = {
        edge: () => ua.match(/edge/i),
        safarai: () => ua.match(/safarai/i),
        chrome: () => ua.match(/chrome/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        any: function() {
            return (
                this.edge() ||
                this.ie() ||
                this.chrome() ||
                this.safarai() ||
                this.firefox() ||
                this.opera()
            );
        },
    };

    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
    `;

    // Contenido exclusivo
    if (isBrowser.chrome()) {
        $id.innerHTML += `
            <p><mark>Este contenido sólo se ve en Chrome</mark></p>
        `;
    }
    if (isBrowser.firefox()) {
        $id.innerHTML += `
            <p><mark>Este contenido sólo se ve en Firefox</mark></p>
        `;
    }
    if (isDesktop.linux()) {
        $id.innerHTML += `
            <p><mark>Solo puedes ver esto en GNU/Linux 😎</mark></p>
        `;
    }
    if (isDesktop.mac()) {
        $id.innerHTML += `
            <p><mark>Solo puedes ver esto en MacOS 😎</mark></p>
        `;
    }
    if (isDesktop.windows()) {
        $id.innerHTML += `
            <p><mark>Solo puedes ver esto en Windows 😎</mark></p>
        `;
    }

    // Redirecciones
    if (isMobile.android()) {
        window.location.href = "https://jonmircha.com";
    }
}