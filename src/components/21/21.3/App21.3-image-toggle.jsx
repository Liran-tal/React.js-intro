
import { useRef, useState } from "react";

const blackAndWhite = {
	filter: "grayscale(100%)",
}


export default function App () {
	
	const [imageStyle, setImageStyle] = useState(blackAndWhite)
	const imageRef = useRef();

	
	console.log(imageStyle);
	return (
		<img 
			src="https://cdn.pixabay.com/photo/2020/03/11/13/45/snow-4922199_960_720.jpg"
			onMouseEnter={() => setImageStyle({})}
			onMouseLeave={() => setImageStyle(blackAndWhite)}
			style={imageStyle}
		/>
	)
}

// https://cdn.pixabay.com/photo/2020/03/11/13/45/snow-4922199_960_720.jpg