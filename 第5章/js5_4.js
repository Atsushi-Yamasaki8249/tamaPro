let a = 1;
let b = 2;

if(a == b){   //同じ場合　=と記入してはいけない！
    console.log("aとbは同じです");
}else{   //ここまでで述べた条件に当てはまらなかった場合の処理としてelseを用いる
    console.log("aとbは異なります");
}

if(a > b){   //aがbより大きい場合
    console.log("aはbより大きいです");
}

if(a <= b){  //aがb以下の場合
    console.log("aはb以下です");
}

if(a != 0){  //aが0でない場合
    console.log("aは0ではありません");
}

if(b < -2 || b > 2){   //or
    console.log("bの絶対値は2より大きいです");
}

if(b >= -2 && b <= 2){   //and
    console.log("bの絶対値は2以下です");
}