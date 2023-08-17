console.log("Ejercicio de Fecha");


function calcularLaboral() {
    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);
    const anio = parseInt(document.getElementById("anio").value);

    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        document.getElementById("resultado").textContent = "Ingresa valores válidos en las cajas de texto.";
        return;
    }

    let esLaboral = false;

    switch (mes) {
        case 1: 
        case 2: 
        case 4: 
        case 6: 
        case 9: 
        case 11: 
            if (dia >= 1 && dia <= 30) {
                esLaboral = true;
            }
            break;
        case 3: 
        case 5: 
        case 7: 
        case 8: 
        case 10: 
        case 12: 
            if (dia >= 1 && dia <= 31) {
                esLaboral = true;
            }
            break;
    }

    const resultado = esLaboral ? "Es un día laboral." : "No es un día laboral.";
    document.getElementById("resultado").textContent = resultado;
}