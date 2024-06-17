// Object libro
const libro = {
    titulo: 'El Quijote',
    autor: 'Miguel de Cervantes'
};

  // Function agregarCapitulos
function agregarCapitulos(capitulos) {
    this.capitulos = capitulos;
}

  // Array de capítulos
const capitulos = ['Capítulo 1: En un lugar de la Mancha', 'Capítulo 2: De los molinos de viento'];

  // Usar apply() para invocar agregarCapitulos
agregarCapitulos.apply(libro, [capitulos]);

  // Imprimir el objeto libro con los capítulos agregados
console.log(libro);