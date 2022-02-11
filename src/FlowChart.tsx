import ReactFlow, { Background } from "react-flow-renderer";
import Attribute from "./Attribute";
import attributeType from "./types/attributeType";
import optionType from "./types/optionType";
import { stateType } from "./types/stateType";
import { Action } from "./utils/reducer";
import Option from "./Option";
import Winner from "./Winner";
import { reactFlowDataType } from "./types/reactFlowDataType";

interface FlowChartProps {
  state: stateType;
  dispatch: React.Dispatch<Action>;
}

// TO DO:
// neaten the functions
//

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

  const loadAttributes = (attributes: attributeType[], x: number): any => {
    let initialElements: reactFlowDataType[] = [];

    attributes.forEach((attribute) => {
      initialElements.push({
        id: `${attribute.id}`,
        data: {
          label: <Attribute attribute={attribute} dispatch={props.dispatch} />,
        },
        position: { x: x, y: 0 },
      });
      attribute.id % 2 === 0
        ? (x += 300 * (attribute.id + 1))
        : (x -= 300 * (attribute.id + 1));
    });
    return initialElements;
  };

  const loadOptions = (
    initialElements: reactFlowDataType[],
    x: number,
    y: number,
    options: optionType[]
  ): any => {
    options.forEach((option) => {
      initialElements.push({
        id: `${option.id}option`,
        data: {
          label: (
            <Option
              state={props.state}
              dispatch={props.dispatch}
              option={option}
            />
          ),
        },
        position: { x: x, y: y },
      });
      option.id % 2 === 0
        ? (x += 250 * (option.id + 1))
        : (x -= 250 * (option.id + 1));
    });
    return initialElements;
  };

  const loadWinner = (
    initialElements: reactFlowDataType[],
    options: optionType[]
  ) => {
    if (options.length > 0) {
      initialElements.push({
        id: `winner`,
        data: {
          label: <Winner state={props.state} />,
        },
        position: { x: 600, y: 500 },
      });
      return initialElements;
    }
    return initialElements;
  };

  return (
    <div className="container">
      <ReactFlow
        elements={loadWinner(
          loadOptions(
            loadAttributes(props.state.attributes, 600),
            600,
            250,
            props.state.options
          ),
          props.state.options
        )}
        nodesDraggable={false}
        onLoad={onLoad}
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}
