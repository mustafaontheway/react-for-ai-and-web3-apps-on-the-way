import './App.css'

function App() {
  
  const isReady = false 
  const worthIt = true

  return (
    <>
      <div>Do we need? {worthIt && "Yes, we need!"}</div>

      <div>Is it ready?.. {isReady ? "Yes, it's ready" : "No, we need some time..."}</div>
    </>
  )
}

export default App
