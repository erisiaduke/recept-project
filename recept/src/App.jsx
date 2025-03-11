import "./App.css"
import Title from "./components/title/title"
import Time from "./components/time/time"
import Ingredients from "./components/ingredients/ingredients"
import Instructions from "./recept/components/instructions/instructions"

function App() {
  return (
    <div className="omlette-container">
      <Title />
      <Time />
      <Ingredients />
      <Instructions />
    </div>
  )
}

export default App;