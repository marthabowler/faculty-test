import Attribute from "../Components/Attribute";
import attributeType from "../types/attributeType";
import { reactFlowDataTypeSimple } from "../types/reactFlowDataType";
import { Action } from "./reducer";

const loadAttributes = (
  attributes: attributeType[],
  dispatch: React.Dispatch<Action>,
  x: number
): reactFlowDataTypeSimple[] => {
  let initialElements: reactFlowDataTypeSimple[] = [];

  attributes.forEach((attribute) => {
    initialElements.push({
      id: `${attribute.id}`,
      data: {
        label: <Attribute attribute={attribute} dispatch={dispatch} />,
      },
      position: { x: x, y: 0 },
    });
    attribute.id % 2 === 0
      ? (x += 300 * (attribute.id + 1))
      : (x -= 300 * (attribute.id + 1));
  });
  return initialElements;
};

export default loadAttributes;
