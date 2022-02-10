import attributeType from "../types/attributeType";
import optionType from "../types/optionType";

export default function calculateScore(
  attributes: attributeType[],
  option: optionType
) {
  let result = 0;
  for (let attribute of attributes) {
    for (let value of option.values)
      if (value.id === attribute.id) {
        result += attribute.weight * value.score;
      }
    console.log(option.values);
  }
  return result;
}
