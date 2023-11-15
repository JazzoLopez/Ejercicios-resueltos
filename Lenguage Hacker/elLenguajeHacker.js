/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */
texto = prompt("ingresa la frase")
function convertirALeet() {
    let resultado = '';
  
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto[i];
  
      switch (caracter.toUpperCase()) {
        case 'A':
          resultado += '4';
          break;
        case 'B':
          resultado += 'I3';
          break;
        case 'C':
          resultado += '[';
          break;
        case 'D':
          resultado += ')';
          break;
        case 'E':
          resultado += '3';
          break;
        case 'F':
          resultado += '|=';
          break; 
        case 'G':
          resultado += '&';
          break; 
        case 'H':
          resultado += '#';
          break;
        case 'I':
          resultado += '1';
           break; 
        case 'J':
          resultado += ',_|';
          break;
        case 'K':
          resultado += '>|';
          break;
        case 'L':
          resultado += '1';
          break;
        case 'M':
          resultado += '/\/\ ';
          break;
        case 'N':
          resultado += '^/';
          break; 
        case 'O':
          resultado += '0';
          break; 
        case 'P':
          resultado += '|p';
          break;
        case 'Q':
          resultado += '(,)';
          break;
        case 'R':
          resultado += '|2';
          break; 
        case 'S':
          resultado += '5';
          break;
        case 'T':
          resultado += '7';
          break;
        case 'U':
          resultado += '(_)';
          break;
        case 'V':
          resultado += '\/ ';
          break;
        case 'W':
          resultado += '\/\/';
          break; 
        case 'X':
          resultado += '><';
          break; 
        case 'Y':
          resultado += 'j';
          break;
        case 'Z':
          resultado += "2";
          break;        
        default:
          resultado += caracter;
      }
    }
  
    return resultado;
  }
  
  // Ejemplo de uso:
  
  let textoLeet = convertirALeet();
  console.log(textoLeet);
  document.write(textoLeet)
  
