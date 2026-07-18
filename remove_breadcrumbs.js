const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove the breadcrumb block
    const updatedContent = content.replace(/[ \t]*<div class="breadcrumb">[\s\S]*?<\/div>\n?/g, '');
    
    if (content !== updatedContent) {
        fs.writeFileSync(file, updatedContent, 'utf8');
    }
});
