$(function(){
    let random = Math.random();
    console.log(random);
    if(random >= 0.5){
        let elem = $("<p></p>")
        elem.text("50%の確率でこのテキストが表示されます");
        $("#contents").append(elem);
    }
});