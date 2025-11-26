import Proverb from "./components/Proverb"

function App() {

  const sayProverb = "Out of sight, out of mind"
  
  return (
    <>
      <Proverb myProverb="A rolling stone gathers no moss"/>

      <Proverb myProverb={sayProverb} />
      
      <Proverb myProverb={"A barking dog never bites"} />
    </>
  )
}

export default App
