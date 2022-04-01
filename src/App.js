import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Header, Footer, PageTitle } from './components/common';
import './style.css';



const App = () => {
    return (
    <div>
        <Header />        
            <Routes>
                <Route path='/about' element={<PageTitle title='About Me' />} />
                
                <Route path='/portfolio' element={<PageTitle title='Portfolio' />} />
                    
                <Route path='/contact' element={<PageTitle title='Contact' />} />
                
                <Route path='/resume' element={<PageTitle title='Resume' />} />

                <Route path='/' element={<PageTitle title='Home' />} />
            
            
            </Routes>
            

        <Footer />
        </div>

        
        
        
    );
}
  
  export default App;