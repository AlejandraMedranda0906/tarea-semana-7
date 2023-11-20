//Desarrollar una función que realice la multiplicación utilizando únicamente sumas. 
//La función recibe como parámetros el multiplicador y el multiplicando,
// utiliza un bucle para realizar sumas sucesivas y devolver el resultado.

function multiplicarConSuma(multiplicador, multiplicando){

    let suma=0

    for ( let i = 0; i <multiplicador; i++) {
        suma =  suma+multiplicando;
    }
    return suma
}
  
let multiplicador =Number(prompt("ingresa tu valor"));
let multiplicando =Number(prompt("ingrese su valor"));
 let result = multiplicarConSuma(multiplicador, multiplicando);
 alert(result);  