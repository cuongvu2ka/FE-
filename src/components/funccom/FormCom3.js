import React, { useState } from 'react';

const FormCom3 = () => {
    const [user,setUser]=useState({usename:'',email:'',phone:'',password:''})
    const handleSubmitForm=(e)=>{
        e.preventDefault()
        alert(`username: ${user.username} email: ${user.email} password ${user.password} phone: ${user.phone}`)
    }
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setUser((prevState)=>({...prevState,[name]:value}))
    }
    return (
        <>
            <form onSubmit={handleSubmitForm}>
                    <input type='text' name='username' placeholder='username' onChange={handleInputChange}/> <br/>
                    <input type='email' name='email' placeholder='email' onChange={handleInputChange}/> <br/>
                    <input type='text' name='phone' placeholder='phone' onChange={handleInputChange}/> <br/>
                    <input type='password' name='password' placeholder='password' onChange={handleInputChange}/> <br/>
                    <button>Đăng kí</button>
            </form>
        </>
    );
};

export default FormCom3;