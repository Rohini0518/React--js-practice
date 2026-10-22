// 6. Reverse Each Word in a Sentence
// “Reverse every word in this sentence but keep the word order the same.”
// javascript
// Input:  "Welcome to JavaScript"
// Output: "emocleW ot tpircSavaJ"

// let str=""

// Approach 1: split -> reverse -> join
// split("")      O(n) time, O(n) space  (new array of n chars)
// reverse()      O(n) time, O(1) space  (in place, n/2 swaps)
// join("")       O(n) time, O(n) space  (new string of n chars)
// 3 linear passes = 3n, constants drop
// TIME: O(n)   SPACE: O(n)
// O(n) space is unavoidable - strings are immutable, so you cannot
// swap chars inside str. You must copy into a mutable array first.
function reverseWord(str){
    if(!str) return "";
    let split=str.split("");
    let reversse=split.reverse().join("")
console.log(reversse)
   
}

// Approach 2: countdown loop, build string manually
// loop runs n times -> O(n) iterations
// BUT output+=str[i] does not append, it allocates a NEW string each pass
// because strings are immutable. Those copies grow 1,2,3...n
// 1+2+3+...+n = n(n+1)/2
// TIME: O(n^2)   SPACE: O(n) result + O(n^2) total chars allocated as garbage
//
// caveat: V8 stores a+b as a ConsString (rope) - two pointers, copy deferred
// until the string is read - so this benchmarks closer to O(n) in practice and
// often beats Approach 1 on short strings (no array allocation).
// that is an engine optimisation, not the algorithm. answer O(n^2).
function reverseWithoutReverse(str){
    if(!str) return "";
    let output=""
    for (let i=str.length-1;i>=0;i--){
     output+=str[i]
    }
    console.log(output)
}
reverseWord("Welcome to JavaScript");
reverseWithoutReverse("Welcome to JavaScript")


// Remember for interviews:
// - Loop iterations → O(n)
// - Repeated string copying → potentially O(n²)
// - Building an array and joining once → O(n)