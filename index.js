// el map es un array method que nos permite iterar sobre un arreglo y aplicar una función en cada iteracción

// caso de uso: tenemos un array de precios y queremos obtener un nuevo array con el precio mas iva de cada producto



const precios = [10,50,60,90,10]

const IVA = 0.16

function getPrecioMasIva(){

const preciosMasIva = precios.map((precio)=>precio*IVA)

return preciosMasIva

}

console.log.getPreciosMasIva()
