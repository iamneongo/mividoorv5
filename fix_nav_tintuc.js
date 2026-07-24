const fs = require('fs');

// Fix lien-he.html sidebar
let lienHeContent = fs.readFileSync('lien-he.html', 'utf8');
const lienHeSidebarRegex = /(<li[^>]*>\s*<a href="lien-he.html" class="active" onclick="closeMenu\(\)"[^>]*>LIÊN HỆ<\/a>\s*<\/li>)/i;
if (lienHeSidebarRegex.test(lienHeContent)) {
    lienHeContent = lienHeContent.replace(lienHeSidebarRegex, (match) => {
        let newLi = match.replace('lien-he.html', 'tin-tuc.html').replace('LIÊN HỆ', 'TIN TỨC').replace(' class="active"', '');
        return newLi + '\n                ' + match;
    });
    fs.writeFileSync('lien-he.html', lienHeContent);
}

// Fix active state in tin-tuc.html
let tinTucContent = fs.readFileSync('tin-tuc.html', 'utf8');
// Header
tinTucContent = tinTucContent.replace(/<a href="tin-tuc.html">TIN TỨC<\/a>/g, '<a href="tin-tuc.html" class="active">TIN TỨC</a>');
// Sidebar
tinTucContent = tinTucContent.replace(/<a href="tin-tuc.html" onclick="closeMenu\(\)"/g, '<a href="tin-tuc.html" class="active" onclick="closeMenu()"');

fs.writeFileSync('tin-tuc.html', tinTucContent);

console.log('Fixed lien-he.html missing nav and tin-tuc.html active state');
