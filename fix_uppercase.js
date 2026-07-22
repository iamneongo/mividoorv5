const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace <h1> text
    content = content.replace(/(<h1>)(.*?)(<\/h1>)/g, (match, p1, p2, p3) => {
        return p1 + toTitleCase(p2) + p3;
    });

    // Replace <h2 class="section-title..."> text
    content = content.replace(/(<h2[^>]*class="[^"]*section-title[^"]*"[^>]*>)(.*?)(<\/h2>)/g, (match, p1, p2, p3) => {
        return p1 + toTitleCase(p2) + p3;
    });

    fs.writeFileSync(file, content, 'utf8');
});
