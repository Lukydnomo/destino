document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#texto", {
        strings: ["O destino foi selado...", "Nada pode mudar o inevitável.", "Ele sempre esteve entre nós","só não havia sido descoberto ainda", "sabemos aonde ele está...", "né?", ".", "..", "...", "eleestarala.html"],
        typeSpeed: 65,  // Velocidade da digitação (quanto menor, mais rápido)
        backSpeed: 15,  // Velocidade ao apagar
        startDelay: 500, // Pequeno atraso antes de começar
        backDelay: 1500, // Tempo antes de apagar o texto
        loop: false,      // Repete a digitação
        showCursor: true,
        cursorChar: "_", // Caracter do cursor piscando
    });
});

function abrirJanela() {
    let resposta = prompt("").toLowerCase();
    if (resposta === "humanidade morta") {
        window.location.href = "finalidade.html"; // Substitua pela URL correta
    } else if (resposta === "eleestarala.html") {
    } else {
        alert("Errado.");
    }
}