# Decision making helper

User experience:

1. Create attributes and assign importance
   Questions:

   - Should these have a restricted number(3?) or should the user be able to add as many as possible?
   - Should we have an input at the top to put in the choices and then the "card" with the weighting bar will show up? Should we have the cards ready and then the user can change the names?

2. Input a series of choices
   Questions:

   - Should we have an input at the top to put in the choices and then the "card" with the weighting bar will show up? Should we have the cards ready and then the user can change the names?

3. For each choice, change the value of that attribute based on its score
   Questions:

   - input box or slider?

4. Show the top choice based on the above

PRIORITIES:

- spend some time initially setting up a workflow and TS app as it will save me time later
- quick wireframe?
- how to useReducer? > try using a more easy version of this > use 2/3 useReducer? > two arrays with one with the attributes and count and one with the series of choices (& attributes)
- how to access the different attributes so that they can be used in the choices?
- how to use react flow?
- how to use a slider?
- try showing an element on react flow

AFTER READING REACT FLOW DOCUMENTATION:

- text input to add an attribute
- with a button to add a node : https://reactflow.dev/examples/save-and-restore/ + also linked to the useReducer and adds to the elements to show as nodes
- we can probably add a slider in a node as here there are react elements: https://reactflow.dev/examples/custom-node/
- change the react flow element to JS as cannot find documentation on the types
