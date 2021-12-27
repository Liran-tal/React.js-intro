import {useState, useEffect} from "react";
import axios from "axios";




export default function App() {
	const [data, setData] = useState(null);
	
	useEffect(() => {
		async function getData() {
			const {data} = await axios.get('https://intense-mesa-62220.herokuapp.com/https://swapi.dev/api/films/1/');
			setData(data);	
		} 

		getData();
	}, []);
		

	return(
		<div>
			{data && "The film " + data.title +	" was directed by " + data.director}
		</div>
	)
}