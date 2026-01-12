
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Carousel_component from './component/Carousel_component'

function App() {
  
 return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/carousel" element={<Carousel_component />} />
    </Routes>
  )
}

export default App
