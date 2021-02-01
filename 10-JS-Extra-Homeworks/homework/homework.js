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
  result = []
  for(const k in objeto){
    console.log(k)
    result.push([k, objeto[k]])
  }
   return result;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let resp = {}
  original = string.split('');
  sinRepetidos = original.filter((v, i, s) => {    
    return s.indexOf(v) === i;
  })
  sinRepetidos.forEach(esR => {
    resp[esR] = 0;
    original.forEach(eO => {
      if (eO === esR) resp[eO]++
    });    
  });
  return resp
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  min = [];
  mayu = [];
  a = s.split('');
  a.forEach(letra => {
    (letra === letra.toUpperCase())? mayu.push(letra):min.push(letra);
  })
  return mayu.join('') + min.join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  a = str.split(' ')
  let r = '';
  a.forEach((word, i) => {
    (a.length == i+1)? r += word.split('').reverse().join('') : r += word.split('').reverse().join('') + ' ' ;
  });
  return r
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const isCapicua = numero == parseInt(numero.toString().split('').reverse().join(''))
  return isCapicua ? "Es capicua" : "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.toLowerCase().split('');
  let resp = '';
  cadena.forEach(letter => {
    if(letter !== 'a' && letter !== 'b' && letter !== 'c') resp += letter 
  });
  return resp;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let result = [];
  let longitudes = []
  arr.forEach((e,i) => {
    longitudes.push({l:e.length, i: i})
  });
  longitudes.sort(((a,b)=> a.l - b.l))
  longitudes.forEach(e => {
    result.push(arr[e.i])
  });
  
  return result
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let r = []
  arreglo1.forEach(a1 => {
    arreglo2.forEach(a2 => {
      if(a1 === a2) r.push(a1)
    });
  });
  return r
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

