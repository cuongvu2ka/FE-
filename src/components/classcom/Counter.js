import React, { Component } from 'react';
class Counter extends Component {
    constructor(props){
        super()
        this.state={
            count:0
        }        
    }
    handleClickMe=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <>
               {this.state.count} <br/>
               <button onClick={this.handleClickMe}>Click Me</button>
            </>
        );
    }
}
export default Counter;