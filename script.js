const frases = [
    "Você pertence à tecnologia — e o futuro precisa das suas ideias.",
    "Mulheres na TI não são exceção, são revolução.",
    "Quando você ocupa espaço, outras meninas descobrem que também podem.",
    "Seu olhar transforma problemas em soluções. Continue!",
    "Tecnologia também tem sensibilidade — e você é parte dessa mudança.",
    "Seu lugar é onde você quiser construir. Inclusive na TI.",
    "Você é capaz de aprender qualquer linguagem — até as que ainda nem existem."
];

function gerarFrase() {
    const fraseEl = document.getElementById("frase");
    const sorteada = frases[Math.floor(Math.random() * frases.length)];
    
    fraseEl.classList.remove("mostrar");
    fraseEl.textContent = sorteada;
    
    // Delay leve pra permitir o fade-in
    setTimeout(() => fraseEl.classList.add("mostrar"), 50);
}