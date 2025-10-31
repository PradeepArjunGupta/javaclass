/*
let arr=[1,2,3,4,5,6,7,8,9,10]; // size of array will be 1<=size<=n. , n=2^31+1
// two pointer
let start=0;
let end=arr.length-1;
while(start<end){
   let temp=arr[start];
   arr[start]=arr[end];
   arr[end]=temp;
   start++;
   end--;
}
console.log(arr)
*/


// brute force
/*
let arr=[1,2,3,4,5,6,7,8,9,10];
let res=[]
for(let end=arr.length-1;end>=0;end--){
   res.push(arr[end])
}
console.log(res)
*/


/*
let str="Hello"
str=str.split("")
let start=0;
let end=str.length-1;
while(start<end){
   let temp=str[start];
   str[start]=str[end];
   str[end]=temp;
   start++;
   end--;
}
console.log(str.join(""))
*/

let str = "makam";
let arr = str.split("");
let start = 0;
let end = arr.length - 1;
let Palindrome = true;
while (start < end) {
    if (arr[start] !== arr[end]) {
        Palindrome = false;
        break; // no need to check further
    }
    start++;
    end--;
}
if (Palindrome) {
    console.log("Yes, it's a palindrome");
} else {
    console.log("No, it's not a palindrome");
}
 

/*
let str = "madan";
let arr = str.split("");
let start = 0;
let end = arr.length - 1;
if (str == arr.join(""))// always it will show palindrome as string text matching only
    console.log("palindrom")
else
    console.log("Not palindrom")
*/