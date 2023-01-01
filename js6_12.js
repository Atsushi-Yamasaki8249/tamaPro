$(function(){
    //正解の場合のイベント
    $("#item1").click(function(){
        $("#result").text("正解!");
        $("#result").attr("class", "red");
    });

    //不正解の場合のイベント
    for(let i=2; i <= 4; i++){
        $('#item' + i).click(function(){
            $("#result").text("不正解!");
            $("#result").attr("class", "blue");
        })
    }
});