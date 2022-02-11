import { useState } from "react";

interface OptionProps {
  state: any;
  dispatch: any;
}

export function Options(props: OptionProps): JSX.Element {
  const [optionName, setOptionName] = useState("");

  function handleSubmitOption(e: { preventDefault: () => void }) {
    e.preventDefault();
    props.dispatch({
      type: "add-option",
      payload: { name: optionName },
    });
    setOptionName("");
  }

  return (
    <div>
      {props.state.attributes.length > 0 && (
        <>
          <p>Add a choice!</p>
          <form onSubmit={handleSubmitOption}>
            <input
              type="text"
              value={optionName}
              onChange={(e) => setOptionName(e.target.value)}
            ></input>
          </form>
          {/* <div className="options">
            {props.state.options.map((option: optionType) => (
              <div key={option.id}>
                <Option
                  state={props.state}
                  dispatch={props.dispatch}
                  option={option}
                />
              </div>
            ))}
          </div> */}
        </>
      )}
    </div>
  );
}
