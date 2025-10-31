
/*
function points(games) {

    let arr = games;

    let x, y;

    let result = 0;

    for (let i = 0; i < 10; i++) {

        x = games[i][0];

        y = games[i][2];

        if (x > y) {

            result += 3;

        }

        else if (x < y) {

            result += 0;

        }

        else if (x = y) {

            result += 1;

        }

    }

    return result;
};

*/
function points(games) {
  let points=0;
  for(let i=0;i<games.length;i++){
     let str=games[i];
     let x= str[0]-'0';
     let y=str[2]-'0';
    if(x>y){
      points+=3;
    }
    if(x===y){
      points+=1;
    }
  }
  return points;
}

/*
let str=""
  for(let i=0;i<s1.length;i++){
    if(s1[i]==s2[i]){
      str=str+s1[i]
    }
    else if(s1[i]!=s2[i]){
      str=str+"0"
    }
  }
  return str;
  */
 