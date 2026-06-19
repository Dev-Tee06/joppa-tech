const sharp = require('sharp');

async function generate() {
  const input = 'public/images/jts-logo.jpeg';
  
  try {
    // Note: while .ico is ideally a specific format, saving a PNG as .ico often works in modern browsers.
    // However, it's safer to use Next.js's built-in favicon generation or just output PNG and rename.
    await sharp(input).resize(32, 32).png().toFile('public/favicon.ico');
    await sharp(input).resize(180, 180).png().toFile('public/apple-touch-icon.png');
    await sharp(input).resize(192, 192).png().toFile('public/android-chrome-192x192.png');
    await sharp(input).resize(512, 512).png().toFile('public/android-chrome-512x512.png');
    
    console.log('Successfully generated icon files.');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generate();
