import ReactFlow, { Background } from "react-flow-renderer";

import { Attribute } from "./Attribute";

const onLoad = (reactFlowInstance: { fitView: () => void }) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

export function FlowChart() {
  let initialElements: any = [
    {
      id: "1",
      data: {
        label: <Attribute />,
      },
      position: { x: 250, y: 20 },
    },
  ];

  return (
    <div className="container">
      <input></input>
      <button>Add a characteristic!</button>
      <ReactFlow
        elements={initialElements}
        nodesDraggable={false}
        onLoad={onLoad}
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}
