function calcularFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    // Recursividad
    return num * calcularFactorial(num - 1); 
}

function solicitarNumero() {
    let numeroUsuario = prompt("Introduce un número entero positivo para calcular su factorial:");

    if (numeroUsuario === null || numeroUsuario.trim() === "" || isNaN(numeroUsuario)) {
        alert("Entrada no válida. Debes ingresar un número entero positivo.");
        return solicitarNumero();
    }

    let numero = parseInt(numeroUsuario);

    if (numero < 0 || !Number.isInteger(numero)) {
        alert("Debes introducir un número entero positivo."); // Mensaje de error
        return solicitarNumero(); // Reintenta si el número no cumple la condición
    }

    // Càlculo del factorial
    let resultado = calcularFactorial(numero);
    document.getElementById("resultado").innerHTML = `El factorial de ${numero} es ${resultado}.`; 
}

document.addEventListener("DOMContentLoaded", () => {
    solicitarNumero(); 
});
