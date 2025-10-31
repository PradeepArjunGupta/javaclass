function findChildren(dancingBrigade) {
  dancingBrigade=dancingBrigade.split('').sort().join('')
  let map= new Map();
  for(let i=0;i<dancingBrigade.length;i++ ){
    let ascVal=dancingBrigade.charCodeAt(i)
   if(ascVal>=97&&ascVal<=122){
      let mother=String.fromCharCode(ascVal-32);
      let pC=map.get(mother)||"";
      map.set(mother,pC+dancingBrigade[i])
    }
  }
  let res=""
  for(let mother of map.keys()){
    res=res+mother+map.get(mother)
  }
  return res;
}
// codewar question
//doubt of day36
/*
function countZeroRowsAndColumns(arr1,arr2){
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
       arr1[i][j]=arr1[i][j]+arr2[i][j];
    }
  }
  let count=0;
  for(let i=0;i<arr1.length;i++){
    let sum=0;
    for(let j=0;j<arr1[i].length;j++){
       sum+=arr1[i][j];
    }
    if(sum==0){
      count++;
    }
  }
  for(let i=0;i<arr1[0].length;i++){
    let sum=0;
    for(let j=0;j<arr1.length;j++){
       sum+=arr1[j][i];
    }
    if(sum==0){
      count++;
    }
  }
  return count;
  
}
let arr1=[[1,3,-5],[2,-4,6]]
let arr2=[[-1,-3,5],[-2,-4,-6]]
console.log(countZeroRowsAndColumns(arr1,arr2))
*/