const fs = require('fs');
const path = require('path');

const filesToCheck = [
    'index.html',
    'san-pham.html',
    'chi-tiet-san-pham.html',
    'bst-luxury.html',
    've-chung-toi.html',
    'tin-tuc.html',
    'lien-he.html',
    'script.js',
    'style.css'
];

filesToCheck.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace .png, .jpg, .jpeg with .webp but ONLY if they are preceded by images/ or url('images/
        // Since we converted all png and jpg in images folder to webp.
        const updatedContent = content.replace(/(images\/[^"']+)\.(png|jpg|jpeg)/gi, '$1.webp');
        
        if (content !== updatedContent) {
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`Updated references in ${file}`);
        }
    }
});
console.log('Finished updating references.');
