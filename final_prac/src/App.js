import './App.css';
import { About, Contact, Home, Layout } from './pages'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

function App() {

  const history = createBrowserHistory();
  return (
    <div className="App">
      <Layout>
        <BrowserRouter history={history}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Layout>

    </div>
  );
}

export default App;
