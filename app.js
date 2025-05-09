alert ('seleccione unicamente una opcion numerica, es decir,1 o 2');
let seleccion=parseInt(prompt('Opcion 1: Dolar a pesos/Opcion 2:Pesos a dolar'));
let usd,ars;
alert ('La cotizacion actual del dolar es de 1200 pesos argentinos');
if (seleccion==1) {
    usd=parseFloat(prompt('Ingrese cantidad de dolares:'));
    ars=usd*1200;
    alert (`Eso equivale a ${ars}$ pesos argentinos`);
    console.log (usd*1200);
} else if (seleccion==2) {
    ars=parseFloat(prompt('Ingrese cantidad de pesos:'));
    usd=ars/1200;
    console.log (ars/1200);
}