import attributeType from "../types/attributeType";
import optionType from "../types/optionType";
import calculateScore from "./calculateScore";

export default function findWinner(
  attributes: attributeType[],
  options: optionType[]
) {
  let winner: { name: string; result: number } = { name: "", result: 0 };
  for (let option of options) {
    if (calculateScore(attributes, option) > winner.result) {
      winner = {
        name: option.name,
        result: calculateScore(attributes, option),
      };
    }
  }
  return winner;
}
