const fs = require('fs');

let content = fs.readFileSync('ve-chung-toi.html', 'utf8');

const ctaSection = `
    <!-- Call to Action -->
    <section class="cta-section" style="padding: 100px 0; background: linear-gradient(135deg, var(--primary-color) 0%, #1a2456 100%); position: relative; overflow: hidden; text-align: center;">
        <!-- Decor circles -->
        <div style="position: absolute; top: -100px; left: -100px; width: 300px; height: 300px; border-radius: 50%; background: rgba(255,255,255,0.05);"></div>
        <div style="position: absolute; bottom: -150px; right: -50px; width: 400px; height: 400px; border-radius: 50%; background: rgba(255,255,255,0.05);"></div>
        
        <div class="container" style="position: relative; z-index: 1;">
            <h2 style="color: white; font-size: 2.5rem; font-weight: 800; margin-bottom: 20px; text-transform: uppercase;">SẴN SÀNG NÂNG TẦM KHÔNG GIAN SỐNG?</h2>
            <p style="color: rgba(255,255,255,0.8); font-size: 1.2rem; max-width: 700px; margin: 0 auto 40px auto; line-height: 1.6;">
                Trải nghiệm sự hoàn hảo từ chất lượng đến thiết kế với các dòng cửa Composite cao cấp từ MIVIDOOR. Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn.
            </p>
            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                <a href="san-pham.html" class="btn" style="background: white; color: var(--primary-color); padding: 15px 40px; font-weight: 700; border-radius: 50px; font-size: 1.1rem; box-shadow: 0 10px 20px rgba(0,0,0,0.2); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">XEM SẢN PHẨM</a>
                <a href="lien-he.html" class="btn" style="background: var(--accent-color); color: white; padding: 15px 40px; font-weight: 700; border-radius: 50px; font-size: 1.1rem; box-shadow: 0 10px 20px rgba(227, 24, 55, 0.4); transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">LIÊN HỆ TƯ VẤN <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

`;

content = content.replace('    <!-- Footer -->', ctaSection + '    <!-- Footer -->');

fs.writeFileSync('ve-chung-toi.html', content, 'utf8');
