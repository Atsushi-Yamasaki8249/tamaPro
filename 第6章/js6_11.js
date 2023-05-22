class Store{
    constructor(name, time, parkings){
        this.name = name;
        this.time = time;
        this.parkings = parkings;
    }
}

let stores = [];
stores.push(new Store("池田店", "11:00~22:00", "8台"));
stores.push(new Store("豊中店", "11:00~22:00", "なし"));
stores.push(new Store("箕面店", "11:00~21:30", "15台"));
stores.push(new Store("茨木店", "11:00~23:00", "16台"));
stores.push(new Store("伊丹店", "11:00~22:00", "24台"));
stores.push(new Store("川西店", "11:00~23:00", "20台"));
stores.push(new Store("宝塚店", "11:00~21:30", "なし"));
stores.push(new Store("猪名川店", "11:00~22:00", "12台"));

$(function(){
    //下記は、table要素をidがcontentsの要素の子要素として追加し、table要素のid属性として"table"をつける
    $("<table></table>").appendTo($("#contents")).attr("id", "table");
    //下記は、table要素をidがcontentsの要素の子要素として追加し、idがcontentsの要素のid属性として"table"をつける
    //$("#contents").append("<table></table>").attr("id", "table");
    let tr = $("<tr></tr>");
    tr.append("<th>店舗名</th>")
    tr.append("<th>営業時間</th>")
    tr.append("<th>駐車場</th>")
    $("#table").append(tr);
    for(let i=0; i < stores.length; i++){
        let tr =$("<tr></tr>");
        tr.append("<td>"+stores[i].name+"</td>");
        tr.append("<td>"+stores[i].time+"</td>");
        tr.append("<td>"+stores[i].parkings+"</td>");
        $("#table").append(tr);
    }
});