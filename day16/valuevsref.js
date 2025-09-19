
/*let fridge=[1,2,3]
//example of ref type shallow copy
let refrigerator=fridge;
console.log(fridge)
console.log(refrigerator)
fridge.pop();
console.log('after removing value from froidge only')
console.log(fridge)
console.log(refrigerator)

//deep copy
let a =5;
let b=a;
a=a+5;
console.log(a)
console.log(b);
*/

// let's try with object 
/*
let fridge={
    coldDrink:"coca cola",
    juice:"Mango"
}
let refridgerator=fridge;
console.log(fridge)
console.log(refridgerator)
// let's update the key
fridge.juice="orange"
console.log("after updating the fridge")
console.log(fridge)
console.log(refridgerator)
// both are updated because both are pointing to same memory location
*/
/*
//deep copy type
let fridge=[1,2,3,4,5,6,[7,8,9]];
// ... it is a spread operator used to spread the values from ref type
let refridgerator=[...fridge]; // [1,2,3,4,5,6]
// update fridge 
fridge.pop()
console.log("after updating fridge")
console.log(fridge)
console.log(refridgerator)
*/
// another example of deep copy

/*
//deep copy type
let fridge=[1,2,3,4,5,6,[7,8,9]];
// ... it is a spread operator only gives deep copy when u dont have nested
let refridgerator=[...fridge]; // [1,2,3,4,5,6]
// update fridge 
fridge[1]=0;// will not impact as its value type
fridge[6][1]=90;// will impact as its reference type
console.log("after updating fridge")
console.log(fridge)
console.log(refridgerator);
*/

// JSON.parse and JSON.stringify
let arr=[1,2,3,4,[7,8,9]];
console.log(typeof arr) //it is object
let str=JSON.stringify(arr);// convert array to string
console.log(typeof str)// it is string
let newArr=JSON.parse(str);// convert string to array
console.log(typeof newArr)// it is object
// update arr
newArr[1]=0;// will only impact in deep copy as its value type
newArr[4][1]=90;// will only impact in deep copy as its reference type
console.log("after updating arr")
console.log(arr)
console.log(newArr)// but no change in string from update
