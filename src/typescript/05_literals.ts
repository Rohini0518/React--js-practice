type Direction="left"| "right"|"up";

function move(d:Direction):void{
console.log("move to",d)
}
move("left");
//Argument of type '"down"' is not assignable to parameter of type 'Direction'
move("down");

const dirt="right" //ts keeps literal type "right"
move(dirt);
let dirtion2="right"
move(dirtion2); //ts error,bcz let can be modified later.. --it widens to string--b
// Argument of type 'string' is not assignable to parameter of type 'Direction'.ts(2345)
// let dirtion2: string

//solution for let usage 
let dir3 : Direction="right";
move(dir3)// no  error bcz we gave particular type i.e direction..