class Test{

    //コンストラクタ
    constructor(Eng_R, Eng_L, Jap, math1A, math2B, phy, che, geo){
        this.Eng_R = Eng_R;
        this.Eng_L = Eng_L;
        this.Jap = Jap;
        this.math1A = math1A;
        this.math2B = math2B;
        this.phy = phy;
        this.che = che;
        this.geo = geo;
    }

    //メソッド
    disp_Eng(){
        console.log("筆記："+this.Eng_R+"点、リスニング："+this.Eng_L+"点");
    }
}

let student1 = new Test(82, 80, 133, 92, 75, 80, 64, 71);
let student2 = new Test(82, 80, 133, 92, 75, 80, 64, 71);
let student3 = new Test(82, 80, 133, 92, 75, 80, 64, 71);

//値渡し
let a = student1.geo;   //student1.geoという「値」を変数aに格納
console.log(a);
a = 46;    //aに格納されている「値」を46に書き換え
console.log(student1.geo);     //student1.geoの値は変わらず

//参照渡し
let b = student2;   //変数bはstudent2.geoを「参照」する
console.log(student2.geo);
b.geo = 46;       //bが「参照」するインスタンスのgeoプロパティの値を46に書き換え
console.log(student2.geo);   //参照先のgeoプロパティは書き換えられている

//関数の引数にオブジェクトを与えると、参照渡しとなる
overwrite_geo(student3);     //参照渡しのため、student3のgeoプロパティは書き換えられている
console.log(student3.geo);   //student3.geoの値が変わっていることが分かる

/*引数のgeoプロパティを46に書き変える関数*/
function overwrite_geo(test){
    test.geo = 46;
}