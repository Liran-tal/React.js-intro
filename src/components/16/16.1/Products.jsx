import React from "react";
import { Link } from "react-router-dom";
import storeInventory from "./store";

class Products extends React.Component {
	state = {
		storeInventory: storeInventory,
	}	

	componentDidMount = () => {
		this.setState({storeInventory: storeInventory});
	}

	createRoutes = () => {
		if (this.state.storeInventory.length > 0) {
			return (this.state.storeInventory.map((item) => {
					return ( 
						<Link	
							key={item.id}
							to={`/products/${item.id}`} 
						>
							{item.title}
						</Link> 
					);
				}
			))
		}
	}

	render () {
		return (
			<div>
				{this.createRoutes()}
			</div>
		)
	}
}

export default Products;