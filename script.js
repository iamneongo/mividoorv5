document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Uiverse Button Injection
    const allBtns = document.querySelectorAll('.btn:not(.tab-btn, .mobile-menu-btn, .close-sidebar-btn)');
    allBtns.forEach(btn => {
        // Skip if already wrapped
        if (btn.parentNode.classList.contains('btn-container')) return;

        const container = document.createElement('div');
        container.className = 'btn-container';
        
        // Copy width utility classes if any
        if (btn.classList.contains('w-100')) {
            container.classList.add('w-100');
        }
        if (btn.style.width) {
            container.style.width = btn.style.width;
        }

        btn.parentNode.insertBefore(container, btn);
        container.appendChild(btn);

        // Wrap text
        if (!btn.querySelector('.btn-text')) {
            const span = document.createElement('span');
            span.className = 'btn-text';
            span.innerHTML = btn.innerHTML;
            btn.innerHTML = '';
            btn.appendChild(span);
        }


    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            if (nav.style.display === 'block') {
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = 'white';
                nav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                
                const ul = nav.querySelector('ul');
                ul.style.flexDirection = 'column';
                ul.style.gap = '0';
                
                const lis = ul.querySelectorAll('li');
                lis.forEach(li => {
                    li.style.padding = '15px 20px';
                    li.style.borderBottom = '1px solid #eee';
                });
            } else {
                nav.style.position = '';
                nav.style.top = '';
                nav.style.left = '';
                nav.style.width = '';
                nav.style.backgroundColor = '';
                nav.style.boxShadow = '';
                
                const ul = nav.querySelector('ul');
                ul.style.flexDirection = '';
                ul.style.gap = '';
                
                const lis = ul.querySelectorAll('li');
                lis.forEach(li => {
                    li.style.padding = '';
                    li.style.borderBottom = '';
                });
            }
        });
    }

    // Reset nav style on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav) {
            nav.style.display = 'block';
            nav.style.position = '';
            const ul = nav.querySelector('ul');
            if (ul) ul.style.flexDirection = 'row';
        } else if (nav) {
            nav.style.display = 'none';
        }
    });

    // Render 14 PVC Colors from mamauu
    const pvcGrid = document.getElementById('pvc-colors-grid');
    if (pvcGrid) {
        const pvcColors = [
            { code: 'M-01', img: 'images/mamauu/298cb06f5192d0cc8983.jpg' },
            { code: 'M-02', img: 'images/mamauu/2d2bfdd41c299d77c438.jpg' },
            { code: 'M-03', img: 'images/mamauu/ef061ae4fb197a472308.jpg' },
            { code: 'M-04', img: 'images/mamauu/m04.jpg' },
            { code: 'M-05', img: 'images/mamauu/6bb4095ee8a369fd30b2.jpg' },
            { code: 'M-06', img: 'images/mamauu/e97cf39a12679339ca76.jpg' },
            { code: 'M-07', img: 'images/mamauu/744cffb11e4c9f12c65d.jpg' },
            { code: 'M-08', img: 'images/mamauu/332761c5803801665829.jpg' },
            { code: 'M-09', img: 'images/mamauu/eaddd33f32c2b39cead3.jpg' },
            { code: 'M-10', img: 'images/mamauu/774a59a8b855390b6044.jpg' },
            { code: 'M-11', img: 'images/mamauu/2c8d9a1d7be0fabea3f1.jpg' },
            { code: 'M-12', img: 'images/mamauu/c25d2ebfcf424e1c1753.jpg' },
            { code: 'M-13', img: 'images/mamauu/m13.jpg' },
            { code: 'M-14', img: 'images/mamauu/1de54807a9fa28a471eb.jpg' },
            { code: 'M-15 mới', img: 'images/mamauu/113c94df7522f47cad33.jpg' },
            { code: 'M-16', img: 'images/mamauu/edf75714b6e937b76ef8.jpg' },
            { code: 'M-17', img: 'images/mamauu/m17.jpg' },
            { code: 'M-18', img: 'images/mamauu/m18.jpg' }
        ];
        
        let html = '';
        pvcColors.forEach(item => {
            const isPlaceholder = item.img.includes('placeholder');
            const transformStyle = isPlaceholder ? '' : 'transform: scale(2.5);';
            html += `
                <div class="color-item" style="text-align: center; display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); margin-bottom: 15px; border: 3px solid white; transition: transform 0.3s ease; cursor: pointer; background: #f5f5f5;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                        <img src="${item.img}" alt="${item.code}" style="width: 100%; height: 100%; object-fit: cover; ${transformStyle}">
                    </div>
                    <span style="font-size: 1rem; font-weight: 700; color: var(--text-main);">${item.code}</span>
                </div>
            `;
        });
        pvcGrid.innerHTML = html;
        pvcGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(130px, 1fr))';
        pvcGrid.style.gap = '25px';
        pvcGrid.style.justifyContent = 'center';
    }

    // Render Products
    renderProducts('all');
});

