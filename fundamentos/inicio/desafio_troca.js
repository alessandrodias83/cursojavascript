let a = 7;
let b = 94;

let temp = a; // armazenou a de forma temporaria
a = b;
b = temp;

//[a, b] = [b, a]; esta é uma forma que pode ser usada tambem

console.log(a);
console.log(b);