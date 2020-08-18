import React,{useState,useEffect} from 'react';

function HooksCounter(){
    const [count,setCount]=useState(0)
    const[name,setName]=useState({firstName:''})
    useEffect(()=>{     
        document.title=`Count ${count}`
        console.log('rendering')
    },[count])
return (
    <div>
        <input type="text"value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})} />
        <button onClick={()=>setCount(count=>count+1)}>Count {count}</button>
        </div>
)
}

export default HooksCounter