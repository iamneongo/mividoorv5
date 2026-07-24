const fs = require('fs');
const path = require('path');

// 1. Revert HTML files
const htmlFiles = ['index.html', 've-chung-toi.html'];

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove <div class="blob"></div>
    content = content.replace(/<div class="blob"><\/div>\s*/g, '');
    
    // Remove <div class="bg"> and its closing </div>
    // The structure is:
    // <div class="reason-card">
    //      <div class="bg">
    //          <div class="reason-icon">...
    //          ...
    //      </div>
    // </div>
    const regex = /<div class="reason-card">\s*<div class="bg">([\s\S]*?)<\/div>\s*<\/div>/g;
    
    content = content.replace(regex, (match, innerHTML) => {
        return `<div class="reason-card">\n${innerHTML}\n                </div>`;
    });
    
    fs.writeFileSync(file, content);
});

// 2. Update CSS
let css = fs.readFileSync('style.css', 'utf8');

const newCSS = `
/* --- Premium Animated Hover Cards --- */
.reason-card {
  position: relative;
  border-radius: 16px;
  background: #ffffff;
  padding: 40px 25px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;
  text-align: center;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 280px;
}

/* The colorful animated background that sits at the bottom/corner and expands on hover */
.reason-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 50% 50%, var(--primary-color) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, var(--accent-color) 0%, transparent 40%);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -2;
  animation: rotate-bg 8s linear infinite;
}

/* The inner white card that creates the border effect */
.reason-card::after {
  content: "";
  position: absolute;
  inset: 2px; /* creates a 2px border */
  background: rgba(255, 255, 255, 1);
  border-radius: 14px;
  z-index: -1;
  transition: inset 0.4s ease, background 0.4s ease;
}

@keyframes rotate-bg {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.reason-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(26, 42, 108, 0.15);
}

.reason-card:hover::before {
  opacity: 1;
}

.reason-card:hover::after {
  background: rgba(255, 255, 255, 0.95);
}

/* Content styling */
.reason-card .reason-icon {
  width: 75px;
  height: 75px;
  margin: 0 auto 25px;
  background: rgba(26, 42, 108, 0.05);
  color: var(--primary-color);
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: rotate(-10deg);
}

.reason-card:hover .reason-icon {
  transform: rotate(0deg) scale(1.15);
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  box-shadow: 0 15px 25px rgba(227, 24, 55, 0.25);
}

.reason-card h3 {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 15px;
  transition: color 0.3s ease;
  position: relative;
  z-index: 2;
}

.reason-card:hover h3 {
  color: var(--accent-color);
}

.reason-card p {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  position: relative;
  z-index: 2;
}
`;

// Replace the old .reason-card block with the new one
// Old css block ends with `@keyframes blob-bounce { ... }`
const oldCSSRegex = /\.reason-card\s*\{[\s\S]*?@keyframes blob-bounce\s*\{[\s\S]*?\}\s*\}/;
css = css.replace(oldCSSRegex, newCSS.trim());

fs.writeFileSync('style.css', css);

console.log('Cards updated to Premium Style.');
