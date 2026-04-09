
// ✅ Can you use small or capital?

// 👉 Both are valid in TypeScript

// type user = { email?: string }   // works ✅
// type User = { email?: string }   // works ✅
// Then why people use CAPITAL (User)?
// ✔️ Makes code readable
// ✔️ Easy to distinguish from variables
// type user = { email?: string };
// const user = { email: "a@gmail.com" }; // 😵 confusing

// 👉 Same name → hard to read/debug
// 👉 Types = Capital (PascalCase), Variables = small (camelCase)

// we are telling ts that thiis object have these properties

type User={
    //if we are mentioning properties in this object and not giving (?) then those properties should be in object there are like mandatory..
    id: string ;//required
    name: string;//required
    email?: string//optional like if we give ? it is optional this property may have or maynot be no property as email both are acceptable,if there is email then it belongs to string type it cant be undefined or any other type;
     readonly createdAt:Date// this is type of Date and this property should present mandatory but it is not editable only readable.

}

const user1:User={
    id:"1",
    name:"rho",
    createdAt:new Date()
}
console.log(user1)
user1.createdAt=new Date();
// Cannot assign to 'createdAt' because it is a read-only property.

type User2={
    email?:string;//optional if present should be string
}
type User3={
    email:string |undefined //required and it can be string or undefined also
}

//index signature
 type Count={[k:string]:number} //property is string and value is number
// 🟢 Equivalent (normal way)
type Count22 = {
  likes: number;
  views: number;
  shares: number;
}

// 👉 Same thing — just shorter with Record
 type Count2=Record<"likes"|"views"|"shares",number>
// 👉 You can combine with other types

type UserStats = {
  name: string;
  age: number;
} & Record<"likes" | "views" | "shares", number>;

const userrho: UserStats = {
  name: "Rohini",
  age: 25,
  likes: 150,
  views: 200,
  shares: 50
};
 const c1:Count={whatever:1}
 const c2:Count2={likes:1,
    views:2,
    shares:3,
    comment:5}
//  Object literal may only specify known properties, and 'comment' does not exist in type 'Count2'
