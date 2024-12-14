import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import Header from './components/header/index.jsx'
import Footer from './components/footer/index.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='fixed top-0 w-full z-10'>
      <Header />
    </div>
    <App />
    <Footer />
  </StrictMode>,
)
