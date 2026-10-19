//goal:when to let typescript infer types
//ts-->js very well
//when ts will writes the types/ u r going to write


const count=0; //ts knows this is a number, so ts can handle this 
const namm="rho" // ts know it is strng 
const arr=[1,2,3]  //ts knows this is array of numbers

//so ts already knows what variables types, we no need to give 
//explicilty const namm:string="rho"--no need this is over annonation , bcz if we have 100 of varables we cant give each type to each variable as ts already know their types

//now when to annotate or tell types,when ts dont know like in function we dont know what it will return
function sum (a,b){         // now ts showing , a/b having any type??}
    return a+b
}
sum(3,4)
//now in typescript:
function number(a:number,b:number):number{
    return a+b
}
// :number -what return value type??

number(1,2)
//we  should anotate when the type is not obvious..

let anyrho:string|number;
anyrho=8
anyrho='ijbm'  ///no error bcz there can be string or number also
