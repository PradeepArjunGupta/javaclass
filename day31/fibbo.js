function fibo(a,b,range){
    if(range<=0){
        return;
    }
    console.log(a)
    let c=a+b;
    a=b;
    b=c;
    range--;
    fibo(a,b,range)
}
fibo(0,1,6)