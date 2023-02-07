$(function(){
    $('#submit').click(function(){
        let arr=[];
        for(let i=1; i<=3; i++){
            if($('#items'+i).val()){
                arr.push($('#items'+i).val());
            }
        }

        $('#result').text(arr);
    });
});