for(let i = 0; i < 5; i++){   //javascriptでは初期条件のところで変数が定義できる　おそらく他の言語ではあまりできない
    console.log(i);    //iが0~4のとき、iの値を表示する
}

let j = 10;

while(j > 0){   //jが0より大きい間
    console.log(j);   //jの値を表示して
    j -= 2;      //jの値を2減らす
}

//ユークリッドの互除法
let a = 28;
let b = 16;
if(a < b){   //aの方がbより大きい状態を作り出す
    let kari = b;
    b = a;
    a = kari;
}
let c = a;
let d = b;

for(;;){   //無限ループ
    c = c%d;   //cをdで割った余りをcに代入
    if(c == 0){
        console.log("最大公約数は"+d+"です");   //このように文字列と変数を組み合わせた出力も可能
        break;   //無限ループの脱出
    }

    d = d%c;
    if(d == 0){
        console.log("最大公約数は"+c+"です");
        break;
    }
}