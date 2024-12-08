let a=[];
let b=[];
let c=a;
// console.log(a==b);
// console.log(a===b);
// console.log(a==c);
// console.log(a===c);

let s="manish";
// console.log(s.split("").reverse().join(""));


let arr=[1,8,9,10,22,57,27];

function get(item1,...arr){
    // console.log(arr);
}

get(3,8,9,10,11)

let data={name:"java"};
// console.log(delete data.name);
// console.log(data.name);
// console.log(delete data);
// console.log(data);

const arr2 = [1, 2, 3];
delete arr2[1];
// console.log(arr2); // [1, empty, 3]


const obj={};

Object.defineProperty(obj, 'name',{value:"eammy",configurable:false}) // if false wont delete
// console.log(obj.name);
delete obj.name;
// console.log(delete obj['name']);

// console.log(obj.name);

//---------------------- destructuring ----------------------------

// let [n1,n2,n3]=[1,2,3];
// console.log(n1,n2,n3);

let numbers=[1,2,3,4,5,6,7,8];
let [first,second,,fourth,...rest]=numbers;
// console.log(first);


const store={
    name:"java",
    age:25,
    address:{
        city:"delhi",
            state:{
                cm:"yogi",
                population:"1cr"
            }
        }
}

let {name,age}=store;
// console.log(name,age);

let {name:myName}=store;
// console.log(myName);

let {
    address:{
        city,
        state:{
            cm,
            population
        }
    }
}=store

// console.log(city,cm,population);

// let zero=0; // false
let isFalse = false||undefined||""||0||null||NaN||{};
// console.log(isFalse);

//----------------------reverse a number--------------------------

let revNum=12345;

// console.log(Number(String(revNum).split("").reverse().join("")));


function reverseNumber(num){
    let res=0;
    while(num!=0){
        let mod=num%10;
        res=res*10+mod;
        num=Math.floor(num/=10);
    }
    return res;
}

// console.log(reverseNumber(12345));


// console.log(x);
// console.log(y);

var x=y=11;
// var y=10;
// console.log(x); //11
// console.log(y); //11
let xx=12;

// console.log('45'+'15'*5); //4575
// console.log('2'*10); // 20

// console.log(typeof ("20"*1)); // number
// console.log(6*'2'*'2'); // 24
// console.log('2'+23+20); // 22320
// console.log(2+2+"6"); // 46
// console.log(6*'2'+3); //15

// console.log("str".charAt(1));
let str="str";
// console.log(str[1]);

//---------------------------------function / block scoped ----------------------------------

// ----------------------------------------- var ---------------------------------------
function printVar(){
    var vara='one';
    var vara='two';
     console.log(vara);
    if(vara==='two'){
        var vara1="three";
        // console.log(vara);
    }
    // console.log(vara1); // accessible outside its block because var variables are function scoped
    
}

// printVar()

// ------------------------------- let -------------------------------------------------

function printLet(){
   let leta=10;
// let leta=20;
   leta=20;
    console.log(leta);
    if(leta===20){
        let leta2=30;
        //  console.log(leta);       
    }
    // console.log(leta2);  // not accessible beacouse let variable ase block scopes not accessible outside its block
}


// printLet();


// --------------------------------------------------------------------------------------------------------





