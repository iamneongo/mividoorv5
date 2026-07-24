const sharp = require('sharp');
const path = require('path');

const src1 = "C:\\Users\\Asus\\Downloads\\newitem\\Gemini_Generated_Image_5atw1v5atw1v5atw.png";
const src2 = "C:\\Users\\Asus\\Downloads\\newitem\\Gemini_Generated_Image_sjcakjsjcakjsjca.png";

const dest1 = path.join(__dirname, 'images', 'burkle-machine.webp');
const dest2 = path.join(__dirname, 'images', 'wpb-plastic.webp');

async function processImages() {
    try {
        await sharp(src1)
            .resize(800) // resize width to 800px
            .webp({ quality: 80 })
            .toFile(dest1);
        console.log("Processed " + dest1);
        
        await sharp(src2)
            .resize(800)
            .webp({ quality: 80 })
            .toFile(dest2);
        console.log("Processed " + dest2);
    } catch (e) {
        console.error(e);
    }
}

processImages();
