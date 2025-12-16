import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

import Header from "./components/Header"

function App() {

  return (
    <div>

      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>

    </div>
  )
}

export default App
