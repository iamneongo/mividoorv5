const fs = require('fs');
let html = fs.readFileSync('bst-luxury.html', 'utf8');

// Replace inline styles of luxury cards
html = html.replace(/<div class="luxury-card"[^>]*>/g, '<div class="luxury-card">');
html = html.replace(/<img src="(images\/luxury-\d+\.webp)" alt="([^"]+)"[^>]*>/g, '<div class="luxury-image-wrapper"><img src="$1" alt="$2" onerror="this.style.display=\'none\'"></div>');
html = html.replace(/<div class="luxury-info"[^>]*>/g, '<div class="luxury-info">');
html = html.replace(/<h3[^>]*>(.*?)<\/h3>/g, '<h3>$1</h3>');
html = html.replace(/<p style="margin: 0; font-size: 1rem; color: #555;">(.*?)<\/p>/g, '<p>$1</p>');
html = html.replace(/<div class="luxury-grid"[^>]*>/, '<div class="luxury-grid">');

// Add new images
const newImagesHtml = `
                <div class="luxury-card">
                    <div class="luxury-image-wrapper"><img src="images/Door_main_view_from_front_202607221439.jpeg" alt="Luxury Door 13" onerror="this.style.display='none'"></div>
                    <div class="luxury-info">
                        <h3>MIVI-LUX 13</h3>
                        <p>Hiện đại, Tinh gọn</p>
                    </div>
                </div>
                <div class="luxury-card">
                    <div class="luxury-image-wrapper"><img src="images/Edit_image_front-facing_background_202607221442.jpeg" alt="Luxury Door 14" onerror="this.style.display='none'"></div>
                    <div class="luxury-info">
                        <h3>MIVI-LUX 14</h3>
                        <p>Tinh tế, Sang trọng</p>
                    </div>
                </div>
                <div class="luxury-card">
                    <div class="luxury-image-wrapper"><img src="images/Photo_with_white_background_202607221434.jpeg" alt="Luxury Door 15" onerror="this.style.display='none'"></div>
                    <div class="luxury-info">
                        <h3>MIVI-LUX 15</h3>
                        <p>Thanh lịch, Mới mẻ</p>
                    </div>
                </div>
`;

// Insert the new cards at the end of the grid
html = html.replace('</div>\r\n        </div>\r\n    </section>', newImagesHtml + '            </div>\r\n        </div>\r\n    </section>');

fs.writeFileSync('bst-luxury.html', html, 'utf8');
