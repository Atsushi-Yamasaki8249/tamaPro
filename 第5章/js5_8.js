let a = 4;
let b = 6;

let sum = plus(a,b);
let factorial4 = factorial(4);

console.log(sum);
console.log(factorial4);

/*2つの引数の和を返す関数*/
function plus(v1,v2){
    return v1+v2;
}

/*与えられた数の階乗を返す関数*/
function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}