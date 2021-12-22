import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Products from "./Products";
import ProductDetail from "./ProductDetail";


class App extends React.Component {

	render () {
		return (
			<div>
				<BrowserRouter>
					<Header/>
						<Route path="/products/:id" component={ProductDetail} />
						<Route path="/products" exact component={Products} />
						<Route path="/" exact component={Homepage} />
				</BrowserRouter>
			</div>
		)
	}
}

export default App;