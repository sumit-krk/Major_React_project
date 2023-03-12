import React from 'react'
import { useContext } from 'react'
import { UserData } from './context/GlobalContext'

const Child_3 = () => {
    const {name}=useContext(UserData)
  return (
    <>
        <div>Child_3 : name is {name}</div> 
    </>
  )
}

export default Child_3