const fs = require('fs');
const path = require('path');

const generatedDir = path.resolve(__dirname, 'src/@generated');
const indexPath = path.join(generatedDir, 'index.ts');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

function generateExports() {
  const files = [];
  walkDir(generatedDir, (filePath) => {
    if (filePath.endsWith('.ts') && !filePath.endsWith('index.ts')) {
      files.push(filePath);
    }
  });

  const exportStatements = files.map((file) => {
    const relativePath = path.relative(generatedDir, file).replace(/\\/g, '/');
    const importPath = `./${relativePath.replace('.ts', '')}`;
    return `export * from '${importPath}';`;
  });

  fs.writeFileSync(indexPath, exportStatements.join('\n'), 'utf8');
}

generateExports();
