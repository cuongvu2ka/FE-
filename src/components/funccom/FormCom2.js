import React, { useState } from 'react';

const FormCom2 = () => {
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmitForm=(e)=>{
        e.preventDefault()
        alert(`username: ${username} email: ${email} password ${password} phone: ${phone}`)
    }
    return (
        <>
            <form onSubmit={handleSubmitForm}>
                    <input type='text' name='username' placeholder='username' onChange={(e)=>setUserName(e.target.value)}/> <br/>
                    <input type='email' name='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)}/> <br/>
                    <input type='text' name='phone' placeholder='phone' onChange={(e)=>setPhone(e.target.value)}/> <br/>
                    <input type='password' name='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/> <br/>
                    <button>Đăng kí</button>
            </form>
        </>
    );
};

export default FormCom2;