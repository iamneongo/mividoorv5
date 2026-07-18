const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace all variations of the Contact modal link
    
    // 1. Footer links
    content = content.replace(/<a href="#" onclick="openContactModal\(event\)">Liên hệ<\/a>/g, '<a href="lien-he.html">Liên hệ</a>');
    
    // 2. Buttons in index.html (like LIÊN HỆ ĐẠI LÝ)
    content = content.replace(/href="#" onclick="openContactModal\(event\)"/g, 'href="lien-he.html"');
    
    // 3. Any other lingering ones in the mobile nav
    content = content.replace(/href="#" onclick="openContactModal\(event\); closeMenu\(\)"/g, 'href="lien-he.html" onclick="closeMenu()"');

    fs.writeFileSync(file, content, 'utf8');
});
