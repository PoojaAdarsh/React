import React, { useRef } from 'react'

const Use = () => {
    let h1Ref=useRef()
    let handleChange=()=>{
        h1Ref.current.style.color="red"
    }
  return (
    <>
    <h1 ref={h1Ref}>use component</h1>
    <button onClick={handleChange}>change</button>
    </>
  )
}

export default Use