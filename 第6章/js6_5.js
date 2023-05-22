let list = document.getElementsByTagName('td');

for(let i=0; i < list.length; i++){
    list[i].onmouseenter = function(){
        list[i].textContent = "わお！";
    }
}