// Funcion 
// function saludar(nombre){
//     return console.log(`Hola, ${nombre} como estas?`);
// }

// saludar("Alejandro");

// Callbacks
// function procesarUsuario(usuario, callback) {
//     console.log("Procesando Usuario...");
//     callback(usuario)
// }

// procesarUsuario("Firulai",
//     function (nombre) {
//         console.log(`Usuario procesado: ${nombre}`);
//     }
// )

// Promesas 
// function dividir(a, b) {
//     return new Promise((resolve, reject) => {
//         if (b === 0) reject("No se puede dividir por Cero");
//         else resolve(a / b);
//     })
// }

// // console.log(dividir(4,2))
// dividir(100, 20)
//     .then(resultado => console.log("Resultado: ", resultado))
//     .catch(error => console.error("Error, ", error))
//     .finally(console.log("Terminamos"))

// Async / Await

// async function calcularUnaDivicion() {
//     try{
//         const resultado = await dividir(10,0);
//         console.log("Resultado: (Async / Await)", resultado);
//     } catch (error) {
//         console.error("Error, (Async / Await)", error)
//     }
// }

// calcularUnaDivicion();

// -----------------------

// ECMAScript Moderno (ES6) 2015
/**
 * let y const
 * Teplate String
 * Arrow Functions
 * Destructuracion
 * Spread/Rest operator
 */

// const persona = {
//     nombre: "Alejandro",
//     edad: 49,
//     email: "alejandro@mail.com",
//     pais: "Argentina"
// };

// console.log(persona)

// const { nombre, edad, pais } = persona;

// console.log(nombre)
// console.log(edad)
// console.log(pais)

// console.log(persona.pais)

// // Destructurar Arrays
// const myArray = ["rojo", "azul", "verde"];

// const [primero, ,segundo] = myArray;
// console.log(primero)
// console.log(segundo)


// const persona = {
//     nombre: "Alejandro",
//     edad: 49,
//     email: "alejandro@mail.com",
//     pais: "Argentina"
// };

// // Spread en Objetos
// const personaConDni = { ...persona, dni: "22333366" }

// console.log(personaConDni)

// const array1 = ["Alejandro", "Gustavo", "Ana"];
// const array2 = ["Banana", "Pera", "Manzana"];

// // const todoJunto = [array1, array2];
// const todoJunto = [...array1, ...array2];
// console.log(todoJunto)

// ES7
/**
 * Exponenciacion **
 * Array.includes() -> boolean
 */

// const base = 225;
// const exponente = 1/2;
// const resultado = base ** exponente;

// console.log(resultado)

// const frutas = ["Banana", "Pera", "Manzana"];

// console.log(frutas.includes("Banana")) // true
// console.log(frutas.includes("Banaa")) // false
// console.log(frutas.includes("Papaya")) // false

// const numeros = [1,2,3,4,5,6];
// console.log(numeros.includes(10))

// console.log(numeros.includes(1))

// --------------------------------------------------------

// ES8
/**
 * Object.entries() Object.values()
 * Padding de Strings
 * Async / Await
 */

// const persona = {nombre: "Lucia", edad: 30};

// console.log(Object.entries(persona))

// console.log(Object.values(persona))

// const numero = "7";

// console.log(numero.padStart(3, "0"));

// console.log(numero.padEnd(8, "-"));

// ES9

/**
 * Spread Operator en Objetos
 * Rest Operator
 */


// const persona = {
//     id:1,
//     nombre: "Alejandro",
//     edad: 49,
//     email: "alejandro@mail.com",
//     pais: "Argentina"
// };

// // Spread en Objetos
// const personaConDni = { ...persona, dni: "22333366" }
// console.log(personaConDni)

// // Rest operator

// const {id, ...resto} = persona;
// console.log(id)
// console.log(resto)

// ES10
/**
 * Array.flat()
 * trimStart() y trimEnd()
 */

// const numeros = [1, 2, [3, 4], [5, [6, 7]]];

// console.log(numeros.flat())
// console.log(numeros.flat(2))

// const mensaje = "            Hola mundo                     ";
// console.log(mensaje)

// console.log(mensaje.trim())
// console.log(mensaje.trimStart())
// console.log(mensaje.trimEnd())

// ES11
/**
 * Nullish Coalescing ??
 */

// const nombre = null;
// const respuestaDelBackend = nombre ?? "Anonimo";

// console.log(respuestaDelBackend)

// function obtenerUsuario(usuario) {
//     return usuario?.nombre ?? "Anonimo";
// }
// console.log(obtenerUsuario({nombre: "Lucia"}));

// console.log(obtenerUsuario(null));

/**
 * 📝 Actividad: Combinar inventarios
    Dadas dos listas de productos vendidos (inventario y stock), hacé lo siguiente:

    Crear un array listaProductos con todos los tipos de productos, sin repetir.

    Calcular el total de productos vendidos sumando todos los valores de ambos objetos.

    Mostrá ambos resultados por consola.
 */

// const inventario = {
//     remeras: 30,
//     pantalones: 20,
//     zapatillas: 15
// }

// const stock = {
//     gorros: 5,
//     zapatillas: 8,
//     remeras: 12
// }

// const listaProductos = [];
// for (const key of Object.keys(inventario)) {
//     if (!listaProductos.includes(key)) listaProductos.push(key)
// }
// for (const key of Object.keys(stock)) {
//     if (!listaProductos.includes(key)) listaProductos.push(key)
// }
// console.log("Tipo de Productos: ", listaProductos);

// const total = [...Object.values(inventario), ...Object.values(stock)].reduce((acc, val) => acc + val, 0);
// console.log("Total vendido: ", total);


// Crear una Calculadora usando Callback

// function operacion(a, b, callback) {
//     return callback(a, b);
// }

// function sumar(a, b) { return a + b }
// function restar(a, b) { return a - b }

// console.log(operacion(10, 8, sumar));
// console.log(operacion(10, 8, restar));



// const numeros = [1, 2, 3];
// const duplicados = numeros.map(n => n * 2);
// console.log(duplicados)