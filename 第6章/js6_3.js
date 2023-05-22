let str = location.search;  //クエリパラメータの取得
console.log(str);
str = str.slice(1);  //1文字目は?なので、いらない。そのためカット
console.log(str);
let strArr = str.split('&');   //&でクエリパラメータを分割
console.log(strArr[0], strArr[1]);
let name1 = strArr[0].split('=')[1];   //=で文字列を分割 後半だけ取れば入力した名前
let name2 = strArr[1].split('=')[1];   //同様
console.log("1人目の名前は"+name1+"で、2人目の名前は"+name2+"です。");