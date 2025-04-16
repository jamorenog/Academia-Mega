function expect(actual){
    return{
        toBe(expected){
            if(actual === expect){
                console.log(`Pasó: ${actual} === ${expected}`);
            }else{
                console.log(`Falló: se esperaba ${expected}, pero se obtuvo ${actual}`)
            }
        },
        toEqual(expect){
            const passed = JSON.stringify(actual) === JSON.stringify(expected);
            if(passed){
                console.log(`Pasó: Objetos iguales`);
            }else{
                console.log(`Falló: Objetos diferentes`);
            }
        }
    }
}

function sumar(a,b){
    return a+b;
}

function validarUsuerio(){
    return usuario.nombre &&  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test/(usuario.correo);
}

const usuarioValido = {nombre: "Ana", correo: "ana@gmail.com"}
const usuarioValido2 = {nombre: "Ana", correo: "ana@gmail.com"}
const usuarioValido3 = {nombre: "jmoreno", correo: "jmoreno@gmail.com"}

expect(usuarioValido).toEqual(usuarioValido2)