import React from 'react';

const Title=()=>{
    console.log("rendering title")
    return(
        <div>
           UseCallBack Hooks
        </div>
    )
}

export default React.memo(Title);