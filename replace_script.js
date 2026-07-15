const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const startMarker = '<!-- Why Choose Us -->';
const endMarker = '<!-- Contact Section -->';

const newHtml = `<!-- Về Chúng Tôi - Vì sao chọn -->
    <section id="ve-chung-toi" class="why-choose-us deep-section">
        <div class="container">
            <h2 class="section-title text-center">VÌ SAO CHỌN CỬA MIVICOMPOSITE?</h2>
            <div class="title-underline"></div>
            
            <!-- Phần 1: Tính năng -->
            <div class="reasons-grid" style="margin-bottom: 50px;">
                <div class="reason-card">
                    <div class="reason-icon"><i class="fa-solid fa-droplet-slash"></i></div>
                    <h3>Chống nước tuyệt đối</h3>
                    <p>Không lo ẩm mốc, phù hợp với môi trường có độ ẩm cao.</p>
                </div>
                <div class="reason-card">
                    <div class="reason-icon"><i class="fa-solid fa-bug-slash"></i></div>
                    <h3>Chống mối mọt</h3>
                    <p>Xoá tan nỗi lo cửa bị tấn công bởi mối mọt.</p>
                </div>
                <div class="reason-card">
                    <div class="reason-icon"><i class="fa-solid fa-fire-extinguisher"></i></div>
                    <h3>Chống cháy lan</h3>
                    <p>Không dẫn lửa, an toàn trong sử dụng, giúp giảm thiểu tối đa thiệt hại tài sản và con người.</p>
                </div>
                <div class="reason-card">
                    <div class="reason-icon"><i class="fa-solid fa-cube"></i></div>
                    <h3>Không cong vênh co ngót</h3>
                    <p>Không biến dạng, nứt nẻ sau thời gian dài sử dụng dưới mọi thời tiết.</p>
                </div>
                <div class="reason-card">
                    <div class="reason-icon"><i class="fa-solid fa-volume-xmark"></i></div>
                    <h3>Cách âm tốt</h3>
                    <p>Hạn chế tiếng ồn từ bên ngoài, mang lại không gian sống riêng tư, thoải mái.</p>
                </div>
                <div class="reason-card">
                    <div class="reason-icon"><i class="fa-solid fa-temperature-half"></i></div>
                    <h3>Cách nhiệt tốt</h3>
                    <p>Giữ nhiệt độ phòng ổn định mặc cho sự thay đổi khắc nghiệt của thời tiết.</p>
                </div>
            </div>

            <!-- Phần 2: Vật liệu cao cấp -->
            <div class="materials-gallery" style="margin-bottom: 60px;">
                <h3 class="subsection-title text-center" style="margin-bottom: 30px; font-size: 1.5rem;">NGUỒN NGUYÊN VẬT LIỆU CAO CẤP</h3>
                <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    <div style="aspect-ratio: 4/3; background: #ddd; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #888; overflow: hidden;"><img src="images/vietbuild-1.jpg" alt="Vietbuild" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'"></div>
                    <div style="aspect-ratio: 4/3; background: #ddd; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #888; overflow: hidden;"><img src="images/vietbuild-2.jpg" alt="Vietbuild" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'"></div>
                    <div style="aspect-ratio: 4/3; background: #ddd; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #888; overflow: hidden;"><img src="images/vietbuild-3.jpg" alt="Vietbuild" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'"></div>
                    <div style="aspect-ratio: 4/3; background: #ddd; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #888; overflow: hidden;"><img src="images/vietbuild-4.jpg" alt="Vietbuild" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'"></div>
                </div>
            </div>

            <!-- Phần 3: Công nghệ & Máy móc -->
            <div class="production-technology" style="display: flex; flex-wrap: wrap; gap: 40px; align-items: center;">
                <div class="tech-content" style="flex: 1; min-width: 300px;">
                    <h3 class="subsection-title" style="margin-bottom: 20px; font-size: 1.5rem;">CÔNG NGHỆ TỪ ĐỨC</h3>
                    <p style="margin-bottom: 20px; line-height: 1.6; color: var(--text-muted);">Dây chuyền sản xuất hiện đại, kiểm soát chất lượng theo tiêu chuẩn Đức, đảm bảo độ chính xác và độ bền vượt trội cho từng sản phẩm. Đội ngũ thợ lành nghề với tâm huyết đặt vào từng chi tiết, vận hành hệ thống máy móc VIP tại nhà máy để tạo ra những bộ cửa hoàn hảo.</p>
                    <ul class="tech-list" style="list-style: none; padding: 0; margin-bottom: 25px;">
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-circle-check text-red"></i> Tiêu chuẩn chất lượng Đức</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-circle-check text-red"></i> Vật liệu nhập khẩu cao cấp</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-circle-check text-red"></i> Quy trình sản xuất hiện đại</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-circle-check text-red"></i> Kiểm định nghiêm ngặt</li>
                        <li style="margin-bottom: 12px;"><i class="fa-solid fa-circle-check text-red"></i> Bền đẹp - An toàn - Thân thiện</li>
                    </ul>
                    <a href="https://mivicomposite.vn/cong-nghe/" class="btn btn-outline-danger btn-pill">TÌM HIỂU CÔNG NGHỆ &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div class="tech-images" style="flex: 1; min-width: 300px; position: relative;">
                    <img src="images/factory-video.jpg" alt="Nhà máy Mividoor" style="width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); object-fit: cover; aspect-ratio: 4/3;" onerror="this.src='https://via.placeholder.com/800x600?text=Nha+may+Mividoor'">
                </div>
            </div>
        </div>
    </section>

    <!-- Structure Section -->
    <section class="structure" style="background-color: var(--light-bg); padding: 60px 0;">
        <div class="container">
            <h2 class="section-title text-center">CẤU TẠO CỬA COMPOSITE MIVI</h2>
            <div class="structure-wrapper text-center" style="margin-top: 50px; display: flex; justify-content: center; margin-bottom: 60px;">
                <img src="images/cau-tao-cua.png" alt="Cấu tạo cửa Composite" style="max-width: 850px; width: 100%; height: auto;">
            </div>

            <!-- Thông số kỹ thuật -->
            <h2 class="section-title text-center" style="margin-top: 80px;">THÔNG SỐ KỸ THUẬT</h2>
            <div class="specs-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 40px;">
                <div class="spec-card" style="background: var(--white); padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                    <h3 style="color: var(--primary-color); margin-bottom: 15px; border-bottom: 2px solid var(--danger-color); padding-bottom: 10px; display: inline-block;">KÍCH THƯỚC TIÊU CHUẨN</h3>
                    <ul style="list-style: none; padding: 0; line-height: 1.8;">
                        <li><strong>Cửa phòng:</strong> 900 x 2200 mm</li>
                        <li><strong>Cửa vệ sinh:</strong> 800 x 2100 mm</li>
                        <li><strong>Độ dày cánh:</strong> 40 mm (± 2mm)</li>
                    </ul>
                </div>
                <div class="spec-card" style="background: var(--white); padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                    <h3 style="color: var(--primary-color); margin-bottom: 15px; border-bottom: 2px solid var(--danger-color); padding-bottom: 10px; display: inline-block;">HỆ KHUNG BAO</h3>
                    <ul style="list-style: none; padding: 0; line-height: 1.8;">
                        <li><strong>Khung 90:</strong> Cho tường dày 90-115mm</li>
                        <li><strong>Khung 100:</strong> Cho tường dày 105-125mm</li>
                        <li><strong>Khung 120:</strong> Cho tường dày 120-145mm</li>
                        <li><strong>Khung 200:</strong> Cho tường dày 200-225mm</li>
                    </ul>
                </div>
                <div class="spec-card" style="background: var(--white); padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
                    <h3 style="color: var(--primary-color); margin-bottom: 15px; border-bottom: 2px solid var(--danger-color); padding-bottom: 10px; display: inline-block;">NẸP CHỈ L HỆ CÀI</h3>
                    <ul style="list-style: none; padding: 0; line-height: 1.8;">
                        <li><strong>Kích thước:</strong> 12 x 55 mm</li>
                        <li><strong>Đặc điểm:</strong> Có chân cài trực tiếp vào khung bao, giúp che khuyết điểm khe hở giữa tường và khung, dễ dàng tháo lắp chỉnh sửa.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- PVC Mividoor Collection -->
    <section class="pvc-collection" style="padding: 60px 0;">
        <div class="container">
            <h2 class="section-title text-center">BẢNG MÀU PVC MIVIDOOR</h2>
            <div class="title-underline"></div>
            <p class="text-center" style="margin-bottom: 40px; color: var(--text-muted); font-size: 1.1rem;">Bộ sưu tập 18 màu phim cao cấp, vân gỗ tự nhiên sắc nét</p>
            
            <div class="colors-grid" id="pvc-colors-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 15px;">
                <!-- Dùng JS để render 18 màu -->
            </div>
        </div>
    </section>

    <!-- Sản phẩm (Các loại cửa) -->
    <section id="san-pham" class="products-section" style="padding: 80px 0; background-color: var(--light-bg);">
        <div class="container">
            <div class="section-header text-center" style="margin-bottom: 50px;">
                <h2 class="section-title">SẢN PHẨM CỬA COMPOSITE</h2>
                <div class="title-underline"></div>
            </div>
            
            <!-- Category Tabs -->
            <div class="product-tabs" style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-bottom: 40px;">
                <button class="tab-btn active" onclick="filterProducts('all')">Tất cả</button>
                <button class="tab-btn" onclick="filterProducts('cua-phang')">Cửa Phẳng</button>
                <button class="tab-btn" onclick="filterProducts('cua-phao-chi')">Cửa Phào Chỉ / Nẹp</button>
                <button class="tab-btn" onclick="filterProducts('cua-cnc')">Cửa CNC</button>
                <button class="tab-btn" onclick="filterProducts('cua-o-kinh')">Cửa Ô Kính / Fix / Lùa</button>
            </div>
            
            <div class="collection-grid" id="product-grid">
                <!-- Products will be generated by JS -->
            </div>
        </div>
    </section>

    <!-- BST MIVIDOOR LUXURY 2026 -->
    <section id="bst-luxury" class="luxury-collection" style="padding: 80px 0;">
        <div class="container">
            <div class="section-header text-center" style="margin-bottom: 50px;">
                <h2 class="section-title" style="color: #d4af37;">BST MIVIDOOR LUXURY 2026</h2>
                <p style="margin-top: 15px; font-size: 1.1rem; color: var(--text-muted);">Những tuyệt tác cửa sang trọng bậc nhất trưng bày tại Vietbuild HCM 2026</p>
            </div>
            
            <div class="luxury-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                <!-- 3 mẫu luxury -->
                <div class="luxury-card" style="position: relative; overflow: hidden; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); aspect-ratio: 3/4; background: #eee;">
                    <img src="images/luxury-1.jpg" alt="Luxury Door 1" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/600x800?text=Luxury+Door+1'">
                    <div class="luxury-info" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 40px 20px 20px; color: white;">
                        <h3 style="margin: 0 0 5px 0; color: #d4af37;">MIVI-LUX 01</h3>
                        <p style="margin: 0; font-size: 0.95rem; opacity: 0.9;">Sang trọng, Đẳng cấp</p>
                    </div>
                </div>
                <div class="luxury-card" style="position: relative; overflow: hidden; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); aspect-ratio: 3/4; background: #eee;">
                    <img src="images/luxury-2.jpg" alt="Luxury Door 2" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/600x800?text=Luxury+Door+2'">
                    <div class="luxury-info" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 40px 20px 20px; color: white;">
                        <h3 style="margin: 0 0 5px 0; color: #d4af37;">MIVI-LUX 02</h3>
                        <p style="margin: 0; font-size: 0.95rem; opacity: 0.9;">Tân cổ điển, Tinh tế</p>
                    </div>
                </div>
                <div class="luxury-card" style="position: relative; overflow: hidden; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); aspect-ratio: 3/4; background: #eee;">
                    <img src="images/luxury-3.jpg" alt="Luxury Door 3" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/600x800?text=Luxury+Door+3'">
                    <div class="luxury-info" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 40px 20px 20px; color: white;">
                        <h3 style="margin: 0 0 5px 0; color: #d4af37;">MIVI-LUX 03</h3>
                        <p style="margin: 0; font-size: 0.95rem; opacity: 0.9;">Hiện đại, Phá cách</p>
                    </div>
                </div>
            </div>
        </div>
    </section>\n`;

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    const updatedContent = content.substring(0, startIdx) + newHtml + '    ' + content.substring(endIdx);
    fs.writeFileSync('index.html', updatedContent, 'utf8');
    console.log('Successfully updated index.html');
} else {
    console.log('Could not find markers in index.html');
}
