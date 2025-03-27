

//closure

function contador(){
   let cuenta = 0;
   return function (){
       cuenta ++;
       return cuenta;
   };
}

const incrementar = contador();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());


//Ejercicio
//crear una funcion que debuelva otra funcion que multiplica por un numero especifico

function multiplicador(factor){
    return function(numero){
        return numero * factor;
    }
}
const duplicar = multiplicador(5);
const triplicar = multiplicador(6);

console.log(duplicar(5));
console.log(triplicar(5));

