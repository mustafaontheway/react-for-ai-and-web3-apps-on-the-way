import axios from "axios"
import { useEffect } from "react"

const BASE_URL = "http://localhost:3000"

function App() {

  const getInventory = async () => {
    
    const response = await axios.get(BASE_URL + "/inventory")

    console.log(response.data)
  }

  const getInventoryByID = async (id) => {

    const response = await axios.get(BASE_URL + "/inventory/" + id)

    console.log(response.data)
  }

  useEffect(() => {
    //getInventory()
    getInventoryByID(16)
  }, [])

  return (
    <div>



    </div>
  )
}

export default App
