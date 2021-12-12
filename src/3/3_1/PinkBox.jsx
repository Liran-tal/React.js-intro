import React from 'react';
import "./pinkBox.css";
import PurpleBox from './PurpleBox.jsx';


function PinkBox() {
	return (
		<div className='pink-box'>
			<PurpleBox />
			<PurpleBox />
		</div>
	);
}

export default PinkBox;