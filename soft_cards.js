const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const newCSS = `
/* --- Soft Metallic Reason Cards --- */
.reason-card {
  position: relative;
  background: linear-gradient(135deg, #fdfdfd, #f5f7fa); /* Slightly off-white so white shadows pop */
  padding: 40px 25px;
  border-radius: 30px;
  border: none;
  box-shadow:
    6px 6px 12px rgba(0, 0, 0, 0.06),
    -6px -6px 12px rgba(255, 255, 255, 1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.8),
    inset -2px -2px 4px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 280px;
}

.reason-card:hover {
  transform: translateY(-5px);
  box-shadow:
    8px 8px 16px rgba(0, 0, 0, 0.08),
    -8px -8px 16px rgba(255, 255, 255, 1),
    inset 2px 2px 4px rgba(255, 255, 255, 0.9),
    inset -2px -2px 4px rgba(0, 0, 0, 0.04);
}

/* Shining Effect Overlay */
.reason-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.7),
    transparent
  );
  background-size: 200% 200%;
  animation: shine 2.5s infinite ease-in-out;
  border-radius: 30px;
  pointer-events: none;
  z-index: 1;
}

@keyframes shine {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.reason-card > * {
  position: relative;
  z-index: 2;
}

.reason-icon {
  width: 65px;
  height: 65px;
  background: rgba(43, 57, 144, 0.04);
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.reason-card:hover .reason-icon {
  background: var(--primary-color);
  color: var(--white);
  transform: scale(1.05);
}

.reason-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 12px;
  line-height: 1.4;
}

.reason-card p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}
`;

// Replace the old .reason-card block with the new one
const oldCSSRegex = /\/\* --- High-end Editorial Reason Cards --- \*\/[\s\S]*?\.reason-card p\s*\{[\s\S]*?margin:\s*0;\s*\}/;
css = css.replace(oldCSSRegex, newCSS.trim());

fs.writeFileSync('style.css', css);

console.log('Cards updated to Soft Neumorphic Style.');
