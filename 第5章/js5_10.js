class test{

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

let student1 = new test(82, 80, 133, 92, 75, 80, 64, 71);

console.log(student1.Jap);
student1.disp_Eng();