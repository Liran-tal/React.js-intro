
const data = [
	{ name: "CSS", completed: true },
	{ name: "JavaScript", completed: true },
	{ name: "Learn React", completed: false },
	{ name: "Learn mongoDB", completed: false },
	{ name: "Learn Node JS", completed: false },
]

export default function App() {
	
	

	const createComponent = () => {
		return data.map((task) => {
			return (
				<Task task={task} key={Math.floor(Math.random * 10000)}/>
			)
		})
	}

	return (
		createComponent()
	)
}