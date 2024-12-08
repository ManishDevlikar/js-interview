
// without currying
function sum(a,b,c) {
    return a+b+c;
}

const sum1=sum(1,2,3);
console.log(sum1);

// with currying
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

const sum2 = add(1)(2)(3);
console.log("sum2", sum2);
