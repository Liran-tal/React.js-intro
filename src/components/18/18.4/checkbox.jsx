// import React, { useState } from 'react';

export default function CheckBox(props) {
	return (
		<div className="ui form">
			<div className="inline field">
				<div className="ui checkbox">
					<input 
						type="checkbox" 
						id={props.id}
						onChange={props.onChange}
						checked={props.isChecked}
					/>
					<label>
						{props.name}
					</label>
				</div>
			</div>
		</div>
	)
}