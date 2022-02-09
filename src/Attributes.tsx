import { useReducer, useState } from "react";
import Attribute from "./Attribute";
import attributesReducer from "./utils/AttributeReducer";

function newAttribute(attributeName: string, attributes: any) {
  return { id: attributes.length, name: attributeName, weight: 0.5 };
}

interface attributeType {
  name: string;
  id: number;
  weight: number;
}

interface AttributesProps {
  attributes: any;
  dispatch: any;
}

export function Attributes(props: AttributesProps): JSX.Element {
  const [attributeName, setAttrbuteName] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    props.dispatch({ type: "add-attribute", payload: { name: attributeName } });
    setAttrbuteName("");
  }

  return (
    <div>
      <p>Add an attribute</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={attributeName}
          onChange={(e) => setAttrbuteName(e.target.value)}
        ></input>
      </form>
      <div className="attributes">
        {props.attributes.map((attribute: attributeType) => (
          <div key={attribute.id}>
            <Attribute attribute={attribute} dispatch={props.dispatch} />
          </div>
        ))}
      </div>
    </div>
  );
}
