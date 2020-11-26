import React, {useState} from 'react';
import Effect from './effectRunOnce';
const MouseContainer=()=>{
    const [display,setDisplay]=useState(true);
    return(
        <div>
          <button onClick={()=>setDisplay(prevDisp=>!prevDisp)}>Toggle</button>
          {display && <Effect />}
        </div>

    )
}
export default MouseContainer;