import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0);
    const [memo,setMemo]=useState(false);
    const timeTakingFunction=(count)=>{
        for(let i=0;i<1000000000;i++){}
        return count;
    }
    const handleclick=()=>{
        setCount(count+1);
    }
    const handleMemo=()=>{
        setMemo(!memo);
    }
    let data=useMemo(()=>{
        return timeTakingFunction(count)
    },[count])
  return (
    <div>
        <div>Current value is : {data}</div>
        <button onClick={handleclick}>increase</button>
        <div>
            {memo?'Memo':'NotMemo'}
        </div>
        <button onClick={handleMemo}>Click on memo</button>
    </div>
  )
}

export default UseMemo