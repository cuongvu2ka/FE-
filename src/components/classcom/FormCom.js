import React, { Component } from 'react';

class FormCom extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            phone:'',
            password:''
        }
    }
    handleSubmitForm=(e)=>{
        e.preventDefault()
        const {username, email, password, phone}=this.state
        alert(`username: ${username} email: ${email} password ${password} phone: ${phone}`)
       
    }

    handleInputChange=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmitForm}>
                    <input type='text' name='username' placeholder='username' onChange={this.handleInputChange}/> <br/>
                    <input type='email' name='email' placeholder='email' onChange={this.handleInputChange}/> <br/>
                    <input type='text' name='phone' placeholder='phone' onChange={this.handleInputChange}/> <br/>
                    <input type='password' name='password' placeholder='password' onChange={this.handleInputChange}/> <br/>
                    <button>Đăng kí</button>
                </form>
            </>
        );
    }
}

export default FormCom;