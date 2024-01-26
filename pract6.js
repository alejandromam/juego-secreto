/* Crea una lista vacía llamada "listaGenerica".*/

let listaGenerica = [];

/*Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

/*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.*/

function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length-1; i>=0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarLenguagesReversoSeparadamente();

/*Crea una función que calcule el promedio de los elementos en una lista de números.*/

function calcularMedia(lista) {
    let suma = 0;
    for (let a=0; a<lista.length; a++) {
        suma += lista[a];
    } 
    return suma / lista.length;
}

let numeros = [15, 12, 35, 45, 96, 5];
let media = calcularMedia(numeros);
console.log(`La media es: ${media}`);

/*Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros6 = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros6);

  /*Crea una función que devuelva la suma de todos los elementos en una lista.*/

  function sumaDeNumeros(lista){
    let suma=0;
    for (let j=0; j <= lista.length; j++){
        suma += lista[i];
    }
    return suma;
  }
  let numerosLista = [12,15,78,3,54,65,21];
  let laSuma = sumaDeNumeros(numerosLista);
  console.log (`La suma de los números es: ${laSuma}`);


  /*Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.*/
  
  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

/*Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.*/

function sumaDeListas (lista1, lista2){
    
    sumak = 0
    for (let k = 0; k<lista1.length; k++) {
        sumak = lista1[k]+lista2[k];
        console.log(sumak);
    }
}

let primerLista = [2,5,6,3,7,9];
let segundaLista= [5,2,6,8,7,6];
let sumaArrays = sumaDeListas(primerLista,segundaLista);





/*Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/

function cuadradoLista (listaK){
  for(let b=0; b<listaK.length; b++) {
    listaN = listak[b] * listak[b];
    console.log(`El item ${b} es ${listaN}`);
  }
  
}

let listaNum = [12,54,2854,21,8,2158,52,1,8,7];
let listaVieja = cuadradoLista(listaNum);

