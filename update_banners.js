const fs = require('fs');
const path = require('path');

const cssContent = `
/* --- PREMIUM PAGE HEADER --- */
.premium-page-header {
    position: relative;
    padding: 150px 0 80px;
    background-color: var(--primary-color);
    background-image: url('images/hero-1.png'); /* Default background */
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Parallax effect */
    color: var(--white);
    text-align: center;
    overflow: hidden;
}

.premium-page-header::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(0, 25, 80, 0.95) 0%, rgba(0, 25, 80, 0.75) 100%);
    z-index: 1;
}

.premium-page-header::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
    z-index: 1;
}

.premium-page-header .container {
    position: relative;
    z-index: 2;
}

.premium-page-header h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    letter-spacing: -1px;
    text-transform: uppercase;
    text-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.premium-page-header p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.premium-page-header .breadcrumb {
    margin-top: 30px;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    background: rgba(255, 255, 255, 0.15);
    padding: 10px 25px;
    border-radius: 50px;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.premium-page-header .breadcrumb a {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

.premium-page-header .breadcrumb a:hover {
    color: var(--secondary-color);
}

.premium-page-header .breadcrumb span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .premium-page-header {
        padding: 120px 0 60px;
    }
    .premium-page-header h1 {
        font-size: 2.2rem;
    }
}
`;

// Append CSS if not already there
let styleCss = fs.readFileSync('style.css', 'utf8');
if (!styleCss.includes('.premium-page-header')) {
    fs.appendFileSync('style.css', cssContent, 'utf8');
}

// Files and their banner titles/descriptions
const pageInfo = {
    've-chung-toi.html': { title: 'Về Chúng Tôi', desc: 'Khám phá câu chuyện thương hiệu và những giá trị cốt lõi làm nên chất lượng MIVIDOOR.', bg: 'images/hero1-new.webp' },
    'san-pham.html': { title: 'Danh Mục Sản Phẩm', desc: 'Đa dạng mẫu mã, đáp ứng mọi nhu cầu thiết kế của không gian sống.', bg: 'images/hero2-new.webp' },
    'bst-luxury.html': { title: 'BST MIVIDOOR LUXURY', desc: 'Tuyệt tác cửa composite vân gỗ dập nổi, nâng tầm không gian sang trọng.', bg: 'images/hero3-new.webp' },
    'tin-tuc.html': { title: 'Tin Tức & Sự Kiện', desc: 'Cập nhật những xu hướng thiết kế nội thất và thông tin mới nhất từ MIVIDOOR.', bg: 'images/hero1-new.webp' },
    'tuyen-dung.html': { title: 'Tuyển Dụng', desc: 'Gia nhập đội ngũ MIVIDOOR - Nơi phát triển sự nghiệp và kiến tạo những giá trị bền vững.', bg: 'images/hero2-new.webp' },
    'huong-dan-lap-dat.html': { title: 'Hướng Dẫn Lắp Đặt', desc: 'Quy trình thi công và lắp đặt cửa chuẩn xác, đảm bảo độ bền và thẩm mỹ tối đa.', bg: 'images/hero3-new.webp' },
    'chinh-sach-bao-hanh.html': { title: 'Chính Sách Bảo Hành', desc: 'Cam kết chất lượng dài lâu với chính sách bảo hành phôi cửa lên đến 10 năm.', bg: 'images/hero1-new.webp' },
    'chinh-sach-doi-tra.html': { title: 'Chính Sách Đổi Trả', desc: 'Quy trình đổi trả minh bạch, đảm bảo quyền lợi tối đa cho khách hàng của MIVIDOOR.', bg: 'images/hero2-new.webp' },
    'dieu-khoan-su-dung.html': { title: 'Điều Khoản Sử Dụng', desc: 'Quy định chung khi sử dụng các dịch vụ và website của MIVIDOOR.', bg: 'images/hero3-new.webp' }
};

for (const [file, info] of Object.entries(pageInfo)) {
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');
        
        // Remove old inline styles in <head> for the old page-header
        html = html.replace(/<style>\s*\.page-header[\s\S]*?<\/style>/, '');
        
        // Build new premium header
        const premiumHeader = `    <div class="premium-page-header" style="background-image: url('${info.bg}');">
        <div class="container">
            <h1>${info.title}</h1>
            <p>${info.desc}</p>
            <div class="breadcrumb">
                <a href="index.html">Trang chủ</a>
                <span><i class="fa-solid fa-chevron-right"></i></span>
                <span style="color: var(--secondary-color); font-weight: 600;">${info.title}</span>
            </div>
        </div>
    </div>`;

        // Replace the old header blocks
        // 1. For ve-chung-toi, san-pham, bst-luxury
        html = html.replace(/<div class="page-header pattern-grid" style="[^"]*">[\s\S]*?<\/div>\s*<\/div>/, premiumHeader);
        // 2. For others
        html = html.replace(/<div class="page-header pattern-grid">\s*<div class="container">[\s\S]*?<\/div>\s*<\/div>/, premiumHeader);
        
        fs.writeFileSync(file, html, 'utf8');
    }
}
