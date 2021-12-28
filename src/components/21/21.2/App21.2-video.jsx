import Video from "./WhatsApp_Video_2021-12-17_at_12.00.08.mp4";
import { useRef } from "react";

export default function App() {
	const videoRef = useRef();

	function play() {
		videoRef.current.play();
	}

	function pause() {
		videoRef.current.pause();
	}

	return (
		<div>
			<button
				onClick={play}
			>
				play
			</button>
			<button
				onClick={pause}
			>
				pause
			</button>
			<br />
			<video 
				ref={videoRef} 
				src={Video}
				type="video/mp4"
			>	 
			</video>
		</div>
	)
}