import attributeType from "../types/attributeType";
import optionType from "../types/optionType";
import optionValueType from "../types/optionValueType";
import { stateType } from "../types/stateType";
import { Action } from "../utils/reducer";

interface OptionProps {
  option: optionType;
  dispatch: React.Dispatch<Action>;
  state: stateType;
}
export default function Option(props: OptionProps): JSX.Element {
  return (
    <>
      <div className="option">
        <h4>{props.option.name}</h4>
        {props.option.values.map((attribute: optionValueType) => (
          <div key={attribute.id}>
            <p>
              {
                props.state.attributes.filter(
                  (att: attributeType) => att.id === attribute.id
                )[0].name
              }
            </p>
            <p>value: {attribute.score}</p>
            <input
              key={attribute.id}
              type="range"
              min="1"
              max="100"
              value={attribute.score}
              step="1"
              onChange={(e) => {
                e.preventDefault();
                props.dispatch({
                  type: "change-number-option",
                  payload: {
                    weight: parseFloat(e.target.value),
                    optionid: props.option.id,
                    attributeid: attribute.id,
                  },
                });
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
