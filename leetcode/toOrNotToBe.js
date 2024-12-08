var expect = function(val) {
    return{ 
        toBe: function(v){
            if(v===val){
                return true;
            }else{
                throw new Error("Not Equal");    
            }
        },
        notToBe: function(v){
            if(v!==val){
                return "true"
            }
            else{
                throw new Error("Equal");
            }    
        }
    }
};


func = () => expect(5).toBe(null);

console.log(func());
