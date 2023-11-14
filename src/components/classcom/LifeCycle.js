import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props){
        super()
        this.state={
            count:0,
            data:[]
        }
        console.log('constructor');
    }
    componentDidMount(){
        console.log('componentDidMount');
        window.addEventListener("click",this.handleClick)
    }
    handleClick=()=>{
        console.log('Đã click');
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`componentDidUpdate: prevProps:  ${prevProps.name}   prevState ${prevState.count}`);
        // Không được setState trong componentDidUpdate 
        //this.setState({count:this.state.count+1})
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        window.removeEventListener('click',this.handleClick)
    }
    handleClickMe=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        console.log('render');
        return (
            <>
                <h1>LifeCycle</h1>
                {this.state.count} <br/>
                <button onClick={this.handleClickMe}>Click Me</button>
            </>
        );
    }
}

export default Lifecycle;