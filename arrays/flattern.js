// import { getDepth } from "./depth.js";

let arr=[[1,2],[3,4],[5,[6,[7,[8,[9,10]]]]]];

// console.log(arr.flat(5));

let arr2=[1,2,3,4];
let res1= arr2.map(x=>Array.isArray(x)?x.map(x=>x*2):x*2).flat();
// console.log(res1);

// without default function

function getFlat(arr){
    let res=[];

    function flattern(arr){

        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                flattern(arr[i]);
            }else{
                res.push(arr[i]);
            }
        }
    }
    flattern(arr);
    return res;
}





let temp=[1,2,3,[4,[5,6,[7,[8,[9,[10]]]]]]]
console.log(getFlat(temp));
