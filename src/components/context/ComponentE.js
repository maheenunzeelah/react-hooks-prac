import React ,{useContext} from 'react';
import {userContext} from '../../App';

const ComponentE=()=>{
    const username=useContext(userContext);
    return(
        <div>
          {username}
        </div>
    )
}

export default ComponentE;