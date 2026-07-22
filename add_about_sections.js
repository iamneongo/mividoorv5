const fs = require('fs');

let content = fs.readFileSync('ve-chung-toi.html', 'utf8');

const newSections = `
    <!-- Brand Story -->
    <section class="brand-story" style="padding: 100px 0;">
        <div class="container">
            <div style="display: flex; flex-wrap: wrap; gap: 50px; align-items: center;">
                <div style="flex: 1; min-width: 300px;">
                    <img src="images/hero2-new.webp" alt="Câu Chuyện Thương Hiệu" style="width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); object-fit: cover; aspect-ratio: 4/3;" onerror="this.src='https://via.placeholder.com/600x450?text=Brand+Story'">
                </div>
                <div style="flex: 1; min-width: 300px;">
                    <h2 class="section-title">CÂU CHUYỆN THƯƠNG HIỆU</h2>
                    <div class="title-underline" style="margin: 0 0 30px 0;"></div>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 20px;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-muted);">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision-mission" style="padding: 100px 0; background-color: var(--light-bg);">
        <div class="container">
            <div class="section-header text-center" style="margin-bottom: 50px;">
                <h2 class="section-title">TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ CỐT LÕI</h2>
                <div class="title-underline"></div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); text-align: center;">
                    <div style="font-size: 3rem; color: var(--primary-color); margin-bottom: 20px;"><i class="fa-solid fa-eye"></i></div>
                    <h3 style="color: var(--primary-color); margin-bottom: 15px;">TẦM NHÌN</h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); text-align: center;">
                    <div style="font-size: 3rem; color: var(--primary-color); margin-bottom: 20px;"><i class="fa-solid fa-bullseye"></i></div>
                    <h3 style="color: var(--primary-color); margin-bottom: 15px;">SỨ MỆNH</h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
                </div>
                <div style="background: white; padding: 40px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); text-align: center;">
                    <div style="font-size: 3rem; color: var(--primary-color); margin-bottom: 20px;"><i class="fa-solid fa-gem"></i></div>
                    <h3 style="color: var(--primary-color); margin-bottom: 15px;">GIÁ TRỊ CỐT LÕI</h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team -->
    <section class="team" style="padding: 100px 0;">
        <div class="container">
            <div class="section-header text-center" style="margin-bottom: 50px;">
                <h2 class="section-title">ĐỘI NGŨ CHUYÊN GIA</h2>
                <div class="title-underline"></div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px;">
                <div style="text-align: center;">
                    <img src="https://via.placeholder.com/300x300?text=CEO" alt="CEO" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin-bottom: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
                    <h3 style="color: var(--primary-color); margin-bottom: 5px;">Ông Nguyễn Văn A</h3>
                    <p style="color: var(--accent-color); font-weight: 600; margin-bottom: 15px;">Tổng Giám Đốc</p>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div style="text-align: center;">
                    <img src="https://via.placeholder.com/300x300?text=CTO" alt="CTO" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin-bottom: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
                    <h3 style="color: var(--primary-color); margin-bottom: 5px;">Bà Trần Thị B</h3>
                    <p style="color: var(--accent-color); font-weight: 600; margin-bottom: 15px;">Giám Đốc Kỹ Thuật</p>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div style="text-align: center;">
                    <img src="https://via.placeholder.com/300x300?text=CMO" alt="CMO" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin-bottom: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
                    <h3 style="color: var(--primary-color); margin-bottom: 5px;">Ông Lê Văn C</h3>
                    <p style="color: var(--accent-color); font-weight: 600; margin-bottom: 15px;">Giám Đốc Marketing</p>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div style="text-align: center;">
                    <img src="https://via.placeholder.com/300x300?text=CFO" alt="CFO" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin-bottom: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
                    <h3 style="color: var(--primary-color); margin-bottom: 5px;">Bà Phạm Thị D</h3>
                    <p style="color: var(--accent-color); font-weight: 600; margin-bottom: 15px;">Giám Đốc Tài Chính</p>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </section>
`;

content = content.replace('<!-- Về Chúng Tôi - Vì sao chọn -->', newSections + '\n    <!-- Về Chúng Tôi - Vì sao chọn -->');

fs.writeFileSync('ve-chung-toi.html', content, 'utf8');
