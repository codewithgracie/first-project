import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Analytics from './components/Analytics.jsx';
import Newsletter from './components/Newsletter.jsx';


const App = () => {
  return (
    <div>
      < Navbar />
      < Hero />
      <Analytics />
      <Newsletter />
    </div>
  )
}

export default App