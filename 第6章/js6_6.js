let list = document.getElementsByTagName('td');

for(let i=0; i < list.length; i++){
    list[i].addEventListener('mouseenter', function(){
        this.textContent = "わお！";
    }, false);
}