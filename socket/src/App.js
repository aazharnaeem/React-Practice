import './App.css';
import {io} from 'socket.io-client'
function App() {

  const socket = io('http://localhost:8000')
  console.log(socket)
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
