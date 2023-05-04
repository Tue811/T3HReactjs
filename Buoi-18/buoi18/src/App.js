import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
   <div>
      <Header/>
      <section>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/product" element={<ProductPage/>} />
          </Routes>
        </div>
      </section>
   </div>
  );
}

export default App;
