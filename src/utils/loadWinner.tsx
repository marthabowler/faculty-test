import { reactFlowDataTypeComplex } from "../types/reactFlowDataType";
import { stateType } from "../types/stateType";
import Winner from "../Components/Winner";

const loadWinner = (
  initialElements: reactFlowDataTypeComplex[],
  state: stateType
): any[] => {
  if (state.options.length > 0) {
    initialElements.push({
      id: `winner`,
      data: {
        label: <Winner state={state} />,
      },
      position: { x: 600, y: state.attributes.length * 100 + 350 },
    });
    state.options.forEach((option) =>
      initialElements.push({
        id: `ewinner-${option.id}option`,
        source: `${option.id}option`,
        target: `winner`,
      })
    );

    return initialElements;
  }
  return initialElements;
};

export default loadWinner;
