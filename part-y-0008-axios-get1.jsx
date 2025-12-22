import axios from "axios"
import { useEffect } from "react"

const BASE_URL = "http://localhost:3000"

function App() {

  const getInventory = async () => {
    
    const response = await axios.get(BASE_URL + "/inventory")

    console.log(response.data)
  }

  useEffect(() => {
    getInventory()
  }, [])

  return (
    <div>



    </div>
  )
}

export default App
