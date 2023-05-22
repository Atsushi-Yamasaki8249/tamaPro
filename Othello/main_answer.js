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
let first = true;   //先攻か後攻か　先攻:true 後攻:false

$(function(){
    for(let i = 0; i < c; i++){
        for(let j = 0; j < c; j++){
            $('#sqa'+i+'_'+j).click(function(){   //各マス目に対し、イベントリスナーを設置
                putAndTurn(i, j);
            });
        }
    }
});

/*当該要素に対して、石を置く動作・石をひっくり返す動作をする関数*/
function putAndTurn(i, j){
    if(square_info[i][j] == -1){   //当該要素に石が置かれてなければ以下の操作を実行
        let num_mine;
        let num_yours;
        if(first){
            num_mine = 0;   //黒
            num_yours = 1;  //白
        }else{
            num_mine = 1;   //白
            num_yours = 0;  //黒
        }
        let bool1 = search(i, j, 1, 0, num_mine, num_yours);   //下方向捜索
        let bool2 = search(i, j, 0, 1, num_mine, num_yours);   //右方向捜索
        let bool3 = search(i, j, -1, 0, num_mine, num_yours);  //上方向捜索
        let bool4 = search(i, j, 0, -1, num_mine, num_yours);  //左方向捜索
        let bool5 = search(i, j, 1, 1, num_mine, num_yours);   //右下方向捜索
        let bool6 = search(i, j, 1, -1, num_mine, num_yours);  //左下方向捜索
        let bool7 = search(i, j, -1, -1, num_mine, num_yours); //左上方向捜索
        let bool8 = search(i, j, -1, 1, num_mine, num_yours);  //右上方向捜索
        if(bool1||bool2||bool3||bool4||bool5||bool6||bool7||bool8){   //１つでも石をひっくり返せる方向があったなら
            putStone();   //石の情報をボードに反映
            first = !first;   //攻守交代
        }
    }
}

/*inc_y, inc_xの方向に捜索し、石がひっくり返せるならsquare_infoを更新しtrueを返す/ひっくり返せないならfalseを返す関数*/
function search(i, j, inc_y, inc_x, num_mine, num_yours){
    let ret = false;   //返り値はデフォルトでfalse
    let count_x = i+inc_y;   //捜索方向隣のマス目の行指標
    let count_y = j+inc_x;   //捜索方向隣のマス目の列指標
    if(count_x >= 0 && count_y >= 0 && count_x < c && count_y < c){   //捜索方向隣のマス目がボードからはみ出してなければ
        if(square_info[count_x][count_y] == num_yours){   //捜索方向隣のマス目が相手の石であれば
            count_x += inc_y;   //さらに隣のマス目の行指標
            count_y += inc_x;   //さらに隣のマス目の列指標
            while(count_x >= 0 && count_y >= 0 && count_x < c && count_y < c){   //注目するマス目がボードからはみ出さない限りループ
                if(square_info[count_x][count_y] == num_mine){   //もし捜索方向に自分の石が見つかれば
                    for(;;){
                        count_x -= inc_y;   //行指標を再び変更し、石を置くマス目に戻ろうとする
                        count_y -= inc_x;   //列指標を再び変更し、石を置くマス目に戻ろうとする
                        square_info[count_x][count_y] = num_mine;   //中間にある相手の石を自分の石にする/選んだマス目に自分の石を置く
                        if(count_x == i && count_y == j){   //元のマス目まで戻れたら
                            ret = true;   //石を置いてひっくり返すことができたのでtrue
                            break;  //for文無限ループを抜ける　※1回のbreakで抜けられるループは１個のみ
                        }
                    }
                    break;   //whileのループを抜ける
                }
                count_x += inc_y;   //さらに隣のマス目の行指標を取得し、自分の石を探す
                count_y += inc_x;   //さらに隣のマス目の列指標を取得し、自分の石を探す
            }
        }
    }
    return ret;
}

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