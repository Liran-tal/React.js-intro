import React from "react";



class TextArea extends React.Component {

	render () {
		console.log();
		return (
			<div>
				<textarea 
					onChange={this.props.catchValue}
					cols="30" 
					rows="10"
					value={this.props.text}
					placeholder={this.props.placeHolder}
				>
				</textarea>
				<button
					onClick={this.props.btnOnClick}
				>
					{this.props.btnText}
				</button>
			</div>
		)
	}
}

export default TextArea;