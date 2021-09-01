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
console.log(" - Cantidad: ", product.count + "€");
console.log(" - Precio/unidad: ", product.price + "€");
console.log(" - Tipo: ", product.type);
// Ajuste a valores positivos. El enunciado dice solo "cantidad" pero entiendo que un precio negativo tampoco sería lógico
product.count = product.count > 0 ? product.count : 0;
product.price = product.price > 0 ? product.price : 0;
// Cálculo del total
let VAT;
const total = product.count * product.price;
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
console.log(" - Total sin IVA: ", total + "€");
console.log(" - IVA: ", VAT + "€");
console.log(" - Total final: ", total + VAT + "€");

// Ejercicio 2: Calculo de precio total -----------------------------------------------
console.log("\nEjercicio 2: Cálculo de precio total");
console.log("------------------------------------");
// Estructura de trabajo
const productFunc = {
    count: 3,
    price: 12.55,
    type: "ropa"
};
// Se muestran los valores del producto con el que se va a trabajar
console.log("Datos del producto: ");
console.log(" - Cantidad: ", productFunc.count + "€");
console.log(" - Precio/unidad: ", productFunc.price + "€");
console.log(" - Tipo: ", productFunc.type);
// Cálculo del total usando funciones
const totalFunc = getTotal(productFunc);
const VATFunc = getVat(productFunc) * (productFunc.count > 0 ? productFunc.count : 0);
// Se muestran los resultados del cálculo
console.log("Resultados del cálculo: ");
console.log(" - Total sin IVA: ", totalFunc + "€");
console.log(" - IVA: ", VATFunc + "€");
console.log(" - Total final: ", totalFunc + VATFunc + "€");

// Ejercicio 2-2 avanzado -----------------------------------------------
console.log("\nEjercicio 2-2 avanzado");
console.log("------------------------");
// Estructura de trabajo
const productFunc2 = {
    count: 3,
    price: 12.55,
    type: "ropa"
};
// Se muestran los valores del producto con el que se va a trabajar
console.log("Datos del producto: ");
console.log(" - Cantidad: ", productFunc2.count + "€");
console.log(" - Precio/unidad: ", productFunc2.price + "€");
console.log(" - Tipo: ", productFunc2.type);
// Se muestra el resultado llamando a una única función
printProductPrice(productFunc2);

// Ejercicio: Calcular sueldo neto en nómina -----------------------------------------------
console.log("\nEjercicio: Calcular sueldo neto en nómina");
console.log("-------------------------------------------");
// Estructura de trabajo
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
};
// Se muestran los valores del empleado con el que se va a trabajar
console.log("Datos del empleado: ");
console.log(" - Bruto: ", empleado.bruto + "€");
console.log(" - Hijos: ", empleado.hijos);
console.log(" - Pagas: ", empleado.pagas);
// Se muestra el resultado llamando a una única función
printEmpleadoNeto(empleado);

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
// Funciones para el ejercicio 2-2 avanzado
function getTotalVat(productData) {
    return productData.count > 0 ?  productData.count * getVat(productData) : 0;
}
function printProductPrice (productData) {
    const subtotal = getTotal(productData);
    const vat = getTotalVat(productData);
    const total = subtotal + vat;
    // Se muestran los resultados del cálculo
    console.log("Resultados del cálculo: ");
    console.log(" - Total sin IVA: ", subtotal + "€");
    console.log(" - Total IVA: ", vat + "€");
    console.log(" - Total final: ", total + "€");
}
// Funciones para el ejercicio del calculo de sueldo neto
function getRetencion(empleadoData) {
    // Ajuste a valores positivos
    empleadoData.bruto = empleadoData.bruto > 0 ? empleadoData.bruto : 0;
    let porcentaje;
    switch (true) {
        case (empleadoData.bruto < 12000):
            porcentaje = 0;
            break;
        case (empleadoData.bruto < 24000):
            porcentaje = 8;
            break;
        case (empleadoData.bruto < 34000):
            porcentaje = 16;
            break;
        default:
            porcentaje = 30;
            break;
    }
    if (empleadoData.hijos > 0 && porcentaje >= 2) {
        porcentaje -= 2;
    }
    return porcentaje;
}
function printEmpleadoNeto (empleadoData) {
    const retencion = getRetencion(empleadoData);
    const netoTotal = empleadoData.bruto * (100 - retencion) / 100;
    const netoMes = empleadoData.pagas > 0 ? netoTotal / empleadoData.pagas : 0;
    // Se muestran los resultados del cálculo
    console.log("Resultados del cálculo: ");
    console.log(" - Retención: ", retencion + "%");
    console.log(" - Neto anual: ", netoTotal + "€");
    console.log(" - Neto mensual: ", netoMes + "€");
}