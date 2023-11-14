import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CRUDCom = () => {
    const [post,setPost]=useState({title:'',author:''})
    const [data,setData]=useState([])
    const [editMode, setEditMode]=useState(false)

    axios.defaults.baseURL=process.env.REACT_APP_API_URL
    
    const handleAdd=()=>{
        if(post.title.trim()==='' && post.author.trim()==='') return
        const newPost={
            title:post.title,
            author:post.author
        } 
        axios.post('/posts',newPost)
        .then(response=>{
            setData([response.data,...data])      
            setPost({title:'',author:''})      
        })           
    }   

    const loadData=()=>{
        axios.get('/posts')
        .then(response=>{
            let list=response.data.sort((a,b)=>b.id-a.id)
            setData(list)
        })
    }

    useEffect(()=>{
        loadData()
    },[])
    
    const handleDetete=(id)=>{
        axios.delete('/posts/'+id)
        .then(()=>{
           const newData=data.filter(item=>item.id!==id)
           setData(newData)
        })
    }

    const handleEdit=(id)=>{
        setEditMode(true)
        axios.get('/posts/'+id)
        .then(response=>{
            setPost(response.data)
        })
    }
    const handleUpdate=()=>{
        if(post.title.trim()==='' && post.author.trim()==='') return
        axios.put('/posts/'+post.id,post)
        .then(()=>{
            const updateData=data.map(item=>{
                if(item.id===post.id) return post
                else return item
            })
            setData(updateData)
            setEditMode(false)
            setPost({title:'',author:''})      
        })
    }
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setPost((prevState)=>({...prevState,[name]:value}))        
    }
    return (
        <>    
            <input type='text' name='title' placeholder='title' onChange={handleInputChange} value={post.title}/> <br/>
            <input type='text' name='author' placeholder='author' onChange={handleInputChange} value={post.author}/> <br/>                   
            {!editMode&&<button onClick={handleAdd}>Add</button>}
            {editMode&&<button onClick={handleUpdate}>Update</button>}            
            <ul>
                {data.map(item=>(
                    <li key={item.id}>{item.title}-{item.author}
                        <button  onClick={()=>handleEdit(item.id)}>Sửa</button>
                        <button onClick={()=>handleDetete(item.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CRUDCom;