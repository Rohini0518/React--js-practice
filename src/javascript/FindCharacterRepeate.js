// 1. Character Frequency
// “Write a function that takes a string and returns how many times each character appears.”
// javascript
// Input:  "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

// take strn Input (strng) one varaibel output={} add first cha to obj then with 1 appear, then secong but check if it already exist if exist +1 if not add new

function characterFrequncy(str) {
  let output = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (output[char]) {
      // if(char in output)-second way
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
}

console.log(characterFrequncy("helloe"));


//prt
function ch(str){
    let out={}
    for (let i=0;i<str.length;i++){
        let char=str[i]
        // if (char in out)
        if(out[char]){
           out[char]+=1 
        }
        else{
            out[char]=1
        }
    }
    return out
}

