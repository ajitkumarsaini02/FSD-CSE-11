function sum(a, b){
    return a+b;
}
console.log("sum =", sum(20, 20));

const sum1 = (a=0, b=0) => a + b;

console.log("sum =", sum1(20));