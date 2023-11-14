import React, { useEffect, useState } from 'react';

const Lifecycle2 = (props) => {  
    const [count, setCount]=useState(0)
    useEffect(()=>{
        //componentDidMount()       
        return ()=>{
                // Clean Up
                //componentWillUnmount                
        }
    },[])

    useEffect(()=>{
        //componentDidUpdate
    }, [count])

 

    const handleClickMe=()=>{
        setCount(count+1)
    }
    return (
        <>
            <h1>Lifecycle 2</h1>
            {count} <br/>
            <button onClick={handleClickMe}>Click Me</button>
        </>
    );
};

export default Lifecycle2;