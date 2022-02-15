const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone iTB camera flashlight phone',
    'Dell yrllow laptop with black camera',
    '1X59 lenovo  commercial yoga Laptop',
    'LG supernova laptop ',
    'HTC low price phone',
    'Dell purple color phone with phone'
];
const searching = 'Dell';

// indexof
const output = [];
for (const product of products) {
    if (product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output)
for (const product of products) {
    if (product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
        // output.push(product);
    }
}
console.log(output)

for (const product of products) {
    if (product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())) {
        output.push(product)
    }
}
console.log(output)