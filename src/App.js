import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Header, Footer, PageTitle } from './components/common';
import Contact from './components/contact/Contact';
import Portfolio from './components/project/Project';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import './style.css';
import Project from './components/project/Project';
import PortfolioList from './components/portfolioList/PortfolioList';



const App = () => {
    return (
    <div>
        <Header />        
            <Routes>
                <Route path='/about' element={<><PageTitle title='About Me' /> <About /></>} />
                
                <Route path='/portfolio' element={<><PageTitle title='Portfolio' /> <PortfolioList /></>} />
                    
                <Route path='/contact' element={<><PageTitle title='Contact' /> <Contact /></>} />
                
                <Route path='/resume' element={<><PageTitle title='Resume' /> <Resume /></>} />

                <Route path='/' element={<><PageTitle title='About Me' /> <About /></>} />
            
            
            </Routes>
        <Footer />
        </div>

        
        
        
    );
}
  
  export default App;