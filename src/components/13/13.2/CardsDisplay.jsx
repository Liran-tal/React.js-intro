import React from "react";
import AvatarCard from "./AvatarCard";

function CardDisplay (props){
	return (
		<div className="card-display">
			{props.map((user) => {
				return (
					<AvatarCard 
						key={user.email}
						image={user.picture.medium}
						name={user.name.first + user.name.last}
					/>
				)
			})}
		</div>
	)
}

export default CardDisplay;