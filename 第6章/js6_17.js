$(function(){
    let storage = sessionStorage;   //sessionStorage自体がオブジェクトなので、これは参照渡し
    $('#dish1').text(storage.getItem('dish1'));
    $('#dish2').text(storage.dish2)
    $('#dish3').text(storage['dish3']);

    $('#discard').click(function(){
        storage.clear();  //全てのデータを削除
        location.href="html6_16.html";
    })
});