import { useState } from "react";

function Test(props) {
    const[name,setname]=useState("Snehal");

    return ( 
    <div>
        {name}
        {props.education}
    </div> );
}

export default Test;