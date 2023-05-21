import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import MetalBenders from './pages/metalbenders';
import CsProjects from './pages/csprojects'
  
function App() {
return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<About/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/portfolio' element={<Portfolio/>} />
          <Route exact path='/resume' element={<Resume/>} />
          <Route exact path = '/portfolio/metalbenders' element = {<MetalBenders/>}/>
          <Route exact path = '/portfolio/csprojects' element = {<CsProjects/>}/> 
      </Routes>
      </Router>
);
}
  
export default App;