import './App.css';
import Home from './pages/home';
import {Route, Routes} from 'react-router-dom'
import Shop from './pages/shop';
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './pages/login';
import Register from './pages/register';
import Contact from './pages/contact';
import About from './pages/about';
import Checkout from './pages/checkOut';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/contact" element={< Contact />} />
        <Route path='/about' element={< About />} />
       <Route path ='/checkout' element ={< Checkout />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
