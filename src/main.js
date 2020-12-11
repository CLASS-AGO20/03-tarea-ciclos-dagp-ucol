// Fundamentos de Prograación
// Alumno: Diego Alejandro Gentner Polanco
// 1er Semestre Grupo "H"


export default class App {


    // Determina la sumatoria con ciertas propiedades expuestas del maestro
    sumatoriaSerieUno(numero) {
        let resultado; resultado = 0;
        let x = 1;
        for (x; x<=numero; x = x + 1) {
            resultado = resultado + (1/x);
        }
    return resultado;
    }


    // Determina la sumatoria con ciertas propiedades expuestas del maestro incluyendo sumas y restas
    sumatoriaSerieDos(numero) {
        let resultado; resultado = 0;
        let x = 1;
        while (x<=numero) {
             if ((x % 2)==0) {
                resultado = resultado + (1/x)
             } else {
                 resultado = resultado - (1/x)
             }
            x++;
        }
    resultado = resultado + 2;
    return resultado;
    }


    // Determina si el numero es primo
    esPrimo(numero) {
        let resultado = 0;
        let x;
        x = numero;
        do {
            if ((numero % x)==0) {
                resultado = resultado + 1;
            } else {
                resultado = resultado;
            }
            x = x - 1;
        } while (x>1);
        if (resultado > 2) {
            resultado = false;
        } else {
            resultado = true; }
    return resultado;
    }


    // Se obtienen los múltiplos de 3 en determinado rango
    obtenerMultiplos(inicio, fin) {
        let resultado = "";
        let x = inicio;
        do {
            if ((x % 3)==0) {
                resultado = resultado + x;
            } else {
                resultado = resultado;
            }
            x++;
        } while (x<fin);
    return resultado;
    }


    // Se obtienen los numeros imapres y se suman en un string con ","
    obtenerImpares(numero1, numero2) {
    let resultado = "";
    let mayor,menor,mayorv2;
    if (numero1 < numero2) {
        mayor = numero2; menor = numero1;
    } else {
        mayor = numero1; menor = numero2;
    }
    mayorv2 = mayor;
    while (menor <= mayor) {
        if ((menor % 2)==0) {
            resultado = resultado;
        } else {
            resultado = (resultado + "," + mayorv2);
        }
        menor++;
        mayorv2 = mayorv2 - 1;
    }
    resultado = resultado.substr(1,resultado.length);
    return resultado;
    }


} // No borrar Fin de App

let app = new App();
console.log(app.sumatoriaSerieUno(5));
console.log(app.sumatoriaSerieDos(5));
console.log(app.esPrimo(16546487));
console.log(app.obtenerMultiplos(10,25));
console.log(app.obtenerImpares(5,10));