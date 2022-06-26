import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './action /action'
function App() {

  const val = useSelector((state) => state.incReducer);
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Redux</h1>

      <button
        onClick={() => dispatch(decrement())}
      >
        rem
      </button>

      {val}
      
      
      <button
        onClick={() => dispatch(increment())}
      >
        add
      </button>
    </div>
  );
}

export default App;
