/*

let str="matalb is a world use by matlab people in india matlab it id very comman word matlab";
let arr=str.split(" ")
let map = new Map()
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i])+1)
    }
    else 
        map.set(arr[i], 1)
}
let count=0;
map.forEach((value, key)=>{
    if(map.get(key)>=count){
        count=map.get(key)
    }
})
console.log(count)
*/
let map = new Map(); // creating hashmap
map.set("chocolate", 10); // adding value 
map.set("chips", 5)
map.set("coldDrinks", 10)
console.log(map) // printing 
console.log(map.size)
console.log(map.get("chips"))
console.log(map.has("coldDrinks"))
map.delete("chips")
console.log(map)
console.log(map.size)// number of set value in map after delete dala will show at here 
console.log(map.get("coldDrinks"))
map.clear() //all set data will delete or clear
console.log(map)// print present data 



