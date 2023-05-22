let a = [2,4,6,8,10];
console.log(a[0]);   //aの1個目の要素を表示

//2の倍数でも3の倍数でもない100以下の自然数を配列bに格納
let b = new Array();
for(let i = 1; i <= 100; i++){
    if(i%2 != 0 && i%3 != 0){
        b.push(i);
    }
}
console.log(b);

let c = 'Tamakomi';
console.log(c.slice(4));   //文字列cの5文字目以降を取得