import { useReducer } from "react";
import "./App.css";
import { Attributes } from "./Attributes";
import attributesReducer from "./utils/AttributeReducer";
// import { FlowChart } from "./FlowChart";

function App() {
  const [attributes, dispatch] = useReducer(attributesReducer, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Decision making time!</h2>
      </header>
      {/* <FlowChart /> */}
      <Attributes attributes={attributes} dispatch={dispatch} />
    </div>
  );
}

export default App;
