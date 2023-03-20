import React, { useRef, useState } from 'react'
import IMG from "./photo.webp"

const Image1 = () => {
    let [photo,setPhoto]=useState(IMG)
    let [loading,setLoading]=useState(true)
    let imgRef=useRef()
    let handleChange=()=>{
        if(loading==true)
{
    setLoading(!true)
    imgRef.current.style.borderRadius="25%"
    imgRef.current.style.border="2px solid purple"
} 
else{
    setLoading(!false)
    imgRef.current.style.borderRadius="0"
    imgRef.current.style.border="none"

}   }
  return (
    <div>
        <img src={photo} alt="nature" ref={imgRef}  height="200px" width="300px"/>
        <button onClick={handleChange}>{loading?"on":"off"}</button>
    </div>
  )
}

export default Image1