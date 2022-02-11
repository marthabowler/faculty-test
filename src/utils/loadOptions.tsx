import { reactFlowDataTypeComplex } from "../types/reactFlowDataType";
import { stateType } from "../types/stateType";
import { Action } from "./reducer";
import Option from "../Components/Option";

const loadOptions = (
  initialElements: reactFlowDataTypeComplex[],
  state: stateType,
  dispatch: React.Dispatch<Action>,
  x: number,
  y: number
): reactFlowDataTypeComplex[] => {
  state.options.forEach((option) => {
    initialElements.push({
      id: `${option.id}option`,
      data: {
        label: <Option state={state} dispatch={dispatch} option={option} />,
      },
      position: { x: x, y: y },
    });
    option.id % 2 === 0
      ? (x += 250 * (option.id + 1))
      : (x -= 250 * (option.id + 1));
  });
  state.options.forEach((option) =>
    state.attributes.forEach((attribute) =>
      initialElements.push({
        id: `e${attribute.id}-${option.id}option`,
        source: `${attribute.id}`,
        target: `${option.id}option`,
      })
    )
  );
  return initialElements;
};

export default loadOptions;
