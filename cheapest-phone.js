const phones =[
    {name: 'samsung s5', price: 40000, camera: 10, storage: 64},
    { name: 'realmi c25', price: 45000, camera: 10, storage: 128},
    {name: 'oppo A50', price: 5000, camera: 18, storage: 32},
    {name: 'htc h81', price: 45100 , camera: 10, storage: 3}
];

let cheapeast = phones[0];
for(const phone of phones){
    // compare price only
    if(phone.price < cheapeast.price){
        cheapeast = phone;
    }
   
} 
console.log(cheapeast);

// Alhadulillah