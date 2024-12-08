
function doMerge(str1,str2){
    let res="";
    let m= Math.min(str1.length,str2.length);
    for(let i=0;i<m;i++){
        res+=str1[i];
        res+=str2[i];
    }
    
       if(m<str1.length){
        res+=str1.slice(m);
       }else if(m<str2.length){
        res+=str2.slice(m);
       }
    
    return res;
}

console.log(doMerge("man123456","man123"));
