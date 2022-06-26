import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/products';
import { createBrowserHistory } from 'history'
import SingleProduct from './pages/singleProduct';
function App() {
  const history = createBrowserHistory()
  return (
    <div>
      <BrowserRouter history={history} >
        <Routes>
          <Route exact path='/' element={<Products />} />
          <Route  path='/product/:id' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App