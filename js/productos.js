function precio(art) {
  let articulos = [
    "Corte femenino",
    "Corte masculino",
    "1 sesión de Body Up",
    "pack de 8 sesiones depilación definiva",
  ];
  let precios = [600, 500, 1000, 15000];
  let resultado = -1;
  let ind;
  ind = articulos.indexOf(art);
  if (ind >= 0) resultado = precios[ind];
  return resultado;
}

let nombre = prompt("¡Hola! Ingresa tu nombre");
let opciones = (
  prompt(
    "Hola " + nombre + " a continuación ingresa el articulo para ver su precio"
  )
);

/* Resultado */
console.log("Su total es de $ " + precio(opciones));

