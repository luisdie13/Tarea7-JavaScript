  //Funcion
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

  // Objeto persona
const persona = {
    nombre: "Juan"
};

  // Llamar a la función saludar con el contexto de persona usando call()
const saludo = saludar.call(persona, persona.nombre);

  // Imprimir el saludo
  console.log(saludo); // Debe imprimir: Hola, Juan!