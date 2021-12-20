import React from "react";


function InputField (props) {
	
	return (
		<input 
			type= {props.type}
			value={props.value}
			onChange={props.onChange}
			onKeyPress={props.onKeyPress}
			required={props.isRequired}
			disabled={props.isDisabled}
			autoFocus={props.isFocus}
		/>
	)
}

export default InputField;