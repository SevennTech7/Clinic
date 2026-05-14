/* ═════════════════════════════
   MOBILE MENU
═════════════════════════════ */

const menuBtn =
    document.querySelector(".mobile-menu-btn");

const navLinks =
    document.querySelector(".navbar-links");

const menuIcon =
    menuBtn.querySelector("i");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");


    if(navLinks.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");
    }

});


/* FECHA AO CLICAR */

document
.querySelectorAll(".navbar-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    });

});





const hero = document.getElementById("hero");

for (let i = 0; i < 18; i++) {

  const p = document.createElement("div");

  p.classList.add("particle");

  const size = Math.random() * 18 + 6;

  p.style.cssText = `
    width: ${size}px;
    height: ${size}px;

    left: ${Math.random() * 100}%;

    bottom: -${size}px;

    animation-duration: ${Math.random() * 12 + 8}s;

    animation-delay: ${Math.random() * 8}s;

    opacity: ${Math.random() * 0.4 + 0.1};
  `;

  hero.appendChild(p);
}

// ==============================
// COUNTER ANIMADO
// ==============================

const counters = document.querySelectorAll("[data-target]");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    const el = entry.target;

    const target = +el.dataset.target;

    const suffix =
      target >= 1000
        ? "+"
        : (target === 10 ? " anos" : "+");

    let current = 0;

    const step = target / 60;

    const timer = setInterval(() => {

      current = Math.min(current + step, target);

      el.textContent =
        Math.floor(current) + suffix;

      if (current >= target) {
        clearInterval(timer);
      }

    }, 25);

    observer.unobserve(el);

  });

}, {
  threshold: 0.5
});

counters.forEach(c => observer.observe(c));

// ==============================
// HERO PARALLAX
// ==============================

const doctor = document.querySelector(".doctor-wrapper");

const card = document.querySelector(".skin-card");

document.addEventListener("mousemove", (e) => {

  if (window.innerWidth < 900) return;

  const x =
    (window.innerWidth / 2 - e.clientX) / 50;

  const y =
    (window.innerHeight / 2 - e.clientY) / 50;

  if (doctor) {
    doctor.style.transform =
      `translate(${x}px, ${y}px)`;
  }

  if (card) {
    card.style.transform =
      `translate(${x / 2}px, ${y / 2}px)`;
  }

});

// ==============================
// ESTHETIC SERVICE CARDS
// ==============================

const serviceCards =
  document.querySelectorAll(".esthetic-service-card");

serviceCards.forEach((card) => {

  const button =
    card.querySelector(".esthetic-service-btn");

  const buttonText =
    button.querySelector("span");

  button.addEventListener("click", () => {

    const isActive =
      card.classList.contains("active");

    // FECHA TODOS OS OUTROS
    serviceCards.forEach((otherCard) => {

      if (otherCard !== card) {

        otherCard.classList.remove("active");

        const otherButton =
          otherCard.querySelector(".esthetic-service-btn span");

        if (otherButton) {
          otherButton.textContent = "Saiba Mais";
        }

      }

    });

    // TOGGLE CARD
    card.classList.toggle("active");

    // ALTERA TEXTO BOTÃO
    if (!isActive) {

      buttonText.textContent = "Voltar";

    } else {

      buttonText.textContent = "Saiba Mais";

    }

  });

});

// ==============================
// CARD HOVER 3D
// ==============================

