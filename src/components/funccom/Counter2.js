import React, { useState } from 'react';

const Counter2 = () => {
    const [count, setCount]=useState(0) //Hook
    const [number,setNumber]=useState(1)
    const handleClickMe=()=>{        
        setCount(count+parseInt(number))
    }
    const handleInputChang=(event)=>{
        setNumber(event.target.value)
    }
    return (
        <>
            {count} <br/>
            <input type="number" onChange={handleInputChang} value={number}/>  <br/>
            {number}<br/>
            <button onClick={handleClickMe}>Cộng</button>
        </>
    );
};

export default Counter2;