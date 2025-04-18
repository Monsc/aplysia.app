const fs = require('fs');
const path = require('path');

// 要移动的文件和目录
const filesToMove = [
  'src',
  'public',
  '.env',
  '.env.local',
  '.env.development.local',
  '.env.test.local',
  '.env.production.local'
];

// 移动文件
filesToMove.forEach(file => {
  const source = path.join('client', file);
  const target = file;
  
  if (fs.existsSync(source)) {
    if (fs.lstatSync(source).isDirectory()) {
      // 如果是目录，递归复制
      copyDir(source, target);
    } else {
      // 如果是文件，直接复制
      fs.copyFileSync(source, target);
    }
  }
});

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
} 