import {useState, useEffect} from "react";
import axios from "axios";

export default function App() {
	const [results, setResults] = useState([]);
	const [term, setTerm] = useState('hooks');
	const [search, setSearch] = useState(false);
// 
	
	useEffect(() => {
		const source = axios.CancelToken.source()
		console.log(source);
		async function getResults() {
			try {
				const {data} = await axios.get('https://intense-mesa-62220.herokuapp.com/https://hn.algolia.com/api/v1/search?query=' + term, {
					cancelToken: source.token}).catch(function (thrown) {
						if (axios.isCancel(thrown)) {
							console.error('Request canceled', thrown.message);
						} 
						// else {
						// 	// handle error
						// }
					});

				console.log(data.hits);
				console.log(search);
				setResults(data.hits);
			} catch (error) {
				console.error(error);
			}
		} 

		if (search) {
			getResults();
		}
		else {
			source.cancel('Operation canceled by the user.');
		}
	}, [search]);

// 
	
	const startSearch = () => {
		setSearch(!search);
	}

// 

	const displayResults = () => {

		return (
			results.map((item) => {
				return(
					<li key={item.objectID}>
						{item.title}
					</li>
				)
			})
		)
	}

// 
	
	return(
		<div>
			{/* <input type="search" defaultValue={term} onChange={toSearch} /> */}
			<button
				onClick={startSearch}
			>
				Search
			</button>
			<ul>
				{displayResults()}
			</ul>
		</div>
	)
}