// Currying

    const multiply = (a,b) =>  a * b
    const CurriedMultiply = (a) =>(b) => a*b;
    const Multiplyby5 = CurriedMultiply(5)




//Compose
// fucntion a dakhel g(a) ejra mishavad 
//g dar vaghe sum hast va sum = num + 1 
//pas 5 be num nesbat dade mishe 

const compose = (f,g) =>  (a) => f(g(a));
const sum = (num) => num + 1 ;
compose (sum,sum)(5);


