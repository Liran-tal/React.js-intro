import { useState, useEffect, useRef } from "react";

export default function App () {

	const [term, setTerm] = useState("");
	const [isEdit, setIsEdit] = useState(false);
	const toFocus = useRef()

	useEffect(() => {
		if (isEdit) {
			toFocus.current.focus();
		}

	}, [isEdit])

	function clickHandler () {
		setIsEdit(!isEdit);
	}

	function displayContent(params) {
		if (isEdit) {
			return (
				<div>
					<input 
						ref={toFocus} 
						type={"search"} 
						defaultValue={term}  
						onChange={({target}) => {setTerm(target.value)}}
					/>
					<button onClick={clickHandler} value="save">
						Save
					</button>
				</div>
			)
		}

		return (
			<button onClick={clickHandler} value="edit">
				Edit
			</button>
		)
	}

	return (
		<div>
			{displayContent()}
		</div>
	)
}