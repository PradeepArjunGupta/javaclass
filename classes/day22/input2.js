/*
const prompt= require("prompt-sync")();
let n= parseInt(prompt("Enter the size of the array: "));
// find the number of even values in array
let arr=[];
for(let i=0;i<n;i++){
    let num=parseInt(prompt("Enter the value : "));
    arr.push(num);
}
let even=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even++;
    }
}
console.log("Number of even values are : "+even);

*/
// practice1

const prompt= require("prompt-sync")();
const n= parseInt(prompt("Enter the size of the array: "));
let arr=[];
if(isNaN(n)){
    console.log("invalid input")
}else{
    for(let i=0;i<n;i++){
        let num=parseInt(prompt("Enter the value: "));
        arr.push(num)
    }
    console.log(arr)
}