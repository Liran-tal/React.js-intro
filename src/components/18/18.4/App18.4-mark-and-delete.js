import React, { useState } from 'react'
import CheckBox from './checkbox';

const array = ["one", "two", "three", "four", "five"];

function createObjects (array) {
	return (
		array.map((item) => {
			return {
				id: item,
				name: item,
				isChecked: false,
			}
		})
	)
}


export default function App() {
	const [items, setItems] = useState(createObjects (array));

	const displayItems = () => {
		return items.map((item) => {
			return (
				<CheckBox 
					key={item.id}
					id={item.id}
					name={item.name}
					onChange={onChange}
					isChecked={item.isChecked}
				/>
		)})
	}

	const onChange = ({target}) => {
		const tempArray = [...items];
		const item = items.find((item) => {
			return item.id === target.id;
		})
		item.isChecked ^= 1;

		setItems(tempArray);
	}

	const deleteChecked = () => {
		
		setItems(
			items.filter((item) => {
				if (!item.isChecked) {
					return item;
				}
			})
		);
	}

	const resetItems = () => {
		setItems(createObjects(array));	
	}

	return (
		<div>
			<button
				onClick={deleteChecked}
			>
				Delete
			</button>
			<button
				onClick={resetItems}
			>
				Reset
			</button>
			{displayItems()}
		</div>
	)
} 