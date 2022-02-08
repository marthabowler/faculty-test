import { useState } from "react";

import ReactFlow, {
  removeElements,
  addEdge,
  Background,
} from "react-flow-renderer";

import initialElements from "./initial-elements";

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const OverviewFlow = () => {
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div className="container">
      <input></input>
      <button>Add a chatacteristic!</button>
      <ReactFlow
        elements={elements}
        nodesDraggable={false}
        onLoad={onLoad}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default OverviewFlow;
