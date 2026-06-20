const sharp = require('sharp');

async function generate() {
  const input = 'public/images/jts-logo.jpeg';
  
  try {
    await sharp(input).resize(16, 16).png().toFile('public/favicon-16x16.png');
    await sharp(input).resize(32, 32).png().toFile('public/favicon-32x32.png');
    // Saving a 32x32 PNG as .ico works in all modern browsers
    await sharp(input).resize(32, 32).png().toFile('public/favicon.ico');
    await sharp(input).resize(180, 180).png().toFile('public/apple-touch-icon.png');
    await sharp(input).resize(192, 192).png().toFile('public/android-chrome-192x192.png');
    await sharp(input).resize(512, 512).png().toFile('public/android-chrome-512x512.png');
    
    console.log('Successfully generated all icon files.');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generate();
