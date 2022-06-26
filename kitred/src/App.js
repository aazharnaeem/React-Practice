import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './redux/counter'
function App() {
const {value} = useSelector(state => state.counter)
console.log(value)
const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Redux Tooklit</h1>

      <button
      onClick={()=>dispatch(decrement())}
      >rem</button>
      {value}
      <button
      onClick={()=>dispatch(increment())}  
      >add</button>
    </div>
  );
}

export default App;
