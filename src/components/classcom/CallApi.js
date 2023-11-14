import axios from 'axios';
import React, { Component } from 'react';

class CallApi extends Component {
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount=async()=>{
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(response=>{
        //     console.log(response.data);
        //     this.setState({data:response.data})
        // })
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.setState({data:response.data})
    }
    render() {
        const {data}=this.state
        return (
            <>
                <h1>Danh sách bài viết</h1>
                <ul>
                {data.map(post=>
                    (
                        <li key={post.id}>{post.title}</li>
                    )
                )}
                </ul>
            </>
        );
    }
}

export default CallApi;