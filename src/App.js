import './App.css';
import Dice from "./Dice"

function App() {
  return (
    <div className="App">
      <Dice  dice = {[4,8,3]} color="red"/>
      <Dice  dice = {[6,4,2,8]} />
    </div>
  );
}

export default App;
