import inventory from "./db.json"
import InventoryItem from "./components/InventoryItem"

function App() {

  //console.log(inventory)
  
  return (
    <div>
      
      {
        inventory.map((product) => {
          
          return <InventoryItem name={product.name} quantity={product.quantity} price={product.per_price} key={product.id}/>
        })
      }
  
    </div>
  )
}

export default App
