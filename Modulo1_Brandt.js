/*
// 1
let textoDePrueba = "hola amigo todo bien";
function ponerMayusculasEnLasPalabras(texto){
    let nuevoTexto = "";
    texto = texto.toLowerCase();
for(let i = 0;i<texto.length;i++){
    if(i==0 || texto[i-1] == " "){
       nuevoTexto += texto[i].toUpperCase();

    } else nuevoTexto += texto[i];
}
console.log(nuevoTexto);
}

ponerMayusculasEnLasPalabras(textoDePrueba);
*/

// 2 
/* let palabras = ["Bokita", "el", "mas", "Grande" ];
let separadorEjemplo = "#";
function separarPalabrasPersonalizado(arr,separador){
    let acumuladorDePalabras = "";
    for(let i = 0; i<arr.length;i++){
        if(i!=(arr.length -1))  acumuladorDePalabras+= (arr[i] + separador);
        else acumuladorDePalabras += arr[i];
    }
    console.log(acumuladorDePalabras);
}
    separarPalabrasPersonalizado(palabras,separadorEjemplo);
 */

//3
/* let frase = "Hola buenos dias";

function revertirFrase(texto){
	let palabra = "";
	let arrPalabras = [];
    let j = 0;
	for(let i = 0;i<(encontrarEspacios(texto).length + 1);i++){
        
	    if(i != (encontrarEspacios(texto).length -1)){ 
            while(j<encontrarEspacios(texto)[i]){
                palabra += texto[j];
                j++;
            }
            arrPalabras.push(palabra);
            palabra = "";
            j = encontrarEspacios(texto)[i] + 1;
    } 
        else{
            while(j<=encontrarEspacios(texto)[i]){
                palabra += texto[j];
                j++;
            }
            arrPalabras.push(palabra);
            palabra = "";
            j = encontrarEspacios(texto)[i] + 1;
        }  
    }
    arrPalabras = recorrerArrayInverso(arrPalabras);
    imprimirPalabrasArr(arrPalabras);
}
function recorrerArrayInverso(arr){
	nuevoArray = [];
	for(let i = arr.length;i>0;i--){
	nuevoArray.push(arr[i-1]);
	}
	return nuevoArray;
}

function imprimirPalabrasArr(arr){
  let acumuladorDeElementos = "";
  for(let i = 0; i<arr.length;i++){
        
        if(i == (arr.length -1)) acumuladorDeElementos += arr[i];
        else acumuladorDeElementos += arr[i] + " ";
      }
      console.log(acumuladorDeElementos);
}

function encontrarEspacios(texto){
    let posicionesEspacios = [];
    for(let i = 0;i<texto.length;i++){
        if(texto[i] == " " || i == (texto.length-1)){
            posicionesEspacios.push(i);
        }
    }
    return posicionesEspacios;
}

revertirFrase(frase); */

// 4
/* let fraseEjemplo = "El sol brilla y el cielo está despejado.";
function cantidadDeRepetidasDePalabra(cadena,palabra){
    let contador = 0;
    let esIgual = true;
    let palabraCadena = "";
    let j = 0;
	for(let i = 0;i<encontrarEspacios(cadena).length;i++){
        if(i != (encontrarEspacios(cadena).length -1)){
            while(j<encontrarEspacios(cadena)[i]){
            palabraCadena += cadena[j];
            j++;
        }
        if(palabra.toLowerCase() == palabraCadena.toLowerCase()) contador++;
        }
        else{
            while(j<=encontrarEspacios(cadena)[i]){
                palabraCadena += cadena[j];
                j++;
            }
            if(palabra.toLowerCase() == palabraCadena.toLowerCase()) contador++;
        }
        palabraCadena = "";
        j = encontrarEspacios(cadena)[i]+1;
	}
    return contador;
}

function encontrarEspacios(texto){
    let posicionesEspacios = [];
    for(let i = 0;i<texto.length;i++){
        if(texto[i] == " " || i == (texto.length-1)){
            posicionesEspacios.push(i);
        }
    }
    return posicionesEspacios;
}

console.log(cantidadDeRepetidasDePalabra(fraseEjemplo,"el")); */

// 5 
/* let texto = "JavaScript es un lenguaje de programacion";
let sufijo = "cion";
function terminaConSufijo(texto, sufijo){
    let haySufijo = true;
    let i = 0;
    let empiezaSufijo = texto.length - sufijo.length;
    do{
        if(texto[empiezaSufijo] != sufijo[i]) haySufijo = false;
        i++;
        empiezaSufijo++;
    }while(haySufijo && i<texto.length);
    return haySufijo;
}
console.log(terminaConSufijo(texto,sufijo)); */

// 6 
/* let texto = " JavaScript es divertido ";
function eliminarLosEspacios(texto){
    let empezarAImprimir = false;
    let nuevoTxt = "";
    let posicionUltimaLetra = posicionDeLaUltimaLetra(texto);
    for(let i = 0;i<=posicionUltimaLetra;i++){
        if(!empezarAImprimir && texto[i] != " ") empezarAImprimir = true;
        if(empezarAImprimir) nuevoTxt += texto[i];
    }
    console.log(nuevoTxt);
}

function posicionDeLaUltimaLetra(texto){
    let posicion = null;
    for(let i = 0;i<texto.length;i++){
        if(texto[i] != " ") posicion = i;
    }
  return posicion;
}
eliminarLosEspacios(texto);  */


// 7
/* let miMail = "ignacio.n.brandt@gmail.com";
function extraerDominioDeMail(mail){
    let empezarAImprimir = false;
    let dominio = "";
    for(let i = 0; i<mail.length;i++){
        if(mail[i] == "@") empezarAImprimir = true;
           if(empezarAImprimir && i<(mail.length-1))  dominio += mail[i+1];
        
    }
    console.log(dominio);
}
extraerDominioDeMail(miMail); */

// 8 
/* let arr1 =  [1, 2, 3];
let arr2 = ['a','b','c','d'];
function intercalarArrays(arr1,arr2){
    let fusionArr = [];
    let i = 0;
    let j = 0;
    while(i<arr1.length || j<arr2.length){
        if(i<arr1.length) fusionArr.push(arr1[i]);
        if(j<arr2.length) fusionArr.push(arr2[j]);
        i++;
        j++;

    }
    return fusionArr;
}

console.log(intercalarArrays(arr1,arr2)); */

// 9 
/* function calcularImpuesto(edad,ingresos){
    let impuesto = 0;
    if(edad>=18 && edad<=21) impuesto = ingresos * 0.1;
        else if(edad>21 && edad<=30) impuesto = ingresos * 0.15;
        else if(edad > 30) impuesto = ingresos * 0.4;
    return impuesto;  
}

console.log("El individuo debe pagar " + calcularImpuesto(18,1000) + "$ de impuestos"); */

// 10 
/* function darFormatoAContadorDeSeguidores(seguidores){
    let numero = 0;
    if(seguidores < 1000000 && seguidores>=1000){
        numero = numeroEnFormato(seguidores,1000);
        console.log(numero + "M")
    }
        else if(seguidores >= 1000000){
            numero = numeroEnFormato(seguidores,1000000);
            console.log(numero + "M");
        } 
        else console.log(numero);
}

function numeroEnFormato(numero,divisor){
    entero = Math.floor(numero/divisor);
    decimal = (numero/divisor) - Math.floor(numero/divisor); 
    decimal *= 10;
    decimal = Math.floor(decimal);
    numero = String(entero) + "." + String(decimal);
    numero = parseFloat(numero);
    return numero;
}

darFormatoAContadorDeSeguidores(18562000);  */