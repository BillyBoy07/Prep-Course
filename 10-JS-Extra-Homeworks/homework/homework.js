// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  var matriz = Object.entries(objeto);
  
  return matriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var cantidadCaracteres = {};  //Objeto cual guardara el resultado.

  //FOR...IN para recorrer el string
  for ( var caracter in string){

    //Si el valor existe se incrementa en 1, sino, valdra 0.
    cantidadCaracteres[string[caracter]] = (cantidadCaracteres[string[caracter]] || 0 ) +1;
  }

  return cantidadCaracteres;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  //No toma la funcion: .toUppercase(). Ni "s" como string ni pasandola a .toString(), nada.
    
    var cadenaMayuscula="";
    var cadena="";
    var carActual="";

    function esMayuscula(caracter) {
      return caracter === caracter.toUpperCase();
    }

    function esMinuscula(caracter) {
      return caracter === caracter.toLowerCase();
    }   

    for(var i=0; i< s.length; i++) {
      
      carActual = s.charAt(i);

      if(esMayuscula(carActual)){
        cadenaMayuscula = cadenaMayuscula + s[i];
      }

      if(esMinuscula(carActual)){
        cadena = cadena + s[i];
      }       
    }

    return cadenaMayuscula + cadena;
  }


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var arrString = str.split(" ");
  var arrInvertido=[];
  var cadena="";

  function invertirOrden(cadena){
    var cadena2="";

    for (var i=cadena.length-1; i>=0; i--){
            
      if(cadena2 == 'undefined'){
          cadena2 = cadena[i];
      } else {
          cadena2 = cadena2 + cadena[i];
      }     
    } 

    return cadena2;
  }
  
  for(var i=0; i<=arrString.length-1; i++){
      cadena = arrString[i];
      arrInvertido[i] = invertirOrden(cadena);
  }  

  return arrInvertido.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var nroString = String(numero);
  var resultado = "";

  
  if (resultado = asAmirror(nroString) !== nroString) return "No es capicua";
  return "Es capicua";

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var cadenaChek ="";
  cadena = cadena.toLowerCase();

  for (var i=0; i<cadena.length; i++){
    
    if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c')  cadenaChek = cadenaChek + cadena[i];
  }

  return cadenaChek;
}




function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  const arrString = [];
  var orden=-1;
  var largo1=-1;
  var masLarga = arr[0].length;

  //var palabraLarga = arr.reduce((acc, val) => acc.length > val.length ? acc : val, '');
  //return palabraLarga;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

