const fs = require('fs');

let content = fs.readFileSync('ve-chung-toi.html', 'utf8');

const newSections = `    <!-- Partners -->
    <section class="partners" style="padding: 100px 0;">
        <div class="container">
            <div class="section-header text-center" style="margin-bottom: 50px;">
                <h2 class="section-title">ĐỐI TÁC CHIẾN LƯỢC</h2>
                <div class="title-underline"></div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 30px; align-items: center; justify-items: center;">
                <img src="https://via.placeholder.com/200x100?text=Partner+1" alt="Partner 1" style="max-width: 100%; opacity: 0.7; transition: opacity 0.3s; filter: grayscale(100%); cursor: pointer;" onmouseover="this.style.opacity=1; this.style.filter='grayscale(0)'" onmouseout="this.style.opacity=0.7; this.style.filter='grayscale(100%)'">
                <img src="https://via.placeholder.com/200x100?text=Partner+2" alt="Partner 2" style="max-width: 100%; opacity: 0.7; transition: opacity 0.3s; filter: grayscale(100%); cursor: pointer;" onmouseover="this.style.opacity=1; this.style.filter='grayscale(0)'" onmouseout="this.style.opacity=0.7; this.style.filter='grayscale(100%)'">
                <img src="https://via.placeholder.com/200x100?text=Partner+3" alt="Partner 3" style="max-width: 100%; opacity: 0.7; transition: opacity 0.3s; filter: grayscale(100%); cursor: pointer;" onmouseover="this.style.opacity=1; this.style.filter='grayscale(0)'" onmouseout="this.style.opacity=0.7; this.style.filter='grayscale(100%)'">
                <img src="https://via.placeholder.com/200x100?text=Partner+4" alt="Partner 4" style="max-width: 100%; opacity: 0.7; transition: opacity 0.3s; filter: grayscale(100%); cursor: pointer;" onmouseover="this.style.opacity=1; this.style.filter='grayscale(0)'" onmouseout="this.style.opacity=0.7; this.style.filter='grayscale(100%)'">
                <img src="https://via.placeholder.com/200x100?text=Partner+5" alt="Partner 5" style="max-width: 100%; opacity: 0.7; transition: opacity 0.3s; filter: grayscale(100%); cursor: pointer;" onmouseover="this.style.opacity=1; this.style.filter='grayscale(0)'" onmouseout="this.style.opacity=0.7; this.style.filter='grayscale(100%)'">
            </div>
        </div>
    </section>

    <!-- Certifications -->
    <section class="certifications" style="padding: 100px 0; background-color: var(--light-bg);">
        <div class="container">
            <div class="section-header text-center" style="margin-bottom: 50px;">
                <h2 class="section-title">CHỨNG NHẬN CHẤT LƯỢNG</h2>
                <div class="title-underline"></div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
                <div style="background: white; padding: 40px 30px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); text-align: center; border-bottom: 4px solid var(--primary-color);">
                    <div style="font-size: 3rem; color: #d4af37; margin-bottom: 20px;"><i class="fa-solid fa-award"></i></div>
                    <h3 style="color: var(--primary-color); margin-bottom: 15px;">ISO 9001:2015</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Hệ thống quản lý chất lượng đạt chuẩn quốc tế, đảm bảo quy trình sản xuất khép kín.</p>
                </div>
                <div style="background: white; padding: 40px 30px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); text-align: center; border-bottom: 4px solid var(--primary-color);">
                    <div style="font-size: 3rem; color: #d4af37; margin-bottom: 20px;"><i class="fa-solid fa-certificate"></i></div>
                    <h3 style="color: var(--primary-color); margin-bottom: 15px;">Thương Hiệu Xanh</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Vật liệu composite thân thiện với môi trường, an toàn tuyệt đối cho người sử dụng.</p>
                </div>
                <div style="background: white; padding: 40px 30px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); text-align: center; border-bottom: 4px solid var(--primary-color);">
                    <div style="font-size: 3rem; color: #d4af37; margin-bottom: 20px;"><i class="fa-solid fa-shield-halved"></i></div>
                    <h3 style="color: var(--primary-color); margin-bottom: 15px;">Chứng Nhận PCCC</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Khả năng chống cháy lan ưu việt, đạt chuẩn kiểm định an toàn phòng cháy chữa cháy.</p>
                </div>
            </div>
        </div>
    </section>`;

// Replace the Team section using regex that captures from <!-- Team --> to just before <!-- Về Chúng Tôi - Vì sao chọn -->
content = content.replace(/<!-- Team -->[\s\S]*?(?=<!-- Về Chúng Tôi - Vì sao chọn -->)/g, newSections + '\n\n    ');

fs.writeFileSync('ve-chung-toi.html', content, 'utf8');
