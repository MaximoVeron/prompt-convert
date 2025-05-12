let menu=true;
const valorUSD=1300;
let ars,usd;
let result;
let history = [];
while (menu==true ){
    let eleccion=prompt("Menu\n1)Pesos a dolares\n2)Dolares a pesos\n3)Salir");
    if (eleccion.toLowerCase()=="3") {
        menu=false;
        break;
    }
    if (eleccion.toLowerCase()=="1") {
        //proceso de conversion 
        ars=parseFloat(prompt("ingrese la cantidad en pesos que desea convertir:"));
        result=ars/valorUSD
        alert (`El resultado de la conversion es ${result.toFixed(2)}`);
        //guardar en el historial
        history.push({
            tipo: 'divisa',
            entrada: `${ars} ARS`,
            salida: `${result.toFixed(2)} USD`,
            fecha: new Date().toLocaleString()
        });
    } else if (eleccion.toLowerCase()=="2") {
        usd=parseFloat(prompt("ingrese la cantidad en dolares que desea convertir:"));
        result=usd*valorUSD
        alert (`El resultado de la conversion es ${result.toFixed(2)}`);
        //guardar en el historial
        history.push({
            tipo: 'divisa',
            entrada: `${ars} ARS`,
            salida: `${result.toFixed(2)} USD`,
            fecha: new Date().toLocaleString()
        });
    }
}
console.log("Historial de conversiones:");
console.table(history);
