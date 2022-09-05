// class 22-3
const greeting = 'Hellow how are you ?';

function reverseString (text) {
    let reverse = '';
    for(const letter of text){
        console.log(letter);
        reverse = letter + reverse;
    }
}
const reversed = reverseString(greeting);
console.log(reversed);