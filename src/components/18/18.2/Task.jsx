import React, { useState } from 'react';

export default function Task({task}) {

	const [isDone, setIsDone] = useState(task.completed);
	
	const changeIsDone = () => {
		setIsDone(!isDone);
	}

	return (
		<div>
			<span
				style={!isDone ? {textDecoration: "line-through"} : {}}
			>
				{task.name}   
			</span>
			
			<button
				onClick={() => changeIsDone()}
			> 
				{isDone ? <span> &#x2713;</span> : <span> &#10060;</span>} 
			</button>
		</div>
	)
}