const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace logo links
    content = content.replace(/<a href="#" class="logo">/g, '<a href="index.html" class="logo">');
    content = content.replace(/<a href="#" class="logo logo-footer">/g, '<a href="index.html" class="logo logo-footer">');

    fs.writeFileSync(file, content, 'utf8');
});
