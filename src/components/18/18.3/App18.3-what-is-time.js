import React from 'react';
import { useState } from 'react';


export default function App() {

	const [seconds, setSecondes] = useState(0);
	const [minuts, setMinuts] = useState(0);
	const [hours, setHours] = useState(0);

	const secondsChanged = ({target}) => {
		setSecondes(target.value);
		setMinuts(target.value / 60);
		setHours(target.value / 3600);
	}

	const minutsChanged = ({target}) => {
		setSecondes(target.value * 60);
		setMinuts(target.value);
		setHours(target.value / 60);
	}
	
	const hoursChanged = ({target}) => {
		setSecondes(target.value * 3600);
		setMinuts(target.value * 60);
		setHours(target.value);
	}

	return (
		<div className="ui form">
			<div className="fields">
				<div className="field">
					<label>Seconds</label>
					<input 
						type="text" 
						value={seconds}
						placeholder="Seconds" 
						onChange={(event) => secondsChanged(event)} 
					/>
				</div>
				<div className="field">
					<label>Minuts</label>
					<input 
						type="text" 
						value={minuts}
						placeholder="Minuts" 
						onChange={(event) => minutsChanged(event)} 
					/>
				</div>
				<div className="field">
					<label>Hours</label>
					<input 
						type="text" 
						value={hours}
						placeholder="Hours" 
						onChange={(event) => hoursChanged(event)} 
					/>
				</div>
			</div>
		</div>
	)
}