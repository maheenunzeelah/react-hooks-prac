import React ,{useEffect, useState,useRef} from 'react';
import Button from '../Callbacks/Button';

const RefHooks=()=>{
    const interval=useRef();
    const [timer,setTimer]=useState(0);
    useEffect(()=>{
         interval.current=setInterval(()=>{
            setTimer(prevTime=>prevTime+1)
        },1000)
        return ()=>{
            clearInterval(interval.current)
        }
    },[])
    return(
        <div>
            Count-{timer}
            <button onClick={()=>clearInterval(interval.current)}>Stop</button>
        </div>
    )
}
export default RefHooks;