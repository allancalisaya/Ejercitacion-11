const collectiblesModule = require('./collectibles');

const figurasHotToys = collectiblesModule.importar('Hot Toys');
const figurasBandai = collectiblesModule.importar('Bandai');
const figurasStarWars = collectiblesModule.importar('Star Wars');

const unifiedCollectibles = [...figurasHotToys, ...figurasBandai, ...figurasStarWars]

const collectibles = {
  figuras: unifiedCollectibles,

  listFigures: function () {
    this.figuras.forEach(figura => {
      console.log(`Marca: ${figura.marca}, Nombre: ${figura.nombre}, Precio: $${figura.precio}, Stock: ${figura.stock}`);
    });
  },

  figuresByBrand: function (marca) {
    return this.figuras.filter(figura => figura.marca === marca);
  }
};

  console.log("Todas las figuras:");
  collectibles.listFigures();
