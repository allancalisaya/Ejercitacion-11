const fs = require('fs');

function importar(marca) {
  const archivoPath1 = './datos/figuras1.json';
  const archivoPath2 = './datos/figuras2.json';
  const archivoPath3 = './datos/figuras3.json';

  const datos1 = JSON.parse(fs.readFileSync(archivoPath1, 'utf8'));
  const datos2 = JSON.parse(fs.readFileSync(archivoPath2, 'utf8'));
  const datos3 = JSON.parse(fs.readFileSync(archivoPath3, 'utf8'));

  const figurasDeMarca = datos1.filter(figura => figura.marca === marca);
  return figurasDeMarca;
}

module.exports = {
  importar
};