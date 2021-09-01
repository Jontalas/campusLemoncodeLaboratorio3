// Ejercicio 1: Calculo IVA -----------------------------------------------
console.log("Ejercicio 1: Cálculo IVA");
console.log("------------------------");
// Estructura de trabajo
const product = {
    count: 3,
    price: 12.55,
    type: "ropa"
};
// Se muestran los valores del producto con el que se va a trabajar
console.log("Datos del producto: ");
console.log(" - Cantidad: ", product.count);
console.log(" - Precio/unidad: ", product.price);
console.log(" - Tipo: ", product.type);
// Ajuste a valores positivos. El enunciado dice solo "cantidad" pero entiendo que un precio negativo tampoco sería lógico
product.count = product.count > 0 ? product.count : 0;
product.price = product.price > 0 ? product.price : 0;
// Cálculo del total
let total = 0;
let VAT = 0;
total = product.count * product.price;
switch (product.type) {
    case "alimentacion":
        VAT = total * 0.1;
        break;
    case "libro":
        VAT = total * 0.04;
        break;
    default:
        VAT = total * 0.21;
        break;
}
// Se muestran los resultados del cálculo
console.log("Resultados del cálculo: ");
console.log(" - Total sin IVA: ", total);
console.log(" - IVA: ", VAT);
console.log(" - Total final: ", total + VAT);

// Ejercicio 2: Calculo de precio total -----------------------------------------------
console.log("\nEjercicio 2: Cálculo de precio total");
console.log("------------------------------------");
// Estructura de trabajo
const productFunc = {
    count: 3,
    price: 12.55,
    type: "alimentacion"
};
// Se muestran los valores del producto con el que se va a trabajar
console.log("Datos del producto: ");
console.log(" - Cantidad: ", productFunc.count);
console.log(" - Precio/unidad: ", productFunc.price);
console.log(" - Tipo: ", productFunc.type);
// Cálculo del total usando funciones
let totalFunc = getTotal(productFunc);
let VATFunc = getVat(productFunc) * (productFunc.count > 0 ? productFunc.count : 0);
// Se muestran los resultados del cálculo
console.log("Resultados del cálculo: ");
console.log(" - Total sin IVA: ", totalFunc);
console.log(" - IVA: ", VATFunc);
console.log(" - Total final: ", totalFunc + VATFunc);

// AQUI - seguir con 2-2 avanzado ----------------------------------------

const empleado = {
    bruto: 14000,
    hijos: 2,
    pagas: 14
};

let sueldo = 0;
let retencion = 0;
if (empleado.bruto > 0) {
    sueldo = empleado.bruto * empleado.pagas;
    let percent = 0
    switch (true) {
        case empleado.bruto > 34000:
            percent = 0.3;
            break;
        case empleado.bruto > 24000:
            percent = 0.16;
            break;
        case empleado.bruto > 12000:
            percent = 0.08;
            break;
        default:
            percent = 0;
            break;
    }
    if (empleado.hijos > 0 && percent > 0) percent = percent - 0.02
    retencion = sueldo * percent;
}
console.log("sueldo sin retencion: ", sueldo);
console.log("retencion: ", retencion);


// -------------------------------------------------------------------------

// Funciones para el ejercicio 2
function getTotal(productData) {
    // Ajuste a valores positivos
    productData.count = productData.count > 0 ? productData.count : 0;
    productData.price = productData.price > 0 ? productData.price : 0;
    return productData.count * productData.price
}
function getVat(productData) {
    // Ajuste a valores positivos
    productData.price = productData.price > 0 ? productData.price : 0;
    switch (productData.type) {
        case "alimentacion":
            return productData.price * 0.1;
            break;
        case "libro":
            return productData.price * 0.4;
            break;
        default:
            return productData.price * 0.21;
            break;
    }
}