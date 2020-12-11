export default class App {


    sumatoriaSerieUno(numero) {
        let resultado; resultado = 0;
        let x = 1;
        for (x; x<=numero; x = x + 1) {
            resultado = resultado + (1/x);
        }
    return resultado;
    }

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

    obtenerImpares(numero1, numero2) {
    let resultado = "";
    let mayor,menor;
    if (numero1 < numero2) {
        mayor = numero2; menor = numero1;
    } else {
        mayor = numero1; menor = numero2;
    }
    while (menor <= mayor) {
        if ((menor % 2)==0) {
            resultado = resultado;
        } else {
            resultado = (resultado + "," + menor);
        }
        menor++;
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