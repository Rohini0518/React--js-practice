const userName:string="rohini";
const age:number=4;
const isLoading:boolean=true;
const large:bigint=2n**63n-1n

// const mixed=large*age //error:Operator '*' cannot be applied to types 'bigint' and 'number'.

const TOKEN:unique symbol=Symbol('TOKEN')
console.log(userName,age,isLoading,TOKEN,large);

function yearsToDay(years:number):number{
    return years*365
}

yearsToDay(2)
// yearsToDay("3")//Argument of type 'string' is not assignable to parameter of type 'number'
