// ANIMASI LOADING PAGE INDEX
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

// FADEDOWN
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
    );
}

// Cari semua elemen dengan class fade-down
const elements = document.querySelectorAll('.fade-down');

function handleScroll() {
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('show');
        }
    });
}

// Jalankan saat load dan scroll
window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);

// TOOGLE ICON NAVBAR
document.addEventListener('click', function (event) {
    // Cek apakah klik berada di luar .navbar
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('#navbarNavAltMarkup');

    if (!navbar.contains(event.target)) {
        // Jika menu sedang terbuka, tutup
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    }
});
// Tutup navbar collapse saat salah satu link diklik
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const navbarCollapse = document.getElementById('navbarNavAltMarkup');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// NAVBAR
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    // Fungsi untuk memeriksa apakah elemen ada dalam viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= window.innerHeight
        );
    }

    // Fungsi untuk mengatur kelas 'active' pada navbar
    function setActiveLink() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                const targetId = section.id;
                navLinks.forEach(link => {
                    link.classList.remove('activee');
                    if (link.getAttribute('href') === '#' + targetId) {
                        link.classList.add('activee');
                    }
                });
            }
        });
    }

    // Panggil fungsi saat scroll atau load halaman
    window.addEventListener('scroll', setActiveLink);
    window.addEventListener('load', setActiveLink);
});
