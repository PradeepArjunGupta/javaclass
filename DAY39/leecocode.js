let obj={}
    let obj2={")":"(",
              "}":"{",
              "]":"["}
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==undefined && obj2[s[i]]==undefined){
            obj[s[i]]=1
        }
        else if(obj[s[i]]!=undefined && obj2[s[i]]==undefined){
            obj[s[i]]++
        }
        else if(obj[s[i]]==undefined && obj2[s[i]]!=undefined){
            obj[obj2[s[i]]]--
        }
    }
    console.log(obj)
    let st=true
    for(key in obj){
        if(obj[key]!=0){
            st=false
            break
        }
    }
    return st