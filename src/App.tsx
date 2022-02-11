import { useReducer } from "react";
import "./App.css";
import { Attributes } from "./Attributes";
import { FlowChart } from "./FlowChart";
import { Options } from "./Options";
import reducer from "./utils/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    attributes: [],
    options: [],
  });

  console.log(state);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Decision making time!</h2>
      </header>
      <Attributes state={state} dispatch={dispatch} />
      <Options state={state} dispatch={dispatch} />
      {/* <Winner state={state} /> */}
      <FlowChart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
