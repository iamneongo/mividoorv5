const fs = require('fs');

let content = fs.readFileSync('ve-chung-toi.html', 'utf8');

// Use regex to remove from <!-- Partners --> down to just before <!-- Về Chúng Tôi - Vì sao chọn -->
content = content.replace(/<!-- Partners -->[\s\S]*?(?=<!-- Về Chúng Tôi - Vì sao chọn -->)/g, '');

fs.writeFileSync('ve-chung-toi.html', content, 'utf8');
