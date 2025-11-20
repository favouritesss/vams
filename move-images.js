// move-images.js
import fs from "fs";
import path from "path";

// Source: /public (where your images are right now)
const sourceDir = path.join(process.cwd(), "public");

// Destination: /public/images (or any folder you want)
const destDir = path.join(process.cwd(), "public", "images");

// Create destination folder if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Read all files from /public
fs.readdirSync(sourceDir).forEach((file) => {
  if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
    fs.copyFileSync(
      path.join(sourceDir, file),
      path.join(destDir, file)
    );
    console.log(`Copied: ${file}`);
  }
});

console.log("All images copied into /public/images/");