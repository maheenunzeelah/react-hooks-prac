import React,{useReducer,useEffect} from 'react';
import axios from 'axios';

const initialState={
    loading:true,
    posts:{},
    error:''
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
         return{
             loading:false,
             posts:action.payload,
             error:''
         }
         case 'FETCH_ERROR':
          return{
              loading:false,
              posts:{},
              error:'Something went wrong'
          }
          default:
           return state;
    }
}
const DataReducer=()=>{
const [state,dispatch]=useReducer(reducer,initialState)

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(res=>{
         dispatch({type:'FETCH_SUCCESS',payload:res.data})
     })
     .catch((err)=>{
         dispatch({type:'FETCH_ERROR'})
     })
},[])

return( 
            <div>
                {state.loading?'Loading...':state.posts.title}
                {state.error?state.error:null}
            </div>
        
    )
}

export default DataReducer;