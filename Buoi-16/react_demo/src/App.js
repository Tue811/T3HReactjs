
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
// import Classroom from './components/Classroom'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Routes>
            <Route path="/" element={<HomePage/>} /> 
            <Route path="/shop" element={<ShopPage/>} /> 
            <Route path="/blog" element={<BlogPage/>} /> 
            
            
      </Routes>
      {/* <Categories/> */}
      <Footer/>
      {/* <section>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/list-product" element={<ListProduct/>} />
          </Routes>
        </div>
      </section> */}
   </div>
  );
}

export default App;
