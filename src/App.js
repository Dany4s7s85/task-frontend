import { useEffect, useState } from 'react';
import './App.css';
import InputBudget from './components/input';
import ComboList from './components/list';
import axios from 'axios'
import makeCombos from './utils/makeCombos';

function App() {
  const [arr, setArr] = useState([]);
  const [comboList, setComboList] = useState([]);
  const [input, setInput] = useState(0);
  const [budget, setBudget] = useState(0);
  const getData = async () => {
    const response = await axios.post('http://localhost:3000/task', { budget })
    console.log(response?.data)
    setComboList(response?.data)
  }
  useEffect(() => {
    getData();
  }, [budget])

  const handleBudgetChange = (e) => {
    setInput(e.target.value);
    // call makeCombos here...
  }

  const handleSubmit = () => {
    setBudget(input)
  }

  return (
    <div className="App">
      <InputBudget input={input} handleBudgetChange={handleBudgetChange} />
      <button style={{ padding: '10px' }} onClick={handleSubmit}>submit</button>
      <ComboList comboList={comboList} />
    </div>
  );
}

export default App;
