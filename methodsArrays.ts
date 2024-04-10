//  1)	Realiza la multiplicación de el siguiente arreglo: [10, “5”, “7”,9,23,”17”].

const array1 = [10,"5","7", 9,23,"17"]

const respuesta = array1.map(num => {
    if (typeof num === 'number') {
        return num * 2;
    } else if (typeof num === 'string') {
        return parseInt(num, 10) * 2;
    }
});
 console.log("multiplicacion de arreglo:", respuesta);
 console.log();
 //2)	Crea un array que solo traiga elementos que tengan solo 6 caracteres.

 const arrayOriginal = ['perro', 'gato', 'pez', 'tigre', 'loro', 'conejo'];

const arrayFiltrado = arrayOriginal.filter(elemento => elemento.length === 6);

console.log("Array Original:", arrayOriginal);
console.log("Array Filtrado (elementos de 6 caracteres):", arrayFiltrado);


 // 3) Imprime la tabla de multiplicar 7 usando el forEach()
const numeroBase = 7;
const tablaMultiplicar = [1,2,3,4,5,6,7,8,9,10];

tablaMultiplicar.forEach(function(numero){
    let resultado = numeroBase * numero;
    console.log(numeroBase, "X", numero, "=", resultado)
});

// 4)	Crea el siguiente arreglo (manzana, limon, sandia, pera, toronja, naranja) y verifica que incluya la fruta sandia

const frutas = ['manzana', 'limon', 'sandia', 'pera', 'toronja', 'naranja'];

const incluyeSandia = frutas.includes('sandia');

if (incluyeSandia) {
    console.log('El arreglo incluye la fruta "sandia".');
} else {
    console.log('El arreglo no incluye la fruta "sandia".');
}


//5)	En el siguiente arreglo de usuarios busca el usuario con el email rosario@gmail.com 
 const Usuarios = [
    {
        name: "Rafael perez",
        email: "rafael@gmail.com"
     },
    {
        name: "Rosario Perez",
        email: "rosario@gmail.com"
     },
    {
        name: "Rodrigo avila",
        email: "rodrigo@gmail.com"
     },
    {
        name: "Alberto Campos",
        email: "alberto@gmail.com"
     },

  ];

 const resultado = Usuarios.filter(Usuario => Usuario.email === "rosario@gmail.com")
  console.log(resultado);

  //6) En el siguiente arreglo: [1,6,3,4,2,56,10], ordénalos de manera descendente. 
   const arraysDesc = [1,6,3,4,2,56,10];

   const numOrderDesc = arraysDesc.sort(function(a, b){
    return b - a; 
   });
   console.log(numOrderDesc);

   //7)En el siguiente arreglo: [1,2,3,4,5,6,7], verifica si todos los números son mayores a 5.

   const mayorCinco = [1,2,3,4,5,6,7];
   const resultMayorCinco = mayorCinco.every(num => num > 5)
    if(resultMayorCinco){
        console.log("Todos lo numeros son mayores a cinco");
    }else{
        console.log("No todo son mayores a cinco")
    }
//8)Agrega 3 arreglos que contenga al menos  2 elementos cada uno de los arreglos será diferente uno será de tipo numérico, uno string y otro booleano. Concatena los 3 arreglos, usando “concat”.
 
const Numerico = [1,2];
const Strings = ["Pelota", "Mesa"];
const Booleanos = [true, false];

const nuevoArreglo = Numerico.concat(Strings, Booleanos);
console.log(`arreglo concatenado con el metodo concat(), ${nuevoArreglo}`)

// 9) Crea un arreglo numérico y elimina el primer elemento.
  
const numElimnar = [1,2,3,4,5,6,7,89]

const numEliminado = numElimnar.shift()
console.log(`Elemento eliminado ${numEliminado}`);
console.log(`Arrays modificado ${numElimnar}`)

// 10)Buscar el índice en el que se encuentre el numero 5 en este arreglo: [12,6,7,8,11,10,9,5,3,43]

const buscarnum = [12,6,7,8,11,10,9,5,3,43];

const buscarIndice =  buscarnum.indexOf(5);
if(buscarIndice !== -1){
    console.log(`El numero 5 se encuentra en el indice ${buscarIndice}`)
}else{
console.log(`El número 5 no se encuentra en el array`)

}

// 10) ) crea un arreglo donde su inicio sea 1 y su fin 10 y luego crea una copia de el arreglo pero a cada item multiplícalo por 3.
const numArreglo = [1,2,3,4,5,6,7,8,9,10]
 const itemMultiplicado = numArreglo.map(num => num *3);
console.log(`Arreglo original ${numArreglo}`)
 console.log(`copia del arreglo (Item multiplicado por 3): ${itemMultiplicado}`)