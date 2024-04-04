import './App.css';
import { useModel } from './hooks/useModel';

function App() {

  const {calculate, setCalculate} = useModel();

  return (
    <div className="App">
      <button onClick={()=> setCalculate(calculate+1)}> Click to add</button><br/>
      {calculate}
    </div>
  );
}

export default App;
