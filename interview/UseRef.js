import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
    let inputRef=useRef();
    console.log(inputRef.current)
    const handleClick=()=>{
        inputRef.current.style.backgroundColor='red'
    }
  return (
    <div>
        <input ref={inputRef} type='text' onClick={handleClick} />
    </div>
  )
}

export default UseRef