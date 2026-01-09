
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Carousel_component from './component/Carousel_component'

function App() {
  
  return (
    <>
      <BrowserRouter>
       <Routes>
          <Route path="/" element = {<Main/>}></Route>
          <Route path = "/carousel" element={<Carousel_component/>}></Route>
           
        </Routes> 
     </BrowserRouter>
    </>
  )
}

export default App
