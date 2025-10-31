/*
let a =5;
let b=6;
console.log("Max: "+ Math.max(a,b)) // 6
console.log("Min: "+  Math.min(a,b)) // 5
console.log(Math.pow(2,4)); // 16
console.log(Math.PI)
console.log(Math.round(2.847))
console.log(Math.ceil(4.23)) // 5
console.log(Math.ceil(2.19)) // 3
console.log(Math.ceil(-4.23)) // -4
console.log(Math.floor(4.13)) // 4
console.log(Math.floor(-5.49))// -6
console.log(Math.trunc(5.15)) //5

*/

// rest op: ... (tripal dot) it will be applied to value
function add(...a){
    // console.log(a+b)
    console.log(a)
    // let sum=a.reduce((val,acc)=>val+acc,0)
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    console.log(sum)
}
add(2,3,4,9,5,9,11)