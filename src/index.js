import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Main from './components/Main'
//import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <Main />
    <Services />
    {/* <Contact /> */}
    <Footer />
  </>
)
