function bubble(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]){
                 let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            }
               
        }
    }
}
let arr = [1, 2, 3, 4, 5];
console.log(`Before sorting; ${arr}`);
bubble(arr);
console.log(`After sorting: ${arr}`);