import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Header, Footer } from './components/common';
import './style.css';



const App = () => {
    return (
    <div>
        <Header />

        <Router>
            <Switch>
                <Route path='/about'>
                    About Me
                </Route>
                <Route path='/portfolio'>
                    Portfolio
                </Route>
                <Route path='/contact'>
                    Contact Me
                </Route>
                <Route path='/'>
                    Home
                </Route>
            </Switch>
        </Router>

        <Footer />
        </div>

        
        
        
    );
}
  
  export default App;