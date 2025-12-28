// Ambil elemen
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle menu mobile
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
}

// Scroll spy untuk menandai link aktif
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// card about here
// Fade-in effect when element enters viewport
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Scroll-triggered animation for destination cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".destination-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(card => {
    observer.observe(card);
  });
});

//gallery is here
const scrollContainer = document.querySelector(".gallery-scroll");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");

if (scrollContainer && leftBtn && rightBtn) {
  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });
}
// Scroll dengan mouse (horizontal)
if (scrollContainer && leftBtn && rightBtn) {
  scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollBy({
      left: e.deltaY < 0 ? -100 : 100,
    });
  });
}

// Footer scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add("show");
      }
    });
  });

  observer.observe(footer);
});

// code destination here//
// Filter tombol
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.destinasi-card');
const searchInput = document.getElementById('searchInput');

// Filter berdasarkan kategori
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.filter;

    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Animasi muncul bertahap saat halaman dimuat
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.destinasi-card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('show');
    }, i * 200); // jeda 0.2 detik antar card
  });
});

// === MODAL HANDLING ===
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");
const detailButtons = document.querySelectorAll(".detail-btn");

const modalNama = document.getElementById("modal-nama");
const modalWaktu = document.getElementById("modal-waktu");
const modalHarga = document.getElementById("modal-harga");
const modalInclude = document.getElementById("modal-include");
const modalExclude = document.getElementById("modal-exclude");

detailButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalNama.textContent = btn.dataset.nama;
    modalWaktu.textContent = btn.dataset.waktu;
    modalHarga.textContent = btn.dataset.harga;
    modalInclude.textContent = btn.dataset.include;
    modalExclude.textContent = btn.dataset.exclude;
    modal.style.display = "flex";
  });
});
if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// code for service our
// Animasi fade-up saat elemen masuk viewport
document.addEventListener("scroll", () => {
  const fadeEls = document.querySelectorAll(".fade-up");
  const trigger = window.innerHeight * 0.85;

  fadeEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add("visible");
    }
  });
});

//code contact html is here
// Rating stars interaction
const stars = document.querySelectorAll('.stars i');
let ratingValue = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    ratingValue = star.getAttribute('data-value');
    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < ratingValue; i++) {
      stars[i].classList.add('active');
    }
  });
});

// Form submission
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.querySelector('.form-status');
    status.textContent = "Mengirim...";

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      category: e.target.category.value,
      message: e.target.message.value,
      rating: ratingValue
    };

    // simulasi kirim (nanti bisa diganti ke API backend)
    setTimeout(() => {
      status.textContent = "Terima kasih! Saran Anda telah kami terima.";
      e.target.reset();
      stars.forEach(s => s.classList.remove('active'));
      ratingValue = 0;
    }, 1200);
  });
}

//code scroll destination is here


document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.destination-container');
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');

  if (!container || !leftArrow || !rightArrow) {
    //console.error("Elemen tidak ditemukan! Pastikan class dan id sesuai HTML.");
    return;
  }
  const scrollStep = 300; // Jarak geser tiap klik
  leftArrow.addEventListener('click', () => {
    container.scrollBy({
      left: -scrollStep,
      behavior: 'smooth'
    });
  });

  rightArrow.addEventListener('click', () => {
    container.scrollBy({
      left: scrollStep,
      behavior: 'smooth'
    });
  });
});
