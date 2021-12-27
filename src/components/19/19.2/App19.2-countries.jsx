import {useState, useEffect} from "react";
import axios from "axios";

export default function App() {
	const [data, setData] = useState(null);
	const [filteredData, setfilteredData] = useState(null);
	const [term, setTerm] = useState('');
	

	useEffect(() => {
		async function getData() {
			const {data} = await axios.get('https://intense-mesa-62220.herokuapp.com/https://restcountries.com/v2/all');
			setData(data);
			setfilteredData(data);
		} 

		getData();
	}, []);
		
	const searchData = ({target}) => {
		console.log(target);
		setTerm(target.value);

		setfilteredData(() => {
			return (data.filter((item) => {
				if (item.name
						.toLowerCase()
						.includes(target.value)) {
					return item.name;
				}
			}))
		});
	}

	const displayData = () => {
		if (data) {
			return (
				filteredData.map((item) => {
					return(
						<li key={item.alpha3Code}>
							{item.name}
						</li>
					)
				})
			)
		}
	}

	return(
		<div>
			<input type="search" defaultValue={term} onChange={searchData} />
			<ul>
				{displayData()}
			</ul>
		</div>
	)
}