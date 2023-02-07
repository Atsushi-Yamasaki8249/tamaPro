const price1 = 220;   //餃子の金額
const price2 = 280;   //焼売の金額
const price3 = 350;   //小籠包の金額

$(function(){
    /*ここにプログラムを記述*/
});



/*料理名のvalue値を日本語の商品名に変換する関数*/
function convertMenu(str){
    if(str == "gyoza"){
        return "餃子";
    }else if(str == "shumai"){
        return "焼売";
    }else if(str == "shorompo"){
        return "小籠包";
    }
}

/*料理名のvalue値を商品の値段に変換する関数*/
function convertPrice(str){
    if(str == "gyoza"){
        return price1;
    }else if(str == "shumai"){
        return price2;
    }else if(str == "shorompo"){
        return price3;
    }else{
        return 0;
    }
}