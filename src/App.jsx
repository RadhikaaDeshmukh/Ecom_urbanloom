import './App.css'
import AboutPage from './components/AboutPage'
import BeanBag from './components/BeanBag';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';function App() {

  return (
   <>
    <Router>
    <Navbar />
    <div>
   <Routes>
   <Route path="/about" element={<AboutPage />}/>
   <Route path="/beanbags" element={<BeanBag />}/>
   </Routes>
    </div>
    </Router>
  
   </>
  )
}

export default App
