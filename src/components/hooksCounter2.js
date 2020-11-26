import React,{useState} from 'react';

function HooksCounter2(){
    const [name,setName]=useState({firstName:'', lastName:''})
    const [numbers,setNumbers]=useState([]);
    const [number,setNumber]=useState(0);
return (
    <div>
        {/* You have to manually merge object values setter in hooks doesn't do thi on its own. */}
        {/* <input type="text"value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})} /> <br /><br/>
        <input type="text"value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})} />
         <p>My first name is {name.firstName}</p>
         <br />
         <p>My last name is {name.lastName}</p> */}
         <input type="number"  value={number} onChange={(e)=>setNumber(e.target.value)} /> <br /><br/>
         <button onClick={()=>setNumbers([...numbers,number])}>Enter</button>
         <p>My Numbers are {numbers.map(num=>{
             return (<ul>
                <li> {num}</li>
             </ul>)
         })}</p> 
        {/* <input type="text"value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})} /> */}
        </div>
)
}

export default HooksCounter2