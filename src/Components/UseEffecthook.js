import React ,{useEffect} from 'react';


function UseEffecthook() 
{
    
    useEffect(() => 
    { 
        return () => { console.log("Behavior right before the component is removed from the DOM."); } 
    }); 
    
    return <h1> Use Effect example!! </h1>;

}

export default UseEffecthook;