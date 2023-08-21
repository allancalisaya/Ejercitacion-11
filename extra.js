const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [valorPos0, , valorPos2, , valorPos4, ...restoValores] = numeros;

const nuevoArray = [...restoValores];

const mascota = {
    nombre: 'Bony',
    tipo: 'Perro',
    color: 'Dorado',
    raza: 'Golden retriever'
  };
  
  const { nombre, tipo, color, raza } = mascota;
  
  console.log(`Hola, les presento a mi mascota. Su nombre es: ${nombre}, es un hermoso ${tipo}, de color: ${color} y su raza es: ${raza}.`);