import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CallApi2 = () => {
    const [data, setData]=useState([])
    useEffect(()=>{
        // componentDidMount
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            setData(Response.data)
        })
    },[])
    return (
        <>
            <h1>Danh sách bài viết CallAPI2</h1>
            <ul>
                {data.map(post=>
                    (
                        <li key={post.id}>{post.title}</li>
                    )
                )}
            </ul>
        </>
    );
};

export default CallApi2;