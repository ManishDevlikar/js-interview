function plusOne(ele,i){
    return ele+1;
}

function plusIndex(ele,i){
    return ele+i;
}

function transform(arr,fn){
    let store=[];
    for(let i=0;i<arr.length;i++){
        store.push(fn(arr[i],i));
    }
    return store;
}

console.log(transform([1,2,3],plusOne));
