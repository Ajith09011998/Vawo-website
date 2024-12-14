import Home from './pages/home'
import About from './pages/about'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUs from './pages/contact-us'
import Certificate from './pages/certificate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App