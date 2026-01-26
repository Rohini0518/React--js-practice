function makeCounter(initialValue=0){
    let count=initialValue
    return{
     increment:function(){
        count++;
        return count
     },
     decrement:function(){
    count--;
    return count;
     },
     reset:function(){
        count=initialValue;
        return count;
     }
    }
}

let val=makeCounter(10).increment()
let val1=makeCounter(1).increment()
let val2=makeCounter(4).decrement()
let val3=makeCounter(-14).increment()
let val5=makeCounter(9).reset()
let val6=makeCounter().reset()


console.log(val,val1,val2,val3,val5,val6)