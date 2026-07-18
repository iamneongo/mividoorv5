const fs = require('fs');

// 1. Create lien-he.html from index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Extract contact section
let contactSectionMatch = indexHtml.match(/(<section class="contact-section" id="contact">[\s\S]*?<\/section>)/);
let contactSection = contactSectionMatch ? contactSectionMatch[1] : '';

// Create premium header for lien-he
let premiumHeader = `    <div class="premium-page-header" style="background-image: url('images/hero1-new.webp');">
        <div class="container">
            <h1>Liên Hệ</h1>
            <p>Kết nối với MIVIDOOR để nhận được sự tư vấn chuyên sâu và báo giá tốt nhất.</p>
        </div>
    </div>`;

// Build lien-he.html
let lienHeHtml = indexHtml;
// Remove hero, stats, why choose us, structure, pvc, products, bst luxury, cta bar
lienHeHtml = lienHeHtml.replace(/<section class="hero pattern-grid">[\s\S]*?<section class="contact-section" id="contact">/, premiumHeader + '\n    <section class="contact-section" id="contact">');
lienHeHtml = lienHeHtml.replace(/<section class="cta-bar">[\s\S]*?<\/section>/, ''); // remove cta bar

fs.writeFileSync('lien-he.html', lienHeHtml, 'utf8');

// 2. Update navigation in all files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Update Desktop Nav
    content = content.replace(/<li><a href="#" onclick="openContactModal\(event\)">LIÊN HỆ<\/a><\/li>/g, `<li><a href="lien-he.html"${file === 'lien-he.html' ? ' class="active"' : ''}>LIÊN HỆ</a></li>`);
    content = content.replace(/<li><a href="#contact">Liên hệ<\/a><\/li>/g, `<li><a href="lien-he.html">Liên hệ</a></li>`);
    content = content.replace(/href="#contact"/g, 'href="lien-he.html"');
    content = content.replace(/href="index\.html#contact"/g, 'href="lien-he.html"');
    
    // Update Mobile Nav
    content = content.replace(/<li style="margin-bottom: 25px;"><a href="#" onclick="openContactModal\(event\); closeMenu\(\)"( class="active")? style="[^"]*">LIÊN HỆ<\/a><\/li>/g, `<li style="margin-bottom: 25px;"><a href="lien-he.html"${file === 'lien-he.html' ? ' class="active"' : ''} onclick="closeMenu()" style="font-size: 1.1rem; font-weight: 600; color: var(--text-main); text-decoration: none; text-transform: uppercase; display: block;">LIÊN HỆ</a></li>`);
    
    // Remove Contact Modal block
    content = content.replace(/<!-- Contact Modal -->[\s\S]*?<\/div>\s*<\/div>\n?/g, '');
    
    // Remove openContactModal and closeContactModal JS functions
    content = content.replace(/function openContactModal\(e\) \{[\s\S]*?\}\s*function closeContactModal\(\) \{[\s\S]*?\}/g, '');
    
    fs.writeFileSync(file, content, 'utf8');
});
