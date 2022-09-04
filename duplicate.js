const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

// function removeDuplicate(names){
//     const unique = [];
// //     for(let i = 0; i< names.length; i++){
// //         const element = names[i];
// //         // console.log(element);
// //     }
//     for(const element of names) {
       
//         if(unique.indexof(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique;
// }


// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
  const uniqueAges = ages.filter(unique)
  
  console.log(uniqueAges);



  const unique2 = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const names1 = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

  const unique2Names1 = names1.filter(unique2)
  
//   console.log(unique2Names1);


// ({[Alhadulillah]})




  const  names2 = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

const tfd1 =  names2 =>  names2.filter((item, index) => names2.indexOf(item) !== index)
const de = tfd1(names2);
console.log(de);


// ({[Alhadulillah]})

const arry = [1, 2, 1, 3, 4, 3, 5, 10, 15, 20, 25, 20, 10, ];

const tfd = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElementa = tfd(arry);
console.log(duplicateElementa);

// ({[Alhadulillah]})