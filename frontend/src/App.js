import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
  
function App() {
return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route exact path='/resume' element={<Resume/>} />
      </Routes>
      </Router>
);
}
  
export default App;