//Repaso
//arimeticos
//+,-,*,/,%,**
// Comparación de operadores
// ==, ===, !=, !==, <, >, >=, <=;
//logicos
//&&,||,!


//var edad = 47;
//const edad2 = 20;

//if (edad < 18) {
//    console.log("Eres menor de edad");
//    let dato = "si soy menor de edad";  // esta variable solo es accesible dentro de este bloque
//    var dato2 = "claro que soy menor de edad"; // 'var' tiene alcance global o de función
//    console.log(dato);
//} else if (edad >= 18 && edad < 65) {
//    console.log("Eres un adulto");
//} else {
//    console.log("Eres un adulto mayor");
//}

//console.log(edad);
//console.log(dato2); // dato2 es accesible porque fue declarada con 'var'
//console.log(dato); // esto causará un error si lo dejas como está, ya que 'dato' fue declarada con 'let' dentro del bloque


//Ejemplo2
//let edad1 = 47;
//const edad2 = 20;
//if (edad<18){
//    console.log("Eres menor de edad");

//else if (edad>=18 && edad < 65){
//    console.log("Eres un adulto");
//} else {
//    console.log("Eres un adulto mayor")
//}
//}

//let numero = prompt("Ingreesa un numero");
//numero = Number(numero)
//if(numero > 0){
//    console.log("El numero es positivo");
//}else if (numero < 0){
//    console.log("El numero es negativo");
//}else{
//    console.log("El numero es cero");
//}

//for(let i = 1; i<=5; i++){
//    console.log(`interacion numero ${i}`)
//}

//let contador = 1;
//while (contrador <=15){
//    console.log(`contador en ${contador}`)
//    contador ++;
//}

//let num = prompt ("Ingresa un numero");
//num = Number(num);
//if(num % 2 ===0){
//    console.log("El numero es par");
//}else{
//    console.log("El numero es impar");
//}

//let suma = 0;
//for(let i = 1; i<= 100; i++){
//    suma += i;
//}

//console.log("La suma del 1 al 100 es: ", suma)


let intentos = 0;
let claveCorrecta = "1234";
let claveIngresada;

while(intentos <3){

    claveIngresada = prompt("Ingresa la contraseña")

    if(claveIngresada === claveCorrecta){
        console.log("Acceso concedido");
        break;
    }else{
        console.log("Contraseña Incorrecta");
    }
    intentos++;
}

if(intentos === 3){
    console.log("Has agotado tus intentos");
}
