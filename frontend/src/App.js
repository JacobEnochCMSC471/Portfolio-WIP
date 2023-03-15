import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
  
function App() {
return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
      </Router>
);
}
  
export default App;