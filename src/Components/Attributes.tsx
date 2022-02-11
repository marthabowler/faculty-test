import { useState } from "react";
import { stateType } from "../types/stateType";
import { Action } from "../utils/reducer";

interface AttributesProps {
  state: stateType;
  dispatch: React.Dispatch<Action>;
}

export function Attributes(props: AttributesProps): JSX.Element {
  const [attributeName, setAttrbuteName] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    props.dispatch({
      type: "add-attribute",
      payload: { name: attributeName, weight: 0 },
    });
    setAttrbuteName("");
  }

  return (
    <div>
      <p>Add an attribute</p>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="attribute-submit"
          type="text"
          placeholder="Attribute name"
          value={attributeName}
          onChange={(e) => setAttrbuteName(e.target.value)}
        ></input>
      </form>
      {/* <div className="attributes">
        {props.state.attributes.map((attribute: attributeType) => (
          <div key={attribute.id}>
            <Attribute attribute={attribute} dispatch={props.dispatch} />
          </div>
        ))}
      </div> */}
    </div>
  );
}
