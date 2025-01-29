import './App.css'
import {createContext,useState} from "react";
import AboutPage from './components/AboutPage'
import BeanBag from './components/BeanBag';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Cart from './components/Cart';
import CartProvider from './components/CartProvider';
import Registartion from './components/Registartion';
import Home from './components/Home';


export const CartContext = createContext();

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
   <CartProvider value={{ isDrawerOpen, setIsDrawerOpen }}>
    <Router>
    <Navbar />
    <div>
   <Routes>
    <Route path="/" element={<Home />}/>
   <Route path="/about" element={<AboutPage />}/>
   <Route path="/beanbags" element={<BeanBag />}/>
   {/* <Route path="/beanbags" element={<BeanBag />}/>
   <Route path="/beanbags" element={<BeanBag />}/> */}
   <Route path="/loginPage" element={<LoginPage />}/>
   <Route path='/registration' element={<Registartion />}/>
   <Route path="/search" element={<Search />}/>
   <Route path="/cart" element={<Cart />}/>
   </Routes>
    </div>
    </Router>
   </CartProvider>
  )
}

export default App
