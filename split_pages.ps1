$ve = Get-Content ve-chung-toi.html -Raw
$ve = $ve -replace '(?s)    <!-- Hero Section -->.*?    <!-- Về Chúng Tôi - Vì sao chọn -->', '    <div class="page-header pattern-grid" style="padding: 120px 0 60px; text-align: center; background: var(--bg-light); border-bottom: 1px solid #eaeaea;"><div class="container"><h1 style="font-size: 3rem; color: var(--text-main); margin-bottom: 15px; font-weight: 800;">Về Chúng Tôi</h1><p style="font-size: 1.1rem; color: var(--text-light); max-width: 600px; margin: 0 auto; line-height: 1.6;">Khám phá câu chuyện thương hiệu và những giá trị cốt lõi làm nên chất lượng MIVIDOOR.</p></div></div>    <!-- Về Chúng Tôi - Vì sao chọn -->'
$ve = $ve -replace '(?s)    <!-- PVC Mividoor Collection -->.*?(?=    <!-- Footer -->)', ''
Set-Content ve-chung-toi.html $ve

$sp = Get-Content san-pham.html -Raw
$sp = $sp -replace '(?s)    <!-- Hero Section -->.*?    <!-- Sản phẩm \(Các loại cửa\) -->', '    <div class="page-header pattern-grid" style="padding: 120px 0 60px; text-align: center; background: var(--bg-light); border-bottom: 1px solid #eaeaea;"><div class="container"><h1 style="font-size: 3rem; color: var(--text-main); margin-bottom: 15px; font-weight: 800;">Danh Mục Sản Phẩm</h1><p style="font-size: 1.1rem; color: var(--text-light); max-width: 600px; margin: 0 auto; line-height: 1.6;">Đa dạng mẫu mã, đáp ứng mọi nhu cầu thiết kế của không gian sống.</p></div></div>    <!-- Sản phẩm (Các loại cửa) -->'
$sp = $sp -replace '(?s)    <!-- BST MIVIDOOR LUXURY 2026 -->.*?(?=    <!-- Footer -->)', ''
Set-Content san-pham.html $sp

$bst = Get-Content bst-luxury.html -Raw
$bst = $bst -replace '(?s)    <!-- Hero Section -->.*?    <!-- BST MIVIDOOR LUXURY 2026 -->', '    <div class="page-header pattern-grid" style="padding: 120px 0 60px; text-align: center; background: var(--bg-light); border-bottom: 1px solid #eaeaea;"><div class="container"><h1 style="font-size: 3rem; color: var(--text-main); margin-bottom: 15px; font-weight: 800;">BST MIVIDOOR LUXURY</h1><p style="font-size: 1.1rem; color: var(--text-light); max-width: 600px; margin: 0 auto; line-height: 1.6;">Tuyệt tác cửa composite vân gỗ dập nổi, nâng tầm không gian sang trọng.</p></div></div>    <!-- BST MIVIDOOR LUXURY 2026 -->'
$bst = $bst -replace '(?s)    <!-- Contact Section -->.*?(?=    <!-- Footer -->)', ''
Set-Content bst-luxury.html $bst