serviceCards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    if (window.innerWidth < 900) return;

    const rect = card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 8;

    const rotateX =
      ((y / rect.height) - 0.5) * -8;

    if (!card.classList.contains("active")) {

      card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-6px)
      `;

    }

  });

  card.addEventListener("mouseleave", () => {

    if (!card.classList.contains("active")) {

      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    }

  });

});

// ==============================
// RESET 3D QUANDO ACTIVE
// ==============================

serviceCards.forEach((card) => {

  card.addEventListener("click", () => {

    if (card.classList.contains("active")) {

      card.style.transform =
        "translateY(-10px)";

    }

  });

});

const cards = document.querySelectorAll(".before-card");
const filters = document.querySelectorAll(".filter-btn");

const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");

let current = 0;


/* UPDATE */

function updateCarousel() {

    cards.forEach(card => {
        card.classList.remove("active", "prev", "next");
    });

    cards[current].classList.add("active");

    const prev =
        (current - 1 + cards.length) % cards.length;

    const next =
        (current + 1) % cards.length;

    cards[prev].classList.add("prev");

    cards[next].classList.add("next");


    /* FILTROS */

    filters.forEach(btn => {
        btn.classList.remove("active");
    });

    filters[current].classList.add("active");
}


/* NEXT */

nextBtn.addEventListener("click", () => {

    current++;

    if(current >= cards.length) {
        current = 0;
    }

    updateCarousel();
});


/* PREV */

prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0) {
        current = cards.length - 1;
    }

    updateCarousel();
});


/* FILTROS */

filters.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        current = index;

        updateCarousel();
    });
});


updateCarousel();

const translations = {
  pt: {
    site_title: "Bella Estética — Beleza & Bem-estar",
    brand: "Bella Estética",

    nav_home: "Início",
    nav_about: "Sobre",
    nav_services: "Serviços",
    nav_results: "Resultados",

    hero_title: "A essência da beleza & vitalidade em um só lugar.",

    skin_tag: "GLOW",

    about_title: "ESTÉTICA AVANÇADA",
    about_sub: "beleza com sofisticação",

    doctor_name: "Dra. Mariana",
    doctor_desc: "Especialista em barreira cutânea e recuperação da pele sensível.",

    services_tag: "Especialidades",
    services_title: "Procedimentos estéticos",
    services_desc: "Conheça os tratamentos disponíveis na clínica.",

    botox_desc: "O botox suaviza linhas de expressão, previne rugas e proporciona um aspecto mais jovem e descansado para o rosto.",
    botox_title: "Bótox",

    filler_desc: "O preenchimento labial valoriza o contorno dos lábios, proporcionando mais volume, hidratação e harmonia facial.",
    filler_title: "Preenchimento",

    harmony_desc: "A harmonização facial equilibra os traços do rosto, valorizando a beleza natural com mais simetria e definição.",
    harmony_title: "Harmonização",

    results_tag: "RESULTADOS REAIS",
    results_title: "Antes & Depois",
    results_desc: "Veja transformações reais dos procedimentos realizados na clínica.",

    filter_botox: "Botox",
    filter_filler: "Preenchimento",
    filter_harmony: "Harmonização",
    filter_glutea: "Glútea",

    footer_brand: "Bella Estética",
    footer_text: "Sofisticação, beleza e bem-estar em cada detalhe.",
    contact_title: "Contato",
    company_title: "Empresa",
    social_title: "Redes Sociais",
    copyright: "© 2026 Bella Estética — Todos os direitos reservados."
  },

  en: {
    site_title: "Bella Esthetics — Beauty & Wellness",
    brand: "Bella Esthetics",

    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_results: "Results",

    hero_title: "The essence of beauty & vitality in one place.",

    skin_tag: "GLOW",

    about_title: "ADVANCED AESTHETICS",
    about_sub: "beauty with sophistication",

    doctor_name: "Dr. Mariana",
    doctor_desc: "Specialist in skin barrier and sensitive skin recovery.",

    services_tag: "Specialties",
    services_title: "Aesthetic procedures",
    services_desc: "Discover the treatments available at the clinic.",

    botox_desc: "Botox smooths expression lines, prevents wrinkles and provides a younger, rested look.",
    botox_title: "Botox",

    filler_desc: "Lip fillers enhance lip contour, adding volume, hydration and facial harmony.",
    filler_title: "Filler",

    harmony_desc: "Facial harmonization balances facial features, enhancing natural beauty with symmetry and definition.",
    harmony_title: "Harmony",

    results_tag: "REAL RESULTS",
    results_title: "Before & After",
    results_desc: "See real transformations from procedures performed at the clinic.",

    filter_botox: "Botox",
    filter_filler: "Filler",
    filter_harmony: "Harmony",
    filter_glutea: "Gluteal",

    footer_brand: "Bella Esthetics",
    footer_text: "Sophistication, beauty and well-being in every detail.",
    contact_title: "Contact",
    company_title: "Company",
    social_title: "Social Media",
    copyright: "© 2026 Bella Esthetics — All rights reserved."
  }
};

// 🌍 aplicar idioma
function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // mudar title também
  document.title = translations[lang].site_title;

  // salvar escolha
  localStorage.setItem("lang", lang);
}

// 🌐 detectar idioma do navegador
function detectLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;

  const browserLang = navigator.language || navigator.userLanguage;

  if (browserLang.startsWith("pt")) return "pt";
  return "en";
}

// 🚀 iniciar automaticamente
window.addEventListener("DOMContentLoaded", () => {
  setLanguage(detectLanguage());
});