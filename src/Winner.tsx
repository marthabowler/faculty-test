import findWinner from "./utils/findWinner";

interface WinnerProps {
  state: any;
}

export default function Winner(props: WinnerProps): JSX.Element {
  let winner = findWinner(props.state.attributes, props.state.options);

  return (
    <>
      {winner.name !== "" && (
        <div>
          <h2>Winner!!</h2>
          <p>{winner.name}</p>
          <p>{winner.result}</p>
        </div>
      )}
    </>
  );
}
