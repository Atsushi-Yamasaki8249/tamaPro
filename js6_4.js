let header = document.getElementById('header');

header.textContent = "商品の競り";

let want = document.getElementsByClassName('want');

for(let i = 0; i < want.length; i++){
    if(i == want.length-1){
        want[i].innerHTML = "<span style='color: red;'>欲しい！</span>";
    }else{
        want[i].textContent = "欲しい！"
    }
}