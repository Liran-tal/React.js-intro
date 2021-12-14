function App() {
	const data = ["hello", "world"];
  const number1 = 5;
  const number2 =6;
  const string = "I love React!"
  
  return (
    <div className="App">
      <p>
				1) "{data[0]} {data[1]}"
			</p>
      <p>
        2) {number1} + {number2} = {number1 + number2}
      </p>
      <p>
        3) in "{string}" there are {string.length} characters
      </p>
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
