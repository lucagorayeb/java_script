const products = [
    {"name" : "Basebol Bat", "price" : 50.00, "stock" : 0},
    {"name" : "Glasses", "price" : 20.00, "stock" : 2},
    {"name" : "Ball", "price" : 10.00, "stock" : 3},
];

for (const product of products) {
    console.log(product);
}

for (const product of products) {
    console.log(product["name"]);
}

for (const product of products){
    if(product.stock > 0){
        console.log(product);
    }   
}

for (const product of products){
    if(product.stock > 0){
        inventory_value = product.price * product.stock;
        console.log(product.name + " " +  "invetory value: " + inventory_value);
    }   
}



