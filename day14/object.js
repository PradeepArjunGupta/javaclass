let mobile={
    name:"iphone",
    price:50000,
    model : "S23"
}
// console.log(mobile.name)
// console.log(mobile.price)
// what if i want to access all the keys 
// for in loop
for ( let my in mobile){
    console.log(my +" : " +mobile[my]) // mobile."name"
}