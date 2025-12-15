import { useEffect, useState } from "react"

function App() {

  const [name, setName] = useState("Mustafa")

  const [year, setYear] = useState(2025)

  useEffect(() => {
    console.log("Always, I'm here!") 
  })

  useEffect(() => {
    console.log("First render worker. Not always... I'm lazy:)")
  }, [])

  useEffect(() => {
    console.log("First render worker and 'year' state changes...")
  }, [year])
  
  useEffect(() => {
    console.log("First render worker and 'name' state changes...")
  }, [name])
  
  useEffect(() => {
    console.log("First render worker and 'name' or 'year' state changes...")
  }, [year, name])

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={() => setName("Mustafa Büyükdereli")}>Add last-name</button>
      <p>Year is {year}</p>
      <button onClick={() => setYear(2026)}>New Year</button>
    </div>
  )
}

export default App
