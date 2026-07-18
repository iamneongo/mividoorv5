const fs = require('fs');

function removeSectionHeader(file) {
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');
        // We want to remove the <div class="section-header text-center" ...> ... </div> block
        // Also for ve-chung-toi it's <h2 class="section-title text-center">...</h2> and <div class="title-underline"></div>
        
        if (file === 've-chung-toi.html') {
            html = html.replace(/<h2 class="section-title text-center">[\s\S]*?<\/div>/, '');
        } else if (file === 'san-pham.html') {
            html = html.replace(/<div class="section-header text-center"[\s\S]*?<\/div>\s*<\/div>/, '');
        } else if (file === 'bst-luxury.html') {
            html = html.replace(/<div class="section-header text-center"[\s\S]*?<\/div>\s*<\/div>/, '');
        }
        
        fs.writeFileSync(file, html, 'utf8');
    }
}

removeSectionHeader('ve-chung-toi.html');
removeSectionHeader('san-pham.html');
removeSectionHeader('bst-luxury.html');
