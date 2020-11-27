import React , {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const DataFetching=()=>{
    const [posts,setPosts]=useState([]);
    const [id,setId]=useState(1);
    const [idFromButton,setIdFromButton]=useState(1);

    const handleClick=()=>{
        setIdFromButton(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <div>
            {/* <input type="number"  value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={handleClick}> Fetch </button>
            <p >{posts.title}</p> */}
           <ul>
               {posts.map(post=>{
                  return <Link to={`/${post.id}`}><li key={post.id} >{post.title}</li></Link>
               })}
           </ul>
        </div>
    )
}
export default DataFetching; 