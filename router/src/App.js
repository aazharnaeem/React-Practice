import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Info } from './pages';
import { createBrowserHistory } from 'history';
import Layout from './Layout';
function App() {
  const history = createBrowserHistory()
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>

          <Routes>

            <Route
              exact
              path='/'
              element={<Home />}
            />

            <Route
              path='/info'
              element={<Info />}
            />

            <Route
              path='/contact'
              element={<Contact />} />

            <Route
              path='/about'
              element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
