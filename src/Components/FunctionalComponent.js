import React, { useState } from "react";

function FunctionalComponent(props){
	const [count, setCount] = useState(0);
	const [name, setName] = useState("name");

	const increase = () => {
		setCount(count+1);
	}

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
