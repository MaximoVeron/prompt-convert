
const history = [];


function convertCurrency(pesos) {
    const tasaCambio = 1200; 
    return pesos / tasaCambio;
}

function solicitarOpcion() {
    let opcion;
    do {
        opcion = prompt("Menú principal:\n1) Divisa (ARS -> USD)\n2) Salir");
    } while (opcion !== "1" && opcion !== "2");
    return opcion;
}

function iniciarConversor() {
    let opcion;

    do {
        opcion = solicitarOpcion();

        if (opcion === "1") {
            let entradaPesos = parseFloat(prompt("Ingrese la cantidad de pesos argentinos (ARS):"));

            while (isNaN(entradaPesos) || entradaPesos <= 0) {
                entradaPesos = parseFloat(prompt("Valor no válido. Ingrese un número positivo en ARS:"));
            }

            const resultadoUSD = convertCurrency(entradaPesos);
            alert(`${entradaPesos} ARS equivale a ${resultadoUSD.toFixed(2)} USD`);

            history.push({
                tipo: 'divisa',
                entrada: `${entradaPesos} ARS`,
                salida: `${resultadoUSD.toFixed(2)} USD`,
                fecha: new Date().toLocaleString()
            });

        }

    } while (opcion !== "2");

    console.log("Historial de conversiones:");
    history.forEach((op, index) => {
        console.log(`${index + 1}) [${op.fecha}] ${op.entrada} => ${op.salida}`);
    });
}

iniciarConversor();
