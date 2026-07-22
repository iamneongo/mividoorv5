const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const correctJS = `
document.addEventListener('DOMContentLoaded', () => {
    // Hero Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-bg-slide');
    const dots = document.querySelectorAll('.hero-pagination .dot');

    function goToSlide(index) {
        if (!slides.length) return;
        slides[currentSlide].classList.remove('active');
        if (dots.length > currentSlide) dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        if (dots.length > currentSlide) dots[currentSlide].classList.add('active');
    }

    if (slides.length > 0) {
        setInterval(() => {
            let next = (currentSlide + 1) % slides.length;
            goToSlide(next);
        }, 5000);
    }

    // Testimonials Carousel
    let currentTestiSlide = 0;
    const testiSlider = document.getElementById('testimonials-slider');
    const testiCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prev-testi');
    const nextBtn = document.getElementById('next-testi');

    function updateTestiSlider() {
        if (testiCards.length === 0 || !testiSlider) return;
        const cardWidth = testiCards[0].getBoundingClientRect().width;
        const gap = 20;
        testiSlider.style.transform = \`translateX(-\${currentTestiSlide * (cardWidth + gap)}px)\`;
    }

    function getMaxSlides() {
        return window.innerWidth > 768 ? testiCards.length - 2 : testiCards.length - 1;
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const maxSlides = getMaxSlides();
            if (currentTestiSlide < maxSlides) {
                currentTestiSlide++;
            } else {
                currentTestiSlide = 0;
            }
            updateTestiSlider();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentTestiSlide > 0) {
                currentTestiSlide--;
            } else {
                currentTestiSlide = getMaxSlides();
            }
            updateTestiSlider();
        });
    }

    if (testiSlider) {
        window.addEventListener('resize', () => {
            currentTestiSlide = 0;
            testiSlider.style.transform = 'translateX(0)';
        });
    }

    // Mobile Sidebar Navigation Logic
    const mobileSidebar = document.getElementById('mobileSidebar');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');

    function openMenu() {
        if (!mobileSidebar || !sidebarBackdrop) return;
        mobileSidebar.style.left = '0';
        sidebarBackdrop.style.visibility = 'visible';
        sidebarBackdrop.style.opacity = '1';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        if (!mobileSidebar || !sidebarBackdrop) return;
        mobileSidebar.style.left = '-300px';
        sidebarBackdrop.style.opacity = '0';
        setTimeout(() => {
            if (sidebarBackdrop.style.opacity === '0') {
                sidebarBackdrop.style.visibility = 'hidden';
            }
        }, 300);
        document.body.style.overflow = '';
    }

    if (openSidebarBtn) openSidebarBtn.addEventListener('click', openMenu);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeMenu);
    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', closeMenu);
    }
});
`;

fs.appendFileSync('script.js', '\n' + correctJS);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<script>\s*let currentSlide = 0;[\s\S]*?<\/script>\s*/, '');
  fs.writeFileSync(file, content);
}
console.log('Fixed JS errors globally');
