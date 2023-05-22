const c = 8;

/*マス目上の石の情報を格納する配列の生成
    -1:石が置かれてない
    0:黒（先攻）
    1:白（後攻）
    */
    let square_info = [-1, 1, 1, 1, 1, 1, 1, 0];

$(function(){
    let tr = $('<tr></tr>');
    for(let j=0; j < c; j++){
        let td = $('<td></td>');
        td.attr('id', 'sqa'+j);
        tr.append(td);
    }
    $('#board').append(tr);
    
    putStone();

    $('#sqa0').click(function(){
        /*演習問題36の回答はここに記入*/

    });
});

/*石を置く関数*/
function putStone(){
    for(let j = 0; j < c; j++){
        switch(square_info[j]){
            case -1:
                $('#sqa'+j).text('');
                break;
            case 0:
                $('#sqa'+j).text('●').attr('class', 'black');
                break;
            case 1:
                $('#sqa'+j).text('●').attr('class', 'white');
                break;
        }
    }
}