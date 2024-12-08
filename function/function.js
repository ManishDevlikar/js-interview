// variable arguments function
function sum(...args){
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3));

// evaluate (2,3) and (2)(3) same we achieved this by currying 
function res(a,b){
    if(a!==undefined && b!==undefined){
        return a+b;
    }else {
        return function(b){
                return a+b;
            }
        }
    }

console.log(res(2,3));

console.log(res(2)(3));
