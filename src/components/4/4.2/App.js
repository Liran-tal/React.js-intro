import Card from "./Card";

// import './App.css';

function App() {
  return (
    <div className="App">
      <Card 
        cardImgSrc="https://source.unsplash.com/random/150×100/?nature,animal"
        cardHeadline="Random Title"
        cardDescription="Random Text"
      />
      <Card 
        cardImgSrc="https://source.unsplash.com/random/150×100/?nature,vacation"
        cardHeadline="Random Title"
        cardDescription="Random Text"
      />
      <Card 
        cardImgSrc="https://source.unsplash.com/random/150×100/?farm,animal"
        cardHeadline="Random Title"
        cardDescription="Random Text"
      />
    </div>
  );
}

export default App;
