// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


document.addEventListener("DOMContentLoaded", () => {
  const semesters = document.querySelectorAll("#notes details.sem");

  // Debug: pastikan kebaca
  console.log("Semesters found:", semesters.length);

  semesters.forEach((item) => {
    item.addEventListener("toggle", () => {
      // kalau item sedang ditutup, stop
      if (!item.open) return;

      // tutup semua selain yang baru dibuka
      semesters.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target) return;

    // efek fade out
    document.body.classList.add("fade-out");

    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth" });

      // fade in lagi
      setTimeout(() => {
        document.body.classList.remove("fade-out");
      }, 300);
    }, 200);
  });
});