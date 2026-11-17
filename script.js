// IMAGENS DO FUNDO PRINCIPAL
const imagensDestaque = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrryRhAFywMDLuybQzrV2KsV4H-kl-9uCte9Kf80oRQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX483QeZfDqXjoKoHZa3lhDd7mHTDWFh7tkSFtvbD3Ig&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMThRhJ76YZwv250jNG2UVpOyCeb17lHwxb7fZjFFmpA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMkG0L3ex72FXHQ1nb1V20Jbu70DO4nEM9iOYkSDR8Q&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFn7Y_mEKZizMvfAf4n_HwMaKbddH-QkyMm_5YxZyUYQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdtsf88USmknDkII0GyKNCE7b_JbLsk0EvytUfZcCtA&s=10"
];

const destaquePrincipal = document.querySelector(".destaque-principal");
let imagemAtual = 0;

setInterval(() => {
    imagemAtual = (imagemAtual + 1) % imagensDestaque.length;

    destaquePrincipal.style.backgroundImage = `
        linear-gradient(90deg, rgba(7,12,7,0.93), rgba(7,12,7,0.48)),
        url("${imagensDestaque[imagemAtual]}")
    `;
}, 6000);

// INFORMAÇÕES DOS DINOSSAUROS
const dinossauros = {
    trex: {
        nome: "Tiranossauro Rex",
        tipo: "CARNÍVORO",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrryRhAFywMDLuybQzrV2KsV4H-kl-9uCte9Kf80oRQ&s=10",
        descricao: "O Tyrannosaurus rex viveu no final do período Cretáceo, há cerca de 68 a 66 milhões de anos. Era um grande predador que caminhava sobre duas pernas e possuía uma cabeça enorme.",
        fato: "Seus dentes podiam ultrapassar 20 centímetros de comprimento, contando a raiz."
    },

    triceratops: {
        nome: "Triceratops",
        tipo: "HERBÍVORO",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX483QeZfDqXjoKoHZa3lhDd7mHTDWFh7tkSFtvbD3Ig&s=10",
        descricao: "O Triceratops viveu no final do Cretáceo. Era um herbívoro quadrúpede, conhecido pelos dois grandes chifres acima dos olhos, um menor no focinho e uma estrutura óssea atrás da cabeça.",
        fato: "Seu nome significa aproximadamente 'rosto com três chifres'."
    },

    spinosaurus: {
        nome: "Espinossauro",
        tipo: "CARNÍVORO",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMThRhJ76YZwv250jNG2UVpOyCeb17lHwxb7fZjFFmpA&s=10",
        descricao: "O Spinosaurus viveu no período Cretáceo, no norte da África. É conhecido por sua vela nas costas e por adaptações relacionadas à captura de peixes e à vida próxima da água.",
        fato: "As estruturas altas de suas costas eram formadas por espinhas alongadas das vértebras."
    },

    stegosaurus: {
        nome: "Estegossauro",
        tipo: "HERBÍVORO",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMkG0L3ex72FXHQ1nb1V20Jbu70DO4nEM9iOYkSDR8Q&s=10",
        descricao: "O Stegosaurus viveu no período Jurássico. Possuía placas ósseas ao longo das costas e espinhos na cauda, que provavelmente ajudavam na defesa.",
        fato: "Apesar de seu tamanho, tinha um cérebro relativamente pequeno em comparação com o corpo."
    },

    brachiosaurus: {
        nome: "Braquiossauro",
        tipo: "HERBÍVORO",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFn7Y_mEKZizMvfAf4n_HwMaKbddH-QkyMm_5YxZyUYQ&s=10",
        descricao: "O Brachiosaurus foi um grande dinossauro herbívoro do período Jurássico. Seu pescoço comprido e as patas dianteiras mais altas permitiam alcançar vegetação em diferentes alturas.",
        fato: "Seu nome significa 'lagarto braço', uma referência ao formato de seus membros dianteiros."
    },

    ankylosaurus: {
        nome: "Anquilossauro",
        tipo: "HERBÍVORO",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdtsf88USmknDkII0GyKNCE7b_JbLsk0EvytUfZcCtA&s=10",
        descricao: "O Ankylosaurus viveu no final do Cretáceo. Seu corpo era protegido por placas ósseas e sua cauda terminava em uma estrutura pesada, que poderia ser usada para defesa.",
        fato: "Seu nome está relacionado à ideia de um lagarto rígido ou protegido."
    }
};

// JANELA DE DETALHES (MODAL)
const modal = document.getElementById("modalDino");
const fecharModal = document.getElementById("fecharModal");
const imagemModal = document.getElementById("imagemModal");
const tituloModal = document.getElementById("tituloModal");
const tipoModal = document.getElementById("tipoModal");
const descricaoModal = document.getElementById("descricaoModal");
const fatoModal = document.getElementById("fatoModal");

document.querySelectorAll(".botao-detalhes").forEach(botao => {
    botao.addEventListener("click", () => {
        const dino = dinossauros[botao.dataset.dino];

        if (!dino) return;

        imagemModal.src = dino.imagem;
        imagemModal.alt = dino.nome;
        tituloModal.textContent = dino.nome;
        tipoModal.textContent = dino.tipo;
        descricaoModal.textContent = dino.descricao;
        fatoModal.textContent = dino.fato;

        modal.classList.add("ativo");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        fecharModal.focus();
    });
});

function fecharJanelaModal() {
    modal.classList.remove("ativo");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

fecharModal.addEventListener("click", fecharJanelaModal);

modal.addEventListener("click", evento => {
    if (evento.target === modal) {
        fecharJanelaModal();
    }
});

document.addEventListener("keydown", evento => {
    if (evento.key === "Escape" && modal.classList.contains("ativo")) {
        fecharJanelaModal();
    }
});

// ANIMAÇÃO AO DESCER A PÁGINA
const elementosRevelacao = document.querySelectorAll(
    ".cartao-dino, .cartao-periodo, .estatisticas, .grade-introducao, .conteudo-extincao"
);

if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(entradas => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elementosRevelacao.forEach(elemento => {
        elemento.classList.add("revelacao");
        observador.observe(elemento);
    });
} else {
    elementosRevelacao.forEach(elemento => elemento.classList.add("visivel"));
}