import './App.css'
import AboutPage from './components/AboutPage'
import BeanBag from './components/BeanBag';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Cart from './components/Cart';
// import Registartion from './components/Registartion';


function App() {

  return (
   <>
    <Router>
    <Navbar />
    <div>
   <Routes>
   <Route path="/about" element={<AboutPage />}/>
   <Route path="/beanbags" element={<BeanBag />}/>
   {/* <Route path="/beanbags" element={<BeanBag />}/>
   <Route path="/beanbags" element={<BeanBag />}/> */}
   <Route path="/loginPage" element={<LoginPage />}/>
   <Route path="/search" element={<Search />}/>
   <Route path="/cart" element={<Cart />}/>
   </Routes>
    </div>
    </Router>
  
   </>
  )
}

export default App
