/*

let word="AHello"
//string.charCodeAt(index) is method which gives u ASCII value of character
// console.log(word.charCodeAt(0))
for(let i=0;i<word.length;i++){
    console.log(word.charCodeAt(i))
}
// convert from number to character 
console.log(String.fromCharCode(99))
*/

var maxSequence = function(arr,target)
{
    let left=0;
    let sum=0;
    let maxWin=0;
    for(let right=0;right<arr.length;right++)
    {
        sum+= arr[right];
        while(sum>target){
            sum-=arr[left];
            left++;
        }
        if(sum==target){
            let newWindow=right-left+1;
            maxWin= Math.max(maxWin,maxSequence);
        }
       
    }
    console.log(maxWin);
}
let arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4];
let target=6;
maxSequence(arr,target)