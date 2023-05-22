/*マス目上の石の情報を格納する２次元配列の生成
-1:石が置かれてない
0:黒（先攻）
1:白（後攻）
*/
let square_info = [];
for(let i = 0; i < c; i++){
    //以下の4行で-1という要素8個を含む１次元配列arrを作成
    let arr = [];
    for(let j = 0; j < c; j++){
        arr.push(-1);
    }
    //作った配列をsquare_infoに入れ込む
    square_info.push(arr);
}

/*石の状態の初期化*/
square_info[3][3] = 1;
square_info[3][4] = 0;
square_info[4][3] = 0;
square_info[4][4] = 1;

/*演習問題33のコードは以下に記載*/








/*石を置く関数*/
function putStone(){
    for(let i = 0; i < c; i++){
        for(let j = 0; j < c; j++){
            switch(square_info[i][j]){
                case -1:
                    $('#sqa'+i+'_'+j).text('');
                    break;
                case 0:
                    $('#sqa'+i+'_'+j).text('●').attr('class', 'black');
                    break;
                case 1:
                    $('#sqa'+i+'_'+j).text('●').attr('class', 'white');
                    break;
            }
        }
    }
}