let arr = [1, 2, 3, 4];
let stack = [];
for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
}
let revsarr = [];
while(stack.length > 0) {
    revsarr.push(stack.pop());
}
console.log(revsarr);  

