

/*
// it-bari (Ternary Operator)
var age = 15;
// age >= 18 ? console.log(" Yes, You can vote ."): console.log("No, You can not vote.") 

var mpAge = 50;
// mpAge >= 25 ? console.log("Yes, you can mp." ) :console.log("No, you can not mp.")

*/

// class 22-8

// const products = [
//     {name: 'laptop', price: 42000},
//     {name: 'shirt', price: 500},
//     {name: 'watch', price: 3600},
//     {name: 'phone', price: 55000}
// ];

// let totalPrice = 0;

// for(const product of products){
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);

const cart = [
    {name: 'laptop', price: 42000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 8},
    {name: 'watch', price: 3600, quantity: 3},
    {name: 'phone', price: 55000, quantity: 1}
];

let cartTotal = 0;
for(const product of cart){
    console.log(product);  
    const productTotal = product.price * product.quantity; 
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);


// (Alhamdulillah) ===== //