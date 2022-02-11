import ReactFlow, { Background, Controls } from "react-flow-renderer";

import { stateType } from "../types/stateType";
import { Action } from "../utils/reducer";
import loadAttributes from "../utils/loadAttributes";
import loadOptions from "../utils/loadOptions";
import loadWinner from "../utils/loadWinner";

interface FlowChartProps {
  state: stateType;
  dispatch: React.Dispatch<Action>;
}

// TO DO:
// neaten the functions -- DONE (put in seperate files)
// figure out the last type and why it isn't working
// make tests for the functions

const onLoad = (reactFlowInstance: { fitView: () => void }) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

export function FlowChart(props: FlowChartProps) {
  // for each attribute
  //  push the data onto the initialElements
  //then take this array and do the same for the options
  // then take this array and do the same for the winner

  // y positions: attributes 0 and then add 250 or 300 for each options and winner
  // x positions: start from the middle and add to either side (not perfect for even numbers but not a priority)

  //edges:

  // options: for each of the options link to each of the attributes
  // winner: for each of the options link to the winner

  return (
    <div className="container">
      <ReactFlow
        data-testid="flow-chart"
        elements={loadWinner(
          loadOptions(
            loadAttributes(props.state.attributes, props.dispatch, 600),
            props.state,
            props.dispatch,
            600,
            250
          ),
          props.state
        )}
        nodesDraggable={false}
        onLoad={onLoad}
      >
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}
