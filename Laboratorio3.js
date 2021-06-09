const product = {
    count: 3,
    price: 12.55,
    type: "ropa"
};

let total = 0;
let VAT = 0;
if (product.count > 0) {
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
}
console.log("Total sin VAT: ", total);
console.log("VAT: ", VAT);
console.log("Total final: ", total + VAT);

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