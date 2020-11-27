import React ,{useState,useEffect} from 'react';
import axios from 'axios';
const PostDetails=({match})=>{
    const [id,setId]=useState(match.params.id)
    const [postBody,setPostBody]=useState('');
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(res=>{
             setPostBody(res.data.body)
         })
    },[id])
    return(
        <div>
          <p>{postBody}</p>
        </div>
    )
}

export default PostDetails;