const fs = require('fs');

const cardsHTML = `
                    <div class="material-card" style="position: relative; aspect-ratio: 4/3; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <img src="images/burkle-machine.webp" alt="Công nghệ phủ phim máy Burkle" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,25,80,0.9) 0%, rgba(0,25,80,0.6) 60%, transparent 100%); padding: 40px 20px 20px; color: white; text-align: left;">
                            <h4 style="margin: 0; font-size: 1.2rem; text-transform: uppercase; line-height: 1.4;">CÔNG NGHỆ PHỦ PHIM<br>MÁY BURKLE NHẬP TỪ ĐỨC</h4>
                        </div>
                    </div>
                    <div class="material-card" style="position: relative; aspect-ratio: 4/3; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <img src="images/wpb-plastic.webp" alt="Chêm đố nhựa WPB" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,25,80,0.9) 0%, rgba(0,25,80,0.6) 60%, transparent 100%); padding: 40px 20px 20px; color: white; text-align: left;">
                            <h4 style="margin: 0; font-size: 1.2rem; text-transform: uppercase; line-height: 1.4;">CHÊM ĐỐ NHỰA WPB<br>VÀO 4 CẠNH CÁNH CỬA</h4>
                        </div>
                    </div>
`;

let content = fs.readFileSync('index.html', 'utf8');
const targetStr = '                        </div>\n                    </div>\n                </div>\n            </div>';
if (content.includes(targetStr)) {
    // Actually, let's search for the end of gallery-grid
    // The last card is "PHIM PVC"
    const target2 = `                    <div class="material-card" style="position: relative; aspect-ratio: 4/3; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <img src="images/phim-pvc.png" alt="Phim PVC" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,25,80,0.9) 0%, rgba(0,25,80,0.6) 60%, transparent 100%); padding: 40px 20px 20px; color: white; text-align: left;">
                            <h4 style="margin: 0; font-size: 1.2rem; text-transform: uppercase; line-height: 1.4;">LỚP PHIM PVC<br>CAO CẤP DÀY DẶN</h4>
                        </div>
                    </div>`;
                    
    content = content.replace(target2, target2 + cardsHTML);
    fs.writeFileSync('index.html', content);
    console.log("Updated index.html");
} else {
    console.log("Not found target string");
}
