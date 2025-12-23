import axios from "axios"
import { useEffect } from "react"

const BASE_URL = "http://localhost:3000"

function App() {

  const updateProduct = async (id, newProductData) => {

    await axios.put(BASE_URL + "/inventory/" + id, newProductData)
  }

  const addProduct = async (newProduct) => {

    await axios.post(BASE_URL + "/inventory", newProduct)
  }

  const getInventory = async () => {
    
    const response = await axios.get(BASE_URL + "/inventory")

    console.log(response.data)
  }

  const getInventoryByID = async (id) => {

    const response = await axios.get(BASE_URL + "/inventory/" + id)

    console.log(response.data)
  }

  useEffect(() => {

    updateProduct(17, {"id": 17, "name": "iron", "quantity": 37, "per_price": 2780})

    //addProduct({"id": 96, "name": "clock", "quantity": 65, "per_price": 650})
    //getInventory()
    //getInventoryByID(16)
  }, [])

  return (
    <div>



    </div>
  )
}

export default App
