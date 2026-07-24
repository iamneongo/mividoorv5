const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace common uppercase button texts
    content = content.replace(/>KHÁM PHÁ SẢN PHẨM\s*/g, '>Khám phá sản phẩm ');
    content = content.replace(/>XEM BỘ SƯU TẬP\s*/g, '>Xem bộ sưu tập ');
    content = content.replace(/>TÌM HIỂU THÊM\s*/g, '>Tìm hiểu thêm ');
    content = content.replace(/>LIÊN HỆ ĐẠI LÝ\s*/g, '>Liên hệ đại lý ');
    content = content.replace(/>TÌM HIỂU CÔNG NGHỆ\s*/g, '>Tìm hiểu công nghệ ');
    content = content.replace(/>TẤT CẢ\s*/g, '>Tất cả ');
    content = content.replace(/>CỬA PHẲNG\s*/g, '>Cửa phẳng ');
    content = content.replace(/>CỬA PHÀO CHỈ\s*/g, '>Cửa phào chỉ ');
    content = content.replace(/>CỬA CNC\s*/g, '>Cửa CNC ');
    content = content.replace(/>CỬA Ô KÍNH \/ LÁ SÁCH\s*/g, '>Cửa ô kính / lá sách ');
    content = content.replace(/>GỬI YÊU CẦU\s*/g, '>Gửi yêu cầu ');
    content = content.replace(/>XEM TẤT CẢ SẢN PHẨM\s*/g, '>Xem tất cả sản phẩm ');
    content = content.replace(/>XEM TOÀN BỘ BỘ SƯU TẬP\s*/g, '>Xem toàn bộ bộ sưu tập ');
    content = content.replace(/>XEM THÊM VỀ MIVIDOOR\s*/g, '>Xem thêm về Mividoor ');
    content = content.replace(/>XEM SẢN PHẨM\s*/g, '>Xem sản phẩm ');
    content = content.replace(/>LIÊN HỆ TƯ VẤN\s*/g, '>Liên hệ tư vấn ');
    content = content.replace(/>ĐĂNG KÝ NHẬN TƯ VẤN\s*/g, '>Đăng ký nhận tư vấn ');

    fs.writeFileSync(file, content);
}

// Also update the font-family in style.css
let cssContent = fs.readFileSync('style.css', 'utf8');
cssContent = cssContent.replace(/font-family: 'Mulish', sans-serif;/g, 'font-family: inherit;');
fs.writeFileSync('style.css', cssContent);

console.log('Fixed button text cases and font-family');
