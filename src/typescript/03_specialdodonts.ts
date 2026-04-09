//strict null checks
//strict:true ..in config
 
let title:string="intro";
title=undefined;

let subtitle:string | undefined ="typescript";

//void: we use it when fn doesn't return a useful value;

function log(msg:string):void{
console.log(msg)
}

//if our function never returns anything then we use never;
function fail(msg:string):never{
    throw new Error(msg)
}

// dont use any-try to ignore

const valueAny:any =JSON.parse('{"x":1}')
valueAny.notThere.toFixed(2)//this compiles but can break/explode at runtime
