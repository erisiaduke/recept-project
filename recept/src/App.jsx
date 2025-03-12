import "./App.css"
import Title from "./components/title/title"
import Time from "./components/time/time"
import Ingredients from "./components/ingredients/ingredients"
import Instructions from "./components/instructions/instructions"
import Nutrition from "./components/nutrition/nutrition"

function App() {
  return (
    <div className="omlette-container">
      <Title />
      <Time />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  )
}

export default App;