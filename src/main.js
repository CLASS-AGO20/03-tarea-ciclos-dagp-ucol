export default class App {

    sumatoriaSerieUnoBETA(numero) {
        let resultado; resultado = 0;
        let x = 1;
        for (x; x<=5; x = x + 1) {
            resultado = resultado + (1/x);
            if (x==5) {
                resultado = resultado + (1/numero);  
            }
        }
    return resultado;
    }

    
    sumatoriaSerieDosBETA(numero) {
    let resultado = 0;
    let x = 1;
    while (x<=5) {
    if ((x % 2)!=0) {
        if (x==1) {
            resultado = resultado + 1;
        } else {
            
        }   resultado - resultado - (1/x)
    } else {
        resultado - resultado + (1/x)
    }
        if (x==5) {
            resultado = resultado + (1/numero);
        }
        x++;
    }
    resultado = resultado + 0.10
    return resultado;
    }

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
            x = x + 1;
        }
    resultado = resultado + 2;
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
            x = x + 1;
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



} // No borrar 

let app = new App();
console.log(app.sumatoriaSerieUno(5))