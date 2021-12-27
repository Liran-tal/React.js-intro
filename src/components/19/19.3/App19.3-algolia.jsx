import {useState, useEffect} from "react";
import axios from "axios";

export default function App() {
	const [results, setResults] = useState([]);
	const [term, setTerm] = useState('hooks');
	const [search, setSearch] = useState(false);
	const [isLoader, setLoader]	= useState(true);
// 
	
	useEffect(() => {
		setLoader(true);
		async function getResults() {
			try {
				const {data} = await axios.get('https://intense-mesa-62220.herokuapp.com/https://hn.algolia.com/api/v1/search?query=' + term);
				console.log(data.hits);
				setLoader(false);
				setResults(data.hits);
			} catch (error) {
				console.error(error);
			}
		} 

		getResults();
	}, [search]);

// 

	// const toggleLoader = (toggler) => {
	// 	if (toggler) {
	// 		return
	// 	}
	// }

// 
	
	const toSearch = ({target}) => {
		console.log(target);
		setTerm(target.value);
	}

// 
	
	const startSearch = () => {
		setSearch(!search);
	}

// 

	const displayResults = () => {
		if (isLoader) {
			return(
				<div className="ui segment">
					<div className="ui active inverted dimmer">
						<div className="ui text loader">
							Loading
						</div>
					</div>
				</div>
			)	
		}

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
			<input type="search" defaultValue={term} onChange={toSearch} />
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