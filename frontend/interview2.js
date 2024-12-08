const _ =require('lodash');

let a=1;
let b=1;
let c=a;
// console.log(a===c); // true

let x={age:20,name:undefined};
let y={age:20};
// console.log(x===y);  // false
// console.log(x.age===y.age); // true
//----------------------------------------comparing objects -----------------------------------

// console.log(JSON.stringify(x)===JSON.stringify(y)); // true  // not suitable in a situation where one of key is undefined

// console.log(_.isEqual(x,y)); // false

// console.log(this);

var num;
num++
// console.log(num);  // NaN
num=10;
// console.log(num);  // 10

// console.log(3+3+'2'); // 62
// console.log(3*'3'+2); // 11
// console.log(3+3-'2'); //4
// console.log('3'+1); // 31
// console.log('3'-1); //2
// console.log('3'*2); //6
// console.log('6'/2); //3
// console.log('3'-2+'4'+'2'-1*'3'); //139

function printLine(str){
    let arr=str.split(' ');
    for(let s of arr){
        console.log(s);
    }
}

function printLine2(str){
    let res='';
    for(let i=0;i<str.length;i++){
        res+=str[i];
        if(str[i]==' ' || str.length-1==i){
          console.log(res);
          res='';
        }
    }
}

function printLine3(str){
    let res='';
    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            res+='\n';
        }else{
            res+=str[i];
        }
    }
    return res;
}

// console.log(printLine3("this is an js interview"));

function getProduct(arr){
    return arr.reduce((a,b)=>a*b)
}
console.log(getProduct([1,2,3,4,5]));

