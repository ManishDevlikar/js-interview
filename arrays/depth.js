export function getDepth(arr){
    if(!Array.isArray(arr)){
        return 0;
    }
    let depth=1;
    for(const item of arr){
        depth=Math.max(depth,getDepth(item)+1)
    }
return depth;
}

console.log(getDepth([1,2,3,4,[5,[6,[7,[8,[9,[10]]]]]]]));
