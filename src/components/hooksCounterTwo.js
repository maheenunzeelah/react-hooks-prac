import React ,{useState} from 'react';

const HooksCounterTwo=()=>{
    const initialCount=0;
    const [count,setCount]=useState(0);
    const Incrementby5=()=>{
     for(let i=0;i<5 ;i++){
         setCount(count=>count+1)
     }
    }
    return(
        <div>
            Count:{count}
            <button onClick={()=>setCount(count=>count+1)}>Increment</button>
            <button onClick={()=>setCount(count=>count-1)}>Decrement</button>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={Incrementby5}>Increment by 5</button>
        </div>
    )
}
export default HooksCounterTwo;