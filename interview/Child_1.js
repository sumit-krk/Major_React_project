import React from 'react'
import Child_2 from './Child_2'
import {UserData} from './context/GlobalContext'

const Child_1 = () => {
  return (
    <>
        <UserData.Provider value={{name:'sumit'}}>
            <div>Child_1</div>
            <Child_2 />
        </UserData.Provider>
    </>
  );
}

export default Child_1