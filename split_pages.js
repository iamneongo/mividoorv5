const fs = require('fs');

let ve = fs.readFileSync('ve-chung-toi.html', 'utf8');
ve = ve.replace(/    <!-- Hero Section -->[\s\S]*?    <!-- Về Chúng Tôi - Vì sao chọn -->/, '    <div class="page-header pattern-grid" style="padding: 120px 0 60px; text-align: center; background: var(--bg-light); border-bottom: 1px solid #eaeaea;"><div class="container"><h1 style="font-size: 3rem; color: var(--text-main); margin-bottom: 15px; font-weight: 800;">Về Chúng Tôi</h1><p style="font-size: 1.1rem; color: var(--text-light); max-width: 600px; margin: 0 auto; line-height: 1.6;">Khám phá câu chuyện thương hiệu và những giá trị cốt lõi làm nên chất lượng MIVIDOOR.</p></div></div>\n    <!-- Về Chúng Tôi - Vì sao chọn -->');
ve = ve.replace(/    <!-- PVC Mividoor Collection -->[\s\S]*?(?=    <!-- Footer -->)/, '');
fs.writeFileSync('ve-chung-toi.html', ve, 'utf8');

let sp = fs.readFileSync('san-pham.html', 'utf8');
sp = sp.replace(/    <!-- Hero Section -->[\s\S]*?    <!-- Sản phẩm \(Các loại cửa\) -->/, '    <div class="page-header pattern-grid" style="padding: 120px 0 60px; text-align: center; background: var(--bg-light); border-bottom: 1px solid #eaeaea;"><div class="container"><h1 style="font-size: 3rem; color: var(--text-main); margin-bottom: 15px; font-weight: 800;">Danh Mục Sản Phẩm</h1><p style="font-size: 1.1rem; color: var(--text-light); max-width: 600px; margin: 0 auto; line-height: 1.6;">Đa dạng mẫu mã, đáp ứng mọi nhu cầu thiết kế của không gian sống.</p></div></div>\n    <!-- Sản phẩm (Các loại cửa) -->');
sp = sp.replace(/    <!-- BST MIVIDOOR LUXURY 2026 -->[\s\S]*?(?=    <!-- Footer -->)/, '');
fs.writeFileSync('san-pham.html', sp, 'utf8');

let bst = fs.readFileSync('bst-luxury.html', 'utf8');
bst = bst.replace(/    <!-- Hero Section -->[\s\S]*?    <!-- BST MIVIDOOR LUXURY 2026 -->/, '    <div class="page-header pattern-grid" style="padding: 120px 0 60px; text-align: center; background: var(--bg-light); border-bottom: 1px solid #eaeaea;"><div class="container"><h1 style="font-size: 3rem; color: var(--text-main); margin-bottom: 15px; font-weight: 800;">BST MIVIDOOR LUXURY</h1><p style="font-size: 1.1rem; color: var(--text-light); max-width: 600px; margin: 0 auto; line-height: 1.6;">Tuyệt tác cửa composite vân gỗ dập nổi, nâng tầm không gian sang trọng.</p></div></div>\n    <!-- BST MIVIDOOR LUXURY 2026 -->');
bst = bst.replace(/    <!-- Contact Section -->[\s\S]*?(?=    <!-- Footer -->)/, '');
fs.writeFileSync('bst-luxury.html', bst, 'utf8');
