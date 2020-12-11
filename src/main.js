export default class App {

    sumatoriaSerieUno(numero) {
        let resultado; resultado = 0;
        let x = 1
        for (x; x<=5; x = x + 1) {
            resultado = resultado + (1/x);
        }
        resultado = resultado + (numero);
    return resultado;
    }

    












} // No borrar 

let app = new App();
