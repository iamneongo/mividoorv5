const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Add TIN TỨC to Header Navigation before LIÊN HỆ
    // Pattern to look for: <li><a href="lien-he.html">LIÊN HỆ</a></li>
    const navRegex = /(<li>\s*<a href="lien-he.html"[^>]*>LIÊN HỆ<\/a>\s*<\/li>)/i;
    if (navRegex.test(content)) {
        content = content.replace(navRegex, '<li><a href="tin-tuc.html">TIN TỨC</a></li>\n                    $1');
    }

    // Add TIN TỨC to Sidebar Navigation before LIÊN HỆ
    // Pattern to look for: <li><a href="lien-he.html" onclick="closeMenu()"...>LIÊN HỆ</a></li>
    // We can use a simpler replacement for the sidebar since it has inline styles:
    const sidebarRegex = /(<li[^>]*>\s*<a href="lien-he.html" onclick="closeMenu\(\)"[^>]*>LIÊN HỆ<\/a>\s*<\/li>)/i;
    if (sidebarRegex.test(content)) {
        // Extract the exact styling of the LIÊN HỆ <li> to replicate for TIN TỨC
        content = content.replace(sidebarRegex, (match) => {
            let newLi = match.replace('lien-he.html', 'tin-tuc.html').replace('LIÊN HỆ', 'TIN TỨC');
            return newLi + '\n                ' + match;
        });
    }

    fs.writeFileSync(file, content);
});

console.log('Added TIN TỨC to all navigation menus.');
