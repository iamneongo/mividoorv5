const fs = require('fs');

const css = `
/* Luxury Collection Cards */
.luxury-collection {
    padding: 100px 0;
}
.luxury-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}
.luxury-card {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #f2f2f2;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.luxury-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}
.luxury-image-wrapper {
    background: #f8f9fa;
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.luxury-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    transition: transform 0.6s ease;
}
.luxury-card:hover .luxury-image-wrapper img {
    transform: scale(1.04);
}
.luxury-info {
    padding: 22px 20px;
    text-align: center;
    background: #fff;
}
.luxury-info h3 {
    margin: 0 0 6px 0;
    color: var(--primary-color);
    font-size: 1.25rem;
    font-weight: 700;
}
.luxury-info p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-muted);
}
`;

fs.appendFileSync('style.css', css);
