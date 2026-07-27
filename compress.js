const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'images');

async function processImages() {
    const files = fs.readdirSync(imagesDir);
    let converted = 0;

    for (const file of files) {
        if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
            const filePath = path.join(imagesDir, file);
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);
            
            // Skip files that already have a webp version if we want, but let's just overwrite
            const webpPath = path.join(imagesDir, `${baseName}.webp`);
            
            try {
                await sharp(filePath)
                    .webp({ quality: 80 }) // 80% quality for good compression/visual balance
                    .toFile(webpPath);
                
                // Delete original file after successful conversion to save space and ensure we only use webp
                fs.unlinkSync(filePath);
                
                console.log(`Converted ${file} to ${baseName}.webp and deleted original.`);
                converted++;
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    }
    console.log(`Total images converted: ${converted}`);
}

processImages();
