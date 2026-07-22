const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// 1. San pham
let btnSanPham = `
            <div class="text-center" style="margin-top: 50px;">
                <a href="san-pham.html" class="btn btn-outline-primary" style="padding: 12px 40px; font-size: 1.1rem; font-weight: 700; border-radius: 50px;">Xem Tất Cả Sản Phẩm <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </section>
`;
content = content.replace(/<\/div>\s*<\/section>\s*<!-- BST MIVIDOOR LUXURY 2026 -->/g, (match) => {
    return btnSanPham + `    <!-- BST MIVIDOOR LUXURY 2026 -->`;
});

// 2. BST Luxury
let btnLuxury = `
            <div class="text-center" style="margin-top: 50px;">
                <a href="bst-luxury.html" class="btn btn-outline-primary" style="padding: 12px 40px; font-size: 1.1rem; font-weight: 700; border-radius: 50px;">Xem Toàn Bộ Bộ Sưu Tập <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </section>
`;
content = content.replace(/<\/div>\s*<\/section>\s*<!-- Contact Section -->/g, (match) => {
    return btnLuxury + `    <!-- Contact Section -->`;
});

// 3. Ve Chung Toi
let btnVeChungToi = `
            <div class="text-center" style="margin-top: 60px;">
                <a href="ve-chung-toi.html" class="btn btn-outline-primary" style="padding: 12px 40px; font-size: 1.1rem; font-weight: 700; border-radius: 50px;">Xem Thêm Về MIVIDOOR <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </section>
`;
content = content.replace(/<\/div>\s*<\/section>\s*<!-- Structure Section -->/g, (match) => {
    return btnVeChungToi + `    <!-- Structure Section -->`;
});

fs.writeFileSync('index.html', content, 'utf8');
