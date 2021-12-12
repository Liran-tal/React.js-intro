import React from 'react';
import BlueBox from './BlueBox.jsx';
import "./greenBox.css";

function GreenBox() {
	return (
		<div className='green-box'>
			<BlueBox />
		</div>
	);
}

export default GreenBox;