let a = 1;
let b = 2;
let c = 3;
let d = 4;

changeValue1(a, b);

console.log(a, b, c, d);   //1回目の出力

changeValue2(b, a);

console.log(a, b, c, d);   //2回目の出力

changeValue2(d, c);

console.log(a, b, c, d);   //3回目の出力

function changeValue1(a, b){
    let c = a;
    d = b;
}

function changeValue2(a, b){
    c = a;
    let d = b;
}