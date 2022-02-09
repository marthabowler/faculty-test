interface AttributeProps {
  attribute: any;
  dispatch: any;
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
              type: "change-number",
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
