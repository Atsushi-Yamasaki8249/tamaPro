$(function(){
    count = 0;   //カウント数
    /*1秒ごとに繰り返し行われる処理を定義*/
    let func1 = setInterval(function(){
        count++;
        $('#count').text(count);
    }, 1000);

    /*10秒後に1度きり行われる処理を定義*/
    let func2 = setTimeout(tenSecondsPassed, 10000);

    /*ボタンを押すことで、繰り返し処理を取り消す*/
    $('#stop').click(function(){
        clearInterval(func1);
    })
});

/*10秒経過後、コンソールに文を表示する関数*/
function tenSecondsPassed(){
    console.log("10 seconds passed!");
}