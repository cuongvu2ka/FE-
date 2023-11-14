const Login=(props)=>{   
    return(
        <>
             <h1 style={{color:props.color}}>Login</h1> 
             Name: {props.name} <br/>
             Email: {props.email} <br/>
             Nội dung: {props.children}
        </>         
    )
}
export default Login