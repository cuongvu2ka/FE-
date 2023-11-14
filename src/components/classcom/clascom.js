import { Component } from "react";
class ClasCom extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <>            
                <h1 style={{color:this.props.color}}>Hello From Class Component</h1>
                Name: {this.props.name} <br/>
                Email: {this.props.email} <br/>
                Nội dung: {this.props.children}
            </>
        )
    }
}
export default ClasCom
