const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    const btnRegex = /(<(?:a|button)[^>]*class="[^"]*\bbtn\b[^"]*"[^>]*)>([\s\S]*?)(<\/(?:a|button)>)/g;
    
    content = content.replace(btnRegex, (match, open, inner, close) => {
        // 1. Clean inline styles (font-size, text-transform)
        let newOpen = open.replace(/font-size:\s*[^;"]*;?/gi, '')
                          .replace(/text-transform:\s*[^;"]*;?/gi, '');
        // Clean empty style=""
        newOpen = newOpen.replace(/style="\s*"/gi, '');
        
        // 2. Convert inner text to sentence case
        let text = inner.trim();
        if(text.length > 0) {
            text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            text = text.replace(/mividoor/ig, 'Mividoor');
            text = text.replace(/cnc/ig, 'CNC');
        }
        
        const leadingSpaces = inner.match(/^\s*/)[0];
        const trailingSpaces = inner.match(/\s*$/)[0];
        
        return newOpen + '>' + leadingSpaces + text + trailingSpaces + close;
    });

    fs.writeFileSync(file, content);
});

let css = fs.readFileSync('style.css', 'utf8');
css = css.replace(/\.btn\s*\{/, '.btn {\n    font-size: 1rem !important;\n    text-transform: none !important;');
fs.writeFileSync('style.css', css);

console.log('Fixed button font-sizes and casing');
