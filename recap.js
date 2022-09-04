

function largestElement(number){
    let max = number[0];
    for(let i = 0; i< number.length; i++){
        const element = number[i];
        if(element > max){
            max = element;
        }
    }
}

function smallestElement(number){
    let min = number[0];
    for(let i = 0; i< number.length; i++){
        const element = number[i];
        if(element < min){
            min = element;
        }
    }
}