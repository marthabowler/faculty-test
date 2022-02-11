import attributeType from "../types/attributeType";
import optionValueType from "../types/optionValueType";
import optionType from "../types/optionType";
import { stateType } from "../types/stateType";

export interface Action {
  type: string;
  payload: {
    id?: number;
    weight: number;
    optionid?: number;
    attributeid?: number;
    name?: string;
  };
}

export default function reducer(state: stateType, action: Action): stateType {
  switch (action.type) {
    case "change-number-attribute": {
      return {
        attributes: state.attributes.map((attribute: attributeType) => {
          if (attribute.id === action.payload.id) {
            return { ...attribute, weight: action.payload.weight };
          }
          return attribute;
        }),
        options: [...state.options],
      };
    }
    case "change-number-option": {
      return {
        attributes: [...state.attributes],
        options: state.options.map((option: optionType) => {
          if (option.id === action.payload.optionid) {
            return {
              ...option,
              values: option.values.map((value: optionValueType) => {
                if (value.id === action.payload.attributeid) {
                  return { ...value, score: action.payload.weight };
                }
                return value;
              }),
            };
          }
          return option;
        }),
      };
    }
    case "add-attribute": {
      if (action.payload.name) {
        return {
          attributes: [
            ...state.attributes,
            newAttribute(action.payload.name, state),
          ],
          options: [...state.options],
        };
      }
      return state;
    }
    case "add-option": {
      if (action.payload.name) {
        return {
          attributes: [...state.attributes],
          options: [...state.options, newOption(action.payload.name, state)],
        };
      }
      return state;
    }
    default:
      return state;
  }

  function newAttribute(
    attributeName: string,
    state: { attributes: attributeType[]; options: optionType[] }
  ): attributeType {
    return {
      id: state.attributes.length,
      name: attributeName,
      weight: 0.5,
    };
  }

  function newOption(
    optionName: string,
    state: { attributes: attributeType[]; options: optionType[] }
  ): optionType {
    let valueArray: optionValueType[] = [];
    state.attributes.forEach((attribute: attributeType) =>
      valueArray.push({ id: attribute.id, score: 50 })
    );

    return {
      id: state.options.length,
      name: optionName,
      values: valueArray,
    };
  }
}
