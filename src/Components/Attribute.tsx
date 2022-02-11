import attributeType from "../types/attributeType";
import { Action } from "../utils/reducer";

interface AttributeProps {
  attribute: attributeType;
  dispatch: React.Dispatch<Action>;
}
export default function Attribute(props: AttributeProps): JSX.Element {
  return (
    <>
      <div className="attribute">
        <h4>{props.attribute.name}</h4>
        <p>Weighting: {props.attribute.weight}</p>
        <input
          type="range"
          min="0.1"
          max="1"
          value={props.attribute.weight}
          step="0.1"
          onChange={(e) => {
            e.preventDefault();
            props.dispatch({
              type: "change-number-attribute",
              payload: {
                weight: parseFloat(e.target.value),
                id: props.attribute.id,
              },
            });
          }}
        />
      </div>
    </>
  );
}
