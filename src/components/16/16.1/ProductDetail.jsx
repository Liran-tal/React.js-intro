import React from "react";
import storeInventory from "./store";

class ProductDetail extends React.Component {

	renderGetProduct = () => {
		const product = storeInventory[this.props.match.params.id - 1];

		return (
			<div className="ui segment">
				<img 
					class="ui centered medium image" 
					src={product.imageUrl}
					alt={product.title}
					/>
				<h4>
					{product.title}
				</h4>
				<p>
					Price: {product.price}
				</p>
				<p>
					Size: {product.size}
				</p>
			</div>
		)
	}
	
	render () {
		console.log(this.props);
		return (
			<div class="ui segment">
				{this.renderGetProduct()}
			</div>
		)
	}
}


export default ProductDetail;