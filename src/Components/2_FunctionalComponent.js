import React, { useState,useEffect } from "react";

function FunctionalComponent(props){
	const [count, setCount] = useState(0);
	const [name, setName] = useState("name");

	const increase = () => {
		setCount(count+1);
	}
	useEffect(() => 
    { 
		 console.log("This code will execute when the component is mounted");


    },[count]); 
	useEffect(() => 
    { 

		 console.log("This code will execute when the component updates");

    }); 
	useEffect(() => 
    { 
		 //console.log("This code will execute when the component is mounted");

		//  console.log("This code will execute when the component updates");

         return () => { console.log("Behavior right before the component is removed from the DOM."); } 
    },[]); 
    
	return (
		<div style={{margin:'50px'}}>
			<h1>Welcome {props.education} </h1>
			<h3>Counter App using Functional Component : </h3>
		<h2>{count}</h2>
			<button onClick={increase}>Add</button>
		</div>
	)
}


export default FunctionalComponent;
