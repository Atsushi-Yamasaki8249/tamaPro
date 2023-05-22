const c = 8;
$(function(){
    for(let i=0; i < c; i++){
        let tr = $('<tr></tr>');
        for(let j=0; j < c; j++){
            let td = $('<td></td>');
            td.attr('id', 'sqa'+i+'_'+j);
            tr.append(td);
        }
        $('#board').append(tr);
    }
});