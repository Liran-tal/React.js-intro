import Buttons from "./buttons";

// import './App.css';

function App() {
  return (
    <div className="App">
      <Buttons
        text={<><strong>Importent</strong></>}
      />
      <Buttons
        text="Not Importent"
      />
    </div>
  );
}

export default App;
