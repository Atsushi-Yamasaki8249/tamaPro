let a = [1,4,6,3,2];

/*新たな変数を用意する場合*/
let b = [];

for(let i = 0; i < 5; i++){
    b.push(a[i]+10);
}

console.log(b);

/*aの要素を書き換える場合*/
for(let i= 0; i < a.length; i++){  //a.lengthを使用した方がサイズ変更にも柔軟に対応できるのでベター
    a[i] = a[i] + 10;
}

console.log(a);