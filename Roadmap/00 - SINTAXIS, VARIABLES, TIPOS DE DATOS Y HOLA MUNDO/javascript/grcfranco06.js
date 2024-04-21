/*

 — EJERCICIO

 * ¿Preparad@ para aprender o repasar el lenguaje de programación que tú quieras?
 * - Recuerda que todas las instrucciones de participación están en el
 *   repositorio de GitHub.
 *
 * Lo primero... ¿Ya has elegido un lenguaje?
 * - No todos son iguales, pero sus fundamentos suelen ser comunes.
 * - Este primer reto te servirá para familiarizarte con la forma de participar
 *   enviando tus propias soluciones.
 *
 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado.
 * - Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).
 * - Crea una variable (y una constante si el lenguaje lo soporta).
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 * ¿Fácil? No te preocupes, recuerda que esta es una ruta de estudio y
 * debemos comenzar por el principio.
 */

// — SOLUCIÓN 

// JavaScript no tiene una página oficial, sin embargo, la página de Mozilla es la más completa --> https://developer.mozilla.org/es/docs/Web/JavaScript

// Hay dos maneras de utilizar los comentarios en JavaScript, pueden ser en una o varias líneas.
// De esta manera realizamos una sola línea de comentario.

/* 
De esta manera podemos realizar varias líneas.
Los comentarios juegan un papel muy importante en un código eficiente. 
*/

    let nombreLenguaje = 'JavaScript'; // Ésta es la sintaxis para crear una variable, el valor puede ser una cadena de texto, números, operaciones, entre otros. Las variables pueden ser modificadas a lo largo del código.
    const nombreDev = 'Fran'; // Ésta es la sintaxis para crear una constante. Es un tipo de dato que, como su nombre lo indica, es CONSTANTE. El valor almacenado SIEMPRE será el mismo.

// En este lenguaje, los datos primitivos son varios. Vamos a definirlos con variables.

    let texto = 'cadena de texto';
    let numero = 33;
    let booleanTrue = true;
    let booleanFalse = false;
    let sinDefinir = undefined;
    let nulo = null;

// Para imprimir en terminal, utilizaremos la siguiente línea de código. Reutilizamos la variable creada anteriormente.

    console.log('Hola, ' + nombreLenguaje)