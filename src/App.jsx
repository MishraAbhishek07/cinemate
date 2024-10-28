import React from 'react'
import { Allroute } from './routes/Allroute'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { MovieList } from './pages'
import { Outlet, Router } from 'react-router-dom'
import { Footer } from './components'
import { ScrollToTop } from './components/ScollToTop.jsx';

const App = () => {
  return (
    
      <div className="App">
        <ScrollToTop/>
       <Header/>
       <Outlet/>
       <Footer/>
       
       
       
      </div>
    );
}

export default App