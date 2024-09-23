function menu() {
    let option;

    do {
        option = parseInt(prompt('Por favor seleccione una opcion:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n0. Salir'));
        if (option<=4 && option>0) {
            let num1 = parseInt(prompt('Ingrese un numero'));
            let num2 = parseInt(prompt('Ingrese otro numero'));
            
            if (isNaN(num1) || isNaN(num2)) {
                alert("Por favor escriba solo numeros.");
            } else if (option==4 && num2==0) {
                alert("Error. No se puede dividir por 0. Intente nuevamente.")
            } else {
                alert(`El resultado es: ${calcular(num1, num2, option)}`);
            }
        } else if (option==0) {
            alert("Gracias. Vuelva pronto.")
        } else {
            alert("La opcion ingresada es erronea.");
        }
    } while (option!=0);
}

function calcular(dato1, dato2, option) {
    let resultado = 0;
    switch (option) {
        case 1:
            resultado = dato1 + dato2;
            break;
        case 2:
            resultado = dato1 - dato2;
            break;
        case 3:
            resultado = dato1 * dato2;
            break;
        case 4:
            resultado = dato1 / dato2;
            break;
        default:
            alert("Error. No se puede realizar la operacion")
            break;
    }
    return resultado
}

menu();