// Products Data
const productsData = [
    { id: 'MV-01', name: 'Cửa Phẳng Sang Trọng', tag: 'Tối giản - Tinh tế', img: 'images/mau-cua-phang.jpg', category: 'cua-phang', description: 'Mẫu cửa composite phẳng MV-01 thiết kế tối giản, bề mặt vân gỗ tự nhiên sắc nét. Lựa chọn hoàn hảo cho không gian nội thất hiện đại, mang lại sự tinh tế và đẳng cấp.' },
    { id: 'MV-02', name: 'Cửa Nẹp Nhôm Inox', tag: 'Sang trọng - Điểm nhấn', img: 'images/mau-nep-nhom-inox.jpg', category: 'cua-phao-chi', description: 'Cửa composite trang trí chỉ nhôm hoặc inox sáng bóng tạo điểm nhấn mạnh mẽ. Phong cách sang trọng, phù hợp cho chung cư cao cấp và biệt thự.' },
    { id: 'MV-03', name: 'Cửa Phào Chỉ Nổi', tag: 'Cổ điển - Đẳng cấp', img: 'images/mau-phao-chi-noi.jpg', category: 'cua-phao-chi', description: 'Cửa composite phào chỉ nổi mang phong cách tân cổ điển, đường nét điêu khắc tinh xảo. Tạo không gian sống bề thế, vững chãi và sang trọng bậc nhất.' },
    { id: 'MV-04', name: 'Cửa Lùa', tag: 'Tiện ích - Tối ưu', img: 'images/mau-cua-lua.jpg', category: 'cua-o-kinh', description: 'Hệ cửa lùa composite giúp tối ưu hóa diện tích không gian sống. Hệ ray trượt siêu êm, độ bền cao, giải pháp thông minh cho phòng có diện tích hẹp.' },
    { id: 'MV-05', name: 'Cửa Vòm', tag: 'Mềm mại - Độc đáo', img: 'images/mau-cua-vom.jpg', category: 'cua-phang', description: 'Cửa vòm composite với những đường cong mềm mại, phá vỡ sự góc cạnh truyền thống. Tạo điểm nhấn kiến trúc ấn tượng, thời thượng và lãng mạn.' },
    { id: 'MV-06', name: 'Cửa Soi Huỳnh CNC', tag: 'Hoa văn - Nghệ thuật', img: 'images/mau-hoa-van-cnc.jpg', category: 'cua-cnc', description: 'Cửa soi huỳnh bằng công nghệ CNC cho ra các đường nét hoa văn chính xác tuyệt đối. Mang đến giá trị nghệ thuật cao và phong cách độc đáo cho ngôi nhà.' },
    { id: 'MV-07', name: 'Cửa Ô Kính', tag: 'Hiện đại - Không gian mở', img: 'images/mau-o-kinh.jpg', category: 'cua-o-kinh', description: 'Thiết kế kết hợp ô kính cường lực giúp lấy sáng tự nhiên, mở rộng tầm nhìn không gian. Vừa đảm bảo sự chắc chắn vừa mang lại sự thông thoáng.' },
    { id: 'MV-08', name: 'Cửa Ô Lá Sách', tag: 'Thoáng khí - Thanh lịch', img: 'images/mau-o-la-sach.jpg', category: 'cua-o-kinh', description: 'Cửa tích hợp ô lá sách thông minh, giúp lưu thông không khí ngay cả khi đóng cửa. Giải pháp tuyệt vời cho phòng tắm hoặc các khu vực cần sự khô ráo.' },
    { id: 'MV-09', name: 'Cửa Ô Fix', tag: 'Đón sáng - Rộng rãi', img: 'images/mau-o-fix.jpg', category: 'cua-o-kinh', description: 'Cửa trang bị ô kính fix cố định, cung cấp thêm ánh sáng cho hành lang hay các không gian khuất. Sự kết hợp hoàn hảo giữa công năng và thẩm mỹ.' }
];

function renderProducts(category) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    let filtered = productsData;
    if (category !== 'all') {
        filtered = productsData.filter(p => p.category === category);
    }
    
    let html = '';
    filtered.forEach(p => {
        html += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${p.img}" alt="${p.name}" onerror="this.src='images/mau-cua-phang.jpg'">
                </div>
                <div class="product-content">
                    <h3 style="margin-bottom: 5px;">${p.name}</h3>
                    <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 5px; font-size: 0.9rem;">Mã: ${p.id}</p>
                    <p class="product-tags" style="margin-bottom: 10px;">${p.tag}</p>
                    <p class="product-desc" style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 15px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;" title="${p.description}">${p.description}</p>
                    <a href="chi-tiet-san-pham.html" class="view-detail text-red">XEM CHI TIẾT <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        `;
    });
    
    // Add fade out/in effect
    grid.style.opacity = 0;
    setTimeout(() => {
        grid.innerHTML = html;
        grid.style.opacity = 1;
    }, 200);
}

function filterProducts(event, category) {
    // Update active button
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    renderProducts(category);
}


document.addEventListener('DOMContentLoaded', () => {
    // Hero Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-bg-slide');
    const dots = document.querySelectorAll('.hero-pagination .dot');

    window.goToSlide = function(index) {
        if (!slides.length) return;
        slides[currentSlide].classList.remove('active');
        if (dots.length > currentSlide) dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        if (dots.length > currentSlide) dots[currentSlide].classList.add('active');
    };

    if (slides.length > 0) {
        setInterval(() => {
            let next = (currentSlide + 1) % slides.length;
            window.goToSlide(next);
        }, 5000);

        // Add drag/swipe logic
        const hero = document.querySelector('.hero');
        let startX = 0;
        let isDragging = false;

        hero.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        }, {passive: true});

        hero.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;
            if (diff > 50) {
                window.goToSlide((currentSlide + 1) % slides.length);
            } else if (diff < -50) {
                window.goToSlide((currentSlide - 1 + slides.length) % slides.length);
            }
        }, {passive: true});

        hero.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
        });

        hero.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            let diff = startX - e.clientX;
            if (diff > 50) {
                window.goToSlide((currentSlide + 1) % slides.length);
            } else if (diff < -50) {
                window.goToSlide((currentSlide - 1 + slides.length) % slides.length);
            }
        });
        
        hero.addEventListener('mouseleave', () => {
            isDragging = false;
        });
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
        testiSlider.style.transform = `translateX(-${currentTestiSlide * (cardWidth + gap)}px)`;
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
