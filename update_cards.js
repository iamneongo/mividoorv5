const fs = require('fs');
const path = require('path');

// 1. Update HTML files
const htmlFiles = ['index.html', 've-chung-toi.html'];

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // We need to wrap the contents of .reason-card with <div class="bg"> and add <div class="blob"></div> before it.
    // The structure is:
    // <div class="reason-card">
    //     <div class="reason-icon">...</div>
    //     <h3>...</h3>
    //     <p>...</p>
    // </div>
    
    // We can use a regex to match the reason card and its contents.
    const regex = /<div class="reason-card">([\s\S]*?)<\/div>(?=\s*<div class="reason-card">|\s*<\/div>)/g;
    
    content = content.replace(regex, (match, innerHTML) => {
        return `<div class="reason-card">
                    <div class="blob"></div>
                    <div class="bg">${innerHTML}</div>
                </div>`;
    });
    
    fs.writeFileSync(file, content);
});

// 2. Update CSS
let css = fs.readFileSync('style.css', 'utf8');

const newCSS = `
.reason-card {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 250px;
    border-radius: 14px;
    z-index: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    padding: 0;
    background: none;
    border: none;
}

.reason-card .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    z-index: 2;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}

.reason-card .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: var(--primary-color);
    opacity: 0.6;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
}

@keyframes blob-bounce {
    0% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
    25% { transform: translate(-100%, -100%) translate3d(100%, 0, 0); }
    50% { transform: translate(-100%, -100%) translate3d(100%, 100%, 0); }
    75% { transform: translate(-100%, -100%) translate3d(0, 100%, 0); }
    100% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
}
`;

// Replace the old .reason-card block with the new one
const oldCSSRegex = /\.reason-card\s*\{[\s\S]*?align-items:\s*flex-start;\s*\}/;
css = css.replace(oldCSSRegex, newCSS.trim());

fs.writeFileSync('style.css', css);

console.log('Reason cards updated.');
