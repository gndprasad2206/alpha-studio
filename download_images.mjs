import fs from 'fs';
import path from 'path';

const srcDir = './src';
const publicImgDir = './public/images';

if (!fs.existsSync(publicImgDir)){
    fs.mkdirSync(publicImgDir, { recursive: true });
}

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

const filePaths = [];
walkSync(srcDir, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        filePaths.push(filePath);
    }
});

let urlMap = {};
let counter = 1;

for (let file of filePaths) {
    let content = fs.readFileSync(file, 'utf8');
    const regex = /https:\/\/images\.unsplash\.com\/[^"'\s\)\`]+/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        let url = match[0];
        if (!urlMap[url]) {
            urlMap[url] = `img_${counter}.jpg`;
            counter++;
        }
    }
}

async function downloadImage(url, dest) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Failed to download ${url}: ${response.status} ${response.statusText}`);
            return;
        }
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(dest, buffer);
    } catch (error) {
        console.error(`Error downloading ${url}:`, error);
    }
}

async function run() {
    const entries = Object.entries(urlMap);
    console.log(`Found ${entries.length} unique images.`);
    
    for (const [url, filename] of entries) {
        const dest = path.join(publicImgDir, filename);
        if (!fs.existsSync(dest)) {
            console.log(`Downloading to ${filename}... `);
            await downloadImage(url, dest);
            console.log(`Downloaded ${filename}`);
        } else {
            console.log(`${filename} already exists.`);
        }
    }

    // Replace in files
    for (let file of filePaths) {
        let content = fs.readFileSync(file, 'utf8');
        let newContent = content;
        for (const [url, filename] of entries) {
            // Need to handle potential escaped characters, but simple split/join works for these raw URLs
            newContent = newContent.split(url).join(`/images/${filename}`);
        }
        if (content !== newContent) {
            fs.writeFileSync(file, newContent);
            console.log(`Updated file: ${file}`);
        }
    }
    console.log("Done!");
}

run();
