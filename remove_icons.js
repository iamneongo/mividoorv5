const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    const btnRegex = /(<(?:a|button)[^>]*class="[^"]*\bbtn\b[^"]*"[^>]*>)([\s\S]*?)(<\/(?:a|button)>)/g;
    
    content = content.replace(btnRegex, (match, open, inner, close) => {
        // Remove <i> tags
        let cleanInner = inner.replace(/<i[^>]*>.*?<\/i>\s*/g, '');
        // Remove any &nbsp; that might have been used for spacing next to the icon
        cleanInner = cleanInner.replace(/&nbsp;/g, ' ').replace(/\s{2,}/g, ' ').trim();
        return open + cleanInner + close;
    });

    fs.writeFileSync(file, content);
});

console.log('Icons removed from all buttons.');
