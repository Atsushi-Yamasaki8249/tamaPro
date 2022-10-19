console.log(arrange4(2, 2, 1, 1));

/*与えられた数の階乗を返す関数*/
function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}

/*arrange4関数はこの下に書いてください*/
