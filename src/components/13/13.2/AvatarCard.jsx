import React from "react";

function AvatarCard (props) {
	return (
		<div className="avatar-card">
			<img 
				src={props.image} 
				alt={props.name} 
				className="avatar-card-img"
			/>
			<div className="avatar-card-name">
				{props.name}
			</div>
		</div>
	)
}

export default AvatarCard;