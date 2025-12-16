import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"

function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

    </div>
  )
}

export default App
