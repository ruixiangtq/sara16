// Pantallas
const portada = document.getElementById("portada");
const pagina = document.getElementById("pagina");

// Botón
const surpriseButton = document.getElementById("surpriseButton");

// De portada a carta + recuerdos
surpriseButton.addEventListener("click", function() {
    portada.classList.add("oculta");
    pagina.classList.remove("oculta");
    pagina.classList.add("pantalla");
    window.scrollTo(0, 0);

    // Arrancamos los vídeos (sin sonido, el navegador lo permite)
    document.querySelectorAll(".polaroid video").forEach(function(v) {
        v.muted = true;
        v.play().catch(function(error) {
            console.log("No se pudo reproducir:", v.src, error);
        });
    });
});


// CORAZONES FLOTANTES
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);


// ===== RECUERDOS POLAROID =====
//  "texto" por lo que quieras que ponga debajo de cada polaroid.
// Se reparten solos: uno a la izquierda, uno a la derecha, y así.
const recuerdos = [
    { archivo: "fotos/fotoespejo.jpeg", texto: "" },
    { archivo: "fotos/fotoconhamburguesas.jpeg", texto: "" },
    { archivo: "fotos/video ferias.mp4", texto: "" },
    { archivo: "fotos/f4.jpeg", texto: "" },
    { archivo: "fotos/f7.jpeg", texto: "" },
    { archivo: "fotos/video abrazo.mp4", texto: "" },
    { archivo: "fotos/fotoutebo.jpeg", texto: "" },
    { archivo: "fotos/v1.mp4", texto: "" },
    { archivo: "fotos/losdosconflores.jpeg", texto: "" },
    { archivo: "fotos/f1.jpeg", texto: "" },
    { archivo: "fotos/f2.jpeg", texto: "" },
    { archivo: "fotos/f3.jpeg", texto: "" },
    { archivo: "fotos/saraconflores.jpeg", texto: "" },
    { archivo: "fotos/f5.jpeg", texto: "" },
    { archivo: "fotos/fotoparquegrande.jpeg", texto: "" },
    { archivo: "fotos/f8.jpeg", texto: "" },
    { archivo: "fotos/f9.jpeg", texto: "" },
    { archivo: "fotos/fotosara.jpeg", texto: "" }
];
const colIzq = document.getElementById("colIzq");
const colDer = document.getElementById("colDer");

recuerdos.forEach(function(recuerdo, i) {

    const esVideo = /\.(mp4|webm|mov)$/i.test(recuerdo.archivo);

    const figure = document.createElement("figure");
    figure.classList.add("polaroid");

    const media = document.createElement(esVideo ? "video" : "img");
    media.src = recuerdo.archivo;

    if (esVideo) {
        media.setAttribute("muted", "");
        media.muted = true;
        media.autoplay = true;
        media.loop = true;
        media.playsInline = true;
        media.setAttribute("playsinline", "");
        media.controls = true;
        media.preload = "auto";
    } else {
        media.alt = recuerdo.texto;
        media.loading = "lazy";
    }

    const caption = document.createElement("figcaption");
    caption.textContent = recuerdo.texto;

    figure.appendChild(media);
    figure.appendChild(caption);

    // Pares a la izquierda, impares a la derecha
    (i % 2 === 0 ? colIzq : colDer).appendChild(figure);
});