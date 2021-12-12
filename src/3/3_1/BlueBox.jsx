import React from 'react';
import "./blueBox.css";
import PinkBox from './PinkBox.jsx';


function BlueBox() {
	return (
		<div className='blue-box'>
			<PinkBox />
		</div>
	);
}

export default BlueBox;