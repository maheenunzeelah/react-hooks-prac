import React, {useEffect,useState} from 'react';
 
const Effect=()=>{
    const [locX,setLocX]=useState(0);
    const [locY,setLocY]=useState(0);
    useEffect(()=>{
        console.log('useffectRunS')
      window.addEventListener('mousemove',logMouseLoc);

      return ()=>{
          window.removeEventListener('mousemove',logMouseLoc);
      }
    },[])
    const logMouseLoc=(e)=>{
       setLocX(e.clientX);
       setLocY(e.clientY);
    }
    return(
        <div>
          X-{locX}
          <br />
          Y- {locY}
        </div>
    )
}

export default Effect;