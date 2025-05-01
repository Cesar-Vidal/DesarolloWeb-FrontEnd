document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const expandedCard = document.getElementById("expanded-card");
    const closeBtn = document.getElementById("close-expanded");
    const overlay = document.getElementById("overlay");

    const imgEl = document.getElementById("expanded-image");
    const titleEl = document.getElementById("expanded-title");
    const descEl = document.getElementById("expanded-desc");
    const durationEl = document.getElementById("expanded-duration");

    const cardData = {
        1: {
            img: "assets/soccer.jpg",
            title: "Juego de soccer",
            desc: "5 contra 5",
            duration: "90min",
        },
        2: {
            img: "assets/tennis.jpg",
            title: "Partida de tenis",
            desc: "1 contra 1",
            duration: "30min",
        },
        3: {
            img: "assets/functional-duo.jpg",
            title: "Ejercicio funcional",
            desc: "En pareja",
            duration: "40min",
        },
        4: {
            img: "assets/pilates.jpg",
            title: "Pilates",
            desc: "Rutina individual",
            duration: "45min",
        },
        5: {
            img: "assets/running.jpg",
            title: "Sprints de running",
            desc: "Individual o en grupo",
            duration: "60min",
        },
    };

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const id = card.dataset.id;
            const data = cardData[id];

            if (data) {
                imgEl.src = data.img;
                titleEl.textContent = data.title;
                descEl.textContent = data.desc;
                durationEl.textContent = data.duration;
                overlay.classList.add("active");
                expandedCard.classList.add("active");
            }
        });
    });

    // Cerrar desde el botón
    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("active");
        expandedCard.classList.remove("active");
    });

    // Cerrar haciendo clic fuera del popup
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
            expandedCard.classList.remove("active");
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            overlay.classList.remove("active");
            expandedCard.classList.remove("active");
        }
    });
});
  
  
  