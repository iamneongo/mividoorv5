/* Mividoor � shared UX polish for pages that use their own inline scripts.
   Purely additive: without JS (or without the AOS library) the site stays
   fully visible and usable. */
(function () {
    function init() {
        // 1) Subtle header shadow once the page is scrolled
        var header = document.querySelector('.header');
        if (header) {
            var onScroll = function () {
                header.classList.toggle('scrolled', window.scrollY > 8);
            };
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        // 2) AOS (Animate On Scroll). Attributes assigned here; guarded so a
        //    missing library (or reduced-motion preference) leaves content visible.
        var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (typeof AOS !== 'undefined' && !prefersReduced) {
            var aosSelector = [
                '.reason-card', '.material-card', '.luxury-card', '.news-card',
                '.spec-card', '.contact-item', '.stat-item', '.craftsmanship',
                '.structure-wrapper', '.production-technology', '.job-card',
                '.step-item', '.culture-box', '.recent-news-item', '.section-title'
            ].join(', ');

            Array.prototype.slice.call(document.querySelectorAll(aosSelector)).forEach(function (el) {
                if (!el.hasAttribute('data-aos')) el.setAttribute('data-aos', 'fade-up');
                var parent = el.parentElement;
                var sibs = parent
                    ? Array.prototype.slice.call(parent.children).filter(function (c) {
                        return c.matches && c.matches(aosSelector);
                    })
                    : [];
                var idx = Math.max(sibs.indexOf(el), 0);
                var delay = Math.min(idx, 5) * 80;
                if (delay && !el.hasAttribute('data-aos-delay')) {
                    el.setAttribute('data-aos-delay', String(delay));
                }
            });

            AOS.init({
                duration: 650,
                easing: 'ease-out-cubic',
                once: true,
                offset: 60,
                disable: function () {
                    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
