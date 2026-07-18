const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Standardize desktop nav
    let desktopNav = `            <nav class="nav">
                <ul>
                    <li><a href="index.html"${file === 'index.html' ? ' class="active"' : ''}>TRANG CHỦ</a></li>
                    <li><a href="ve-chung-toi.html"${file === 've-chung-toi.html' ? ' class="active"' : ''}>VỀ CHÚNG TÔI</a></li>
                    <li><a href="san-pham.html"${file === 'san-pham.html' ? ' class="active"' : ''}>SẢN PHẨM</a></li>
                    <li><a href="bst-luxury.html"${file === 'bst-luxury.html' ? ' class="active"' : ''}>BST MIVIDOOR LUXURY</a></li>
                    <li><a href="#" onclick="openContactModal(event)">LIÊN HỆ</a></li>
                </ul>
            </nav>`;

    // Replace existing desktop nav. It could be formatted slightly differently, so use regex
    content = content.replace(/<nav class="nav">[\s\S]*?<\/nav>/, desktopNav);

    // 2. Standardize mobile nav
    let mobileNav = `        <nav class="sidebar-nav">
            <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 25px;"><a href="index.html"${file === 'index.html' ? ' class="active"' : ''} onclick="closeMenu()" style="font-size: 1.1rem; font-weight: 600; color: var(--text-main); text-decoration: none; text-transform: uppercase; display: block;">TRANG CHỦ</a></li>
                <li style="margin-bottom: 25px;"><a href="ve-chung-toi.html"${file === 've-chung-toi.html' ? ' class="active"' : ''} onclick="closeMenu()" style="font-size: 1.1rem; font-weight: 600; color: var(--text-main); text-decoration: none; text-transform: uppercase; display: block;">VỀ CHÚNG TÔI</a></li>
                <li style="margin-bottom: 25px;"><a href="san-pham.html"${file === 'san-pham.html' ? ' class="active"' : ''} onclick="closeMenu()" style="font-size: 1.1rem; font-weight: 600; color: var(--text-main); text-decoration: none; text-transform: uppercase; display: block;">SẢN PHẨM</a></li>
                <li style="margin-bottom: 25px;"><a href="bst-luxury.html"${file === 'bst-luxury.html' ? ' class="active"' : ''} onclick="closeMenu()" style="font-size: 1.1rem; font-weight: 600; color: var(--text-main); text-decoration: none; text-transform: uppercase; display: block;">BST MIVIDOOR LUXURY</a></li>
                <li style="margin-bottom: 25px;"><a href="#" onclick="openContactModal(event); closeMenu()" style="font-size: 1.1rem; font-weight: 600; color: var(--text-main); text-decoration: none; text-transform: uppercase; display: block;">LIÊN HỆ</a></li>
            </ul>
        </nav>`;

    content = content.replace(/<nav class="sidebar-nav">[\s\S]*?<\/nav>/, mobileNav);

    // 3. Update footer links (specifically Giới thiệu and Sản phẩm in the newly created ones which might still point to index.html#... or just #...)
    // Sửa các link cũ thành link mới
    content = content.replace(/href="#ve-chung-toi"/g, 'href="ve-chung-toi.html"');
    content = content.replace(/href="#san-pham"/g, 'href="san-pham.html"');
    content = content.replace(/href="index\.html#ve-chung-toi"/g, 'href="ve-chung-toi.html"');
    content = content.replace(/href="index\.html#san-pham"/g, 'href="san-pham.html"');
    content = content.replace(/href="index\.html#bst-luxury"/g, 'href="bst-luxury.html"');
    content = content.replace(/href="#bst-luxury"/g, 'href="bst-luxury.html"');

    // Mấy nút btn "XEM BỘ SƯU TẬP" ở banner index cũng trỏ sang html
    content = content.replace(/href="#bst-luxury" class="btn btn-primary"/g, 'href="bst-luxury.html" class="btn btn-primary"');
    content = content.replace(/href="#san-pham" class="btn btn-primary"/g, 'href="san-pham.html" class="btn btn-primary"');

    fs.writeFileSync(file, content, 'utf8');
});
