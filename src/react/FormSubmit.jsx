import { useState } from "react"

export default function FormSubmit(){

const [user,setUser]=useState({UserName:"rohini",Email:"Rohini@gmail.com"})
const [saveUser,setSaveUser]=useState([])

function getUserForm(e){
let {name,value}=e.target
setUser((prev)=>({...prev,[name]:value}))
    console.log(user)

}

function handleSubmit(e){
    e.preventDefault()
    setSaveUser((prev)=>([...prev,user]))
    console.log("user obj-",user,"user save arruser=",saveUser)
        console.log()

}


return(
    <>
  <form onSubmit={handleSubmit}>
    <div>     
    <label>UserName:</label>
    <input name="UserName" value={user.UserName} onChange={getUserForm}  />
    </div>
    <br/>
    <div>     
    <label>Email:</label>
    <input name="Email" value={user.Email} onChange={getUserForm} />
    </div>
        <br/>

        <button type="submit">Submit</button>
  </form>


  <div>
<p>{JSON.stringify(saveUser)}</p>
  </div>
    </>
)
}