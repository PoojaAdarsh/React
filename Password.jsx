import React, { useState } from 'react'
import eye from "./photo1.jpg"

const Password = () => {
    let [password,setPassword]=useState(true)
    let showPassword=()=>{
        if(password == true){
            setPassword(!true)
        }
        else{
            setPassword(!false)

        }
    }
  return (
    <div>
        <input type={password?"text":"password"} name="" id="" />
        <img src={eye} alt="" height="10px" width="10px" onClick={showPassword} />
    </div>
  )
}

export default Password