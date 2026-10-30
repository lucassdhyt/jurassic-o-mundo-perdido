
// MENU PARA CELULAR
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    const aberto = nav.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", aberto);
    menuToggle.textContent = aberto ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// IMAGENS DO FUNDO PRINCIPAL
const heroImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrryRhAFywMDLuybQzrV2KsV4H-kl-9uCte9Kf80oRQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX483QeZfDqXjoKoHZa3lhDd7mHTDWFh7tkSFtvbD3Ig&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMThRhJ76YZwv250jNG2UVpOyCeb17lHwxb7fZjFFmpA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMkG0L3ex72FXHQ1nb1V20Jbu70DO4nEM9iOYkSDR8Q&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFn7Y_mEKZizMvfAf4n_HwMaKbddH-QkyMm_5YxZyUYQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdtsf88USmknDkII0GyKNCE7b_JbLsk0EvytUfZcCtA&s=10"
];

const hero = document.querySelector(".hero");
let currentImage = 0;

setInterval(() => {
    currentImage = (currentImage + 1) % heroImages.length;

    hero.style.backgroundImage = `
        linear-gradient(90deg, rgba(7,12,7,0.93), rgba(7,12,7,0.48)),
        url("${heroImages[currentImage]}")
    `;
}, 6000);

// INFORMAÇÕES DOS DINOSSAUROS
const dinosaurs = {
    trex: {
        name: "Tiranossauro Rex",
        type: "CARNÍVORO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrryRhAFywMDLuybQzrV2KsV4H-kl-9uCte9Kf80oRQ&s=10",
        description: "O Tyrannosaurus rex viveu no final do período Cretáceo, há cerca de 68 a 66 milhões de anos. Era um grande predador que caminhava sobre duas pernas e possuía uma cabeça enorme.",
        fact: "Seus dentes podiam ultrapassar 20 centímetros de comprimento, contando a raiz."
    },

    triceratops: {
        name: "Triceratops",
        type: "HERBÍVORO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX483QeZfDqXjoKoHZa3lhDd7mHTDWFh7tkSFtvbD3Ig&s=10",
        description: "O Triceratops viveu no final do Cretáceo. Era um herbívoro quadrúpede, conhecido pelos dois grandes chifres acima dos olhos, um menor no focinho e uma estrutura óssea atrás da cabeça.",
        fact: "Seu nome significa aproximadamente 'rosto com três chifres'."
    },

    spinosaurus: {
        name: "Espinossauro",
        type: "CARNÍVORO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMThRhJ76YZwv250jNG2UVpOyCeb17lHwxb7fZjFFmpA&s=10",
        description: "O Spinosaurus viveu no período Cretáceo, no norte da África. É conhecido por sua vela nas costas e por adaptações relacionadas à captura de peixes e à vida próxima da água.",
        fact: "As estruturas altas de suas costas eram formadas por espinhas alongadas das vértebras."
    },

    stegosaurus: {
        name: "Estegossauro",
        type: "HERBÍVORO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMkG0L3ex72FXHQ1nb1V20Jbu70DO4nEM9iOYkSDR8Q&s=10",
        description: "O Stegosaurus viveu no período Jurássico. Possuía placas ósseas ao longo das costas e espinhos na cauda, que provavelmente ajudavam na defesa.",
        fact: "Apesar de seu tamanho, tinha um cérebro relativamente pequeno em comparação com o corpo."
    },

    brachiosaurus: {
        name: "Braquiossauro",
        type: "HERBÍVORO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFn7Y_mEKZizMvfAf4n_HwMaKbddH-QkyMm_5YxZyUYQ&s=10",
        description: "O Brachiosaurus foi um grande dinossauro herbívoro do período Jurássico. Seu pescoço comprido e as patas dianteiras mais altas permitiam alcançar vegetação em diferentes alturas.",
        fact: "Seu nome significa 'lagarto braço', uma referência ao formato de seus membros dianteiros."
    },

    ankylosaurus: {
        name: "Anquilossauro",
        type: "HERBÍVORO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdtsf88USmknDkII0GyKNCE7b_JbLsk0EvytUfZcCtA&s=10",
        description: "O Ankylosaurus viveu no final do Cretáceo. Seu corpo era protegido por placas ósseas e sua cauda terminava em uma estrutura pesada, que poderia ser usada para defesa.",
        fact: "Seu nome está relacionado à ideia de um lagarto rígido ou protegido."
    }
};

// JANELA DE DETALHES
const modal = document.getElementById("dinoModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalDescription = document.getElementById("modalDescription");
const modalFact = document.getElementById("modalFact");

document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
        const dino = dinosaurs[button.dataset.dino];

        if (!dino) return;

        modalImage.src = dino.image;
        modalImage.alt = dino.name;
        modalTitle.textContent = dino.name;
        modalType.textContent = dino.type;
        modalDescription.textContent = dino.description;
        modalFact.textContent = dino.fact;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        modalClose.focus();
    });
});

function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }
});

// ANIMAÇÃO AO DESCER A PÁGINA
const revealElements = document.querySelectorAll(
    ".dino-card, .period-card, .stats, .intro-grid, .extinction-content"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
} else {
    revealElements.forEach(element => element.classList.add("visible"));
}
