// 'use strict'

// const { join } = require("lodash");

// const _ = require('lodash');
function test(){
   var salary=100;
    console.log(salary);
}
// test();
// const salary =200;
// console.log(salary);


function test2(){
console.log(test2.val);
}
// test2()
test2.val=100;
test2.val=200;
// test2();

// console.log({}=={});
// console.log({}==={});

let a ={
    name:"John",
    address:{
        city:"thane"
    }
}


// let b={
// shallow copy
//     ...a
// }

// let c = _.cloneDeep(a);

let d =JSON.parse(JSON.stringify(a))

d.address.city="mumbai";

// console.log(a.address.city);
// console.log(d.address.city);

let num1=10
let num2= new Number(10);
let num3 = 10;
// console.log(num1===num2);
// console.log(num1===num3);

function check(record){
    if(record.age===28){
        console.log("you are an adult")
    }else if(record.age===38){
        console.log("you are still adult")
    }else{
        console.log("you are not adult yet")
    }
}

// check({age:38})

// console.log(+true);
// console.log(true+6);
// console.log(!'text');
// console.log(!false);
// console.log(!0);
// console.log("---------");
// console.log(0);

var aa ={};
var bb={key:"bb"};
var cc ={key:"cc"};

aa[cc]=600;
bb[cc]=700
// aa[bb]=600;
// bb[bb]=400

// console.log(aa[cc]);        // bb[object object]
// console.log(aa[bb]);        //
// console.log(bb[bb]);        //   
// console.log(bb[cc]);        //


// console.log(bb.key);
// console.log(cc.key);
// console.log(JSON.stringify(bb));

// console.log(JSON.stringify(bb));

const person={
    name:"John",
    age:{my:30}
}

// console.log(person["age"]["my"]);


function merge(str1,str2){
    let res="";
    let min = Math.min(str1.length,str2.length);
    for(let i=0;i<min;i++){
        res+=str1[i];
        res+=str2[i];
    }

    if(str1.length>min){
        res+=str1.slice(min);
    }else if(str2.length>min){
        res+=str2.slice(min);
    }

    return res;
}

// console.log(merge("abcdef","123"));

// console.log(+"10"+20+50+30+Number("10"));
// console.log(+"10");

for(var i=0;i<15;i++){
    setTimeout(()=>{
        // console.log(i);  // 15
        
    },1000)
}


for(let i=0;i<15;i++){
    setTimeout(()=>{
        // console.log(i); // 1,2,3...15  
    },1000)
}



// function isContains(str1,str2){
//     str1=str1.toLowerCase();
//     str2=str2.toLowerCase();
//     return str1.includes(str2);
// }

// console.log(isContains("alien","lien"));
// console.log(isContains("voodoo","no"));

function isContains2(arr){
    // let str1=arr[0].toLowerCase();
    // let str2=arr[1].toLowerCase();
    return arr[0].includes(arr[1])
}

// console.log(isContains2(["alien","lien"]));
// console.log(isContains2(["voodoo","no"]));

function sum(val1,val2){
    if(val2!=undefined){
        return val1+val2;
    }
        return function(val2){
            return val1+val2;
        }
}
console.log(sum(3,3));

console.log(sum(3)(3));

