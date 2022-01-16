import React, {useState, useEffect} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";


export default function App(props) {
	
	const [users, setUsers] = useState([]);
	const [fetchUsers, setFetchUsers] = useState(true);

	useEffect(() => {
		const callAPI = async () => {
			try {
				const {data} = await axios.get("http://localhost:8080/clients/")
				if (data) {
					console.log(data);
					setUsers(data);
				}
			} catch (error) {
				console.error(error);
				// setUsers(error);
			}
		}
		callAPI();
	}, [fetchUsers]);

	const handleClick = () => {
		setFetchUsers(!fetchUsers);
	}

	const displayData = () => {
		return users.map((user) => {
			return (<div>
				<div>{"id: " + user.id }</div>
				<div>{"cash: " + user.cash }</div>
				<div>{"credit: " + user.credit }</div>
			</div>)
		})
	}

	return (
		<div>
			{displayData()}
			<button onClick={handleClick}>
				click
			</button>
		</div>

		// <Router>
		// 	<Routes>
		// 		<Route path={"/"} element={}></Route>
		// 	</Routes>
		// </Router>
	)
}