import { useReducer } from "react";
import "./App.css";
import { Attributes } from "./Attributes";
import { Options } from "./Options";
import reducer from "./utils/reducer";
import Winner from "./Winner";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    attributes: [],
    options: [],
  });
  return (
    <div className="App">
      <header className="App-header">
        <h2>Decision making time!</h2>
      </header>
      <Attributes state={state} dispatch={dispatch} />
      <Options state={state} dispatch={dispatch} />
      <Winner state={state} />
    </div>
  );
}

export default App;
