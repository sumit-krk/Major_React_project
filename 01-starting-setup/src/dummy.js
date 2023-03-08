import {useEffect, useState} from 'react'
export default function App() {
  const [name,setName]=useState([]);
  const [showName,setShowName]=useState([]);
  const [input,setInput]=useState('');

  useEffect(()=>{
    if(input.length>0){
      fetchAllName()
    }
    else{
      fetchapi();
    }
  },[input])

  const HandleButton=()=>{
    if(name.length>1){
     let result=name.map((e)=>{
        return e.name
      })
      setShowName([...result])
    }
    else
      setShowName([...name])
  }

  const fetchapi=async()=>{
    let data= await fetch('https://randomuser.me/api/');
    let netData=await data.json();
    setName([netData.results[0].name]);
  }

  const fetchAllName=async()=>{
    let data= await fetch(`https://randomuser.me/api/?results=${input}`);
    let netData=await data.json();
      setName(netData.results);
  }

  const handleChange=(e)=>{
    setInput(e.target.value);
  }

  return (
    <>
      <button onClick={HandleButton}>Get Name</button> <input value={input} onChange={handleChange}  />
      <div>
        {
          showName.map((e,index)=>{
            return <div key={index}>
              <span>{e.first}</span> <span>{e.last}</span>
            </div>
          })
        }
      </div>
    </>
  );
}