import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);
const [name,setName]=useState('Motu')
  const increment =()=>{
    setCount(count+1);
  }

  const changeName =()=>{
    setName(namePrev => namePrev === "Motu"?"Patlu":"Motu");
  }
 useEffect(()=>{
  const interval =setInterval(()=>{
    setName(namePrev =>(namePrev === "Motu"?"Patlu":"Motu"))
  },2000)
  return ()=>clearInterval(interval)
 },[])

  return (
    <div className='mt-40 ml-96'>
      <h1>{count}</h1>
      <Button onClick={increment} onMouseEnter={increment}>Increment</Button>
      <Button onClick={()=>setCount (count-1)}>Decrement</Button>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Nam</button>
    </div>
  )
}

export default Counter
