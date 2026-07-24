const fs = require('fs');

// 1. Append news.css to style.css
let styleCss = fs.readFileSync('style.css', 'utf8');
let newsCss = fs.readFileSync('news.css', 'utf8');
if (!styleCss.includes('.news-grid')) {
    fs.appendFileSync('style.css', '\n' + newsCss);
}
fs.unlinkSync('news.css');

// 2. Update tin-tuc.html
let tinTuc = fs.readFileSync('tin-tuc.html', 'utf8');
tinTuc = tinTuc.replace(/<a href="#" class="news-readmore">/g, '<a href="chi-tiet-tin-tuc.html" class="news-readmore">');
tinTuc = tinTuc.replace(/<a href="#" class="btn btn-outline"/g, '<a href="#" class="btn btn-outline"'); // Just in case
fs.writeFileSync('tin-tuc.html', tinTuc);

// 3. Create chi-tiet-tin-tuc.html from tin-tuc.html template
let chiTietHTML = tinTuc.split('<div class="premium-page-header"')[0]; // Gets everything up to header end

const articleLayout = `
    <!-- Page Content -->
    <div class="premium-page-header" style="background-image: url('images/hero2-new.webp'); padding: 60px 0;">
        <div class="container">
            <h1 style="font-size: 1.8rem; margin: 0;">Tin tức & Sự kiện</h1>
        </div>
    </div>

    <section class="section">
        <div class="container">
            <div class="article-layout">
                <!-- Main Article -->
                <article>
                    <div class="article-header">
                        <h1>BST MIVIDOOR Luxury 2026: Định Hình Không Gian Sống Thượng Lưu</h1>
                        <div class="article-meta">
                            <span><i class="fa-regular fa-calendar"></i> 18/07/2026</span>
                            <span><i class="fa-solid fa-tag"></i> Xu hướng nội thất</span>
                            <span><i class="fa-regular fa-eye"></i> 1,245 lượt xem</span>
                        </div>
                    </div>
                    
                    <div class="article-featured-img">
                        <i class="fa-regular fa-image"></i>
                    </div>
                    
                    <div class="article-content">
                        <p><strong>Khám phá bộ sưu tập cửa Composite mới nhất với thiết kế vân gỗ dập nổi tinh xảo, mang hơi thở của nghệ thuật kiến trúc Châu Âu vào ngôi nhà Việt. BST Luxury 2026 không chỉ là một cánh cửa, mà là một tác phẩm nghệ thuật định hình phong cách sống thượng lưu.</strong></p>
                        
                        <h2>1. Nguồn cảm hứng từ phong cách Tân cổ điển Châu Âu</h2>
                        <p>Lấy cảm hứng từ những công trình kiến trúc vượt thời gian tại Châu Âu, BST Luxury 2026 của MIVIDOOR mang đến những đường phào chỉ sắc nét, kết hợp cùng vân gỗ tinh tế. Mỗi cánh cửa được thiết kế với tỉ lệ vàng, tạo nên sự cân đối và bề thế cho không gian.</p>
                        
                        <img src="images/hero3-new.webp" alt="Cửa Mividoor Luxury" style="aspect-ratio: 16/9; background: #eee; display:flex; align-items:center; justify-content:center;">
                        
                        <h2>2. Đột phá trong công nghệ vật liệu</h2>
                        <p>Không chỉ đẹp về mặt thẩm mỹ, BST mới nhất còn ứng dụng công nghệ ép nhiệt chân không hiện đại nhất:</p>
                        <ul>
                            <li><strong>Phủ phim PVC cao cấp:</strong> Chống xước cực tốt, mô phỏng vân gỗ tự nhiên đến 99%.</li>
                            <li><strong>Lõi nguyên khối:</strong> Cách âm, cách nhiệt, đảm bảo không cong vênh hay mối mọt trong môi trường nóng ẩm của Việt Nam.</li>
                            <li><strong>Thân thiện môi trường:</strong> Đạt tiêu chuẩn E0 Châu Âu về nồng độ phát thải, an toàn tuyệt đối cho sức khỏe người sử dụng.</li>
                        </ul>
                        
                        <h2>3. Tùy biến linh hoạt cho mọi không gian</h2>
                        <p>Bộ sưu tập được thiết kế đa dạng với hơn 30 mẫu mã và 15 tông màu gỗ khác nhau, từ những tông màu sáng hiện đại như Sồi Nga (Oak) đến những tông màu trầm ấm, sang trọng như Óc chó (Walnut).</p>
                        
                        <p>Đến với MIVIDOOR, quý khách không chỉ mua một cánh cửa, mà đang đầu tư vào sự an tâm và vẻ đẹp bền vững cho ngôi nhà của mình.</p>
                    </div>
                </article>

                <!-- Sidebar -->
                <aside>
                    <div class="sidebar-widget">
                        <h3>Tin tức mới nhất</h3>
                        <div class="recent-news-list">
                            <a href="chi-tiet-tin-tuc.html" class="recent-news-item">
                                <div class="recent-news-thumb"><i class="fa-regular fa-image"></i></div>
                                <div class="recent-news-info">
                                    <div class="recent-news-title">Công Nghệ Phủ Phim Đức: Bí Quyết Tạo Nên Độ Bền 10 Năm Của Mividoor</div>
                                    <div class="recent-news-date">10/07/2026</div>
                                </div>
                            </a>
                            <a href="chi-tiet-tin-tuc.html" class="recent-news-item">
                                <div class="recent-news-thumb"><i class="fa-regular fa-image"></i></div>
                                <div class="recent-news-info">
                                    <div class="recent-news-title">Mividoor Khai Trương Showroom Mới Tại KĐT Vạn Phúc, TP.HCM</div>
                                    <div class="recent-news-date">05/07/2026</div>
                                </div>
                            </a>
                            <a href="chi-tiet-tin-tuc.html" class="recent-news-item">
                                <div class="recent-news-thumb"><i class="fa-regular fa-image"></i></div>
                                <div class="recent-news-info">
                                    <div class="recent-news-title">5 Tiêu Chí Cốt Lõi Khi Lựa Chọn Cửa Thông Phòng Cho Căn Hộ Cao Cấp</div>
                                    <div class="recent-news-date">28/06/2026</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div class="sidebar-widget">
                        <h3>Danh mục</h3>
                        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                            <li><a href="#" style="color: var(--text-main); text-decoration: none; font-weight: 500;"><i class="fa-solid fa-angle-right" style="color: var(--primary-color); margin-right: 8px;"></i> Xu hướng nội thất</a></li>
                            <li><a href="#" style="color: var(--text-main); text-decoration: none; font-weight: 500;"><i class="fa-solid fa-angle-right" style="color: var(--primary-color); margin-right: 8px;"></i> Công nghệ & Sản xuất</a></li>
                            <li><a href="#" style="color: var(--text-main); text-decoration: none; font-weight: 500;"><i class="fa-solid fa-angle-right" style="color: var(--primary-color); margin-right: 8px;"></i> Sự kiện công ty</a></li>
                            <li><a href="#" style="color: var(--text-main); text-decoration: none; font-weight: 500;"><i class="fa-solid fa-angle-right" style="color: var(--primary-color); margin-right: 8px;"></i> Hướng dẫn kỹ thuật</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    </section>
`;

let footerHTML = tinTuc.split('<!-- Footer -->')[1];
chiTietHTML = chiTietHTML + articleLayout + '<!-- Footer -->' + footerHTML;
chiTietHTML = chiTietHTML.replace(/<title>.*<\/title>/, '<title>Chi Tiết Tin Tức - MIVIDOOR</title>');

// Make active class correct in chi-tiet
chiTietHTML = chiTietHTML.replace(/<a href="tin-tuc.html">TIN TỨC<\/a>/g, '<a href="tin-tuc.html" class="active">TIN TỨC</a>');
chiTietHTML = chiTietHTML.replace(/<a href="tin-tuc.html" onclick="closeMenu\(\)"/g, '<a href="tin-tuc.html" class="active" onclick="closeMenu()"');

fs.writeFileSync('chi-tiet-tin-tuc.html', chiTietHTML);
console.log('Created chi-tiet-tin-tuc.html and updated CSS.');
