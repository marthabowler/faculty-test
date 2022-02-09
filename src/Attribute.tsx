import { useReducer } from "react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "change-number": {
      return { ...state, weight: action.payload.weight };
    }
  }
}

const initialValue: initialValueType = {
  name: "value for money",
  weight: 0.5,
};

interface initialValueType {
  name: string;
  weight: number;
}

export function Attribute(): JSX.Element {
  const [attribute, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <div>
        <h4>{attribute.name}</h4>
      </div>
      <div>
        <p>Weighting: {attribute.weight}</p>
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          value={attribute.weight}
          onChange={(e) => {
            dispatch({
              type: "change-number",
              payload: { weight: parseFloat(e.target.value) },
            });
            console.log(attribute.weight);
          }}
        />
      </div>
    </div>
  );
}
