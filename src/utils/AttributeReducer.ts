export default function attributesReducer(attributes: any, action: any) {
  switch (action.type) {
    case "change-number": {
      return attributes.map((attribute: any) => {
        if (attribute.id === action.payload.id) {
          return { ...attribute, weight: action.payload.weight };
        }
        return attribute;
      });
    }
    case "add-attribute": {
      return [...attributes, newAttribute(action.payload.name, attributes)];
    }
  }
}

function newAttribute(attributeName: string, attributes: any) {
  return { id: attributes.length, name: attributeName, weight: 0.5 };
}
