$(function(){
    let storage = sessionStorage;   //sessionStorage自体がオブジェクトなので、これは参照渡し
    $('#dish1').text(storage.getItem('dish1'));
    $('#dish2').text(storage.dish2)
    $('#dish3').text(storage['dish3']);

    $('#submit').click(function(){
        storage.setItem('dish1', $('#select1').val());
        storage.dish2 = $('#select2').val();
        storage['dish3'] = $('#select3').val();
        location.href = "html6_17.html";
    })
});