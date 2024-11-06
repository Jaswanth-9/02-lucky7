import './App.css';
import LuckyN from './LuckyN';

function App() {
  return (
    <div className="App">
      <LuckyN />
      <LuckyN numDice={3} goal={13}/>
    </div>
  );
}

export default App;
