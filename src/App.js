import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-navigation-app">
          <Navigation />
        </div>
        <div className="main-container">
          <Routes>
            <Route path="" element={<Home />} />
          </Routes>
        </div>
        <div className="main-footer-app">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
