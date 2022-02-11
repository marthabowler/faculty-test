# DECISION MAKING HELPER

# APP ATTRIBUTES

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

# WIREFRAME

https://whimsical.com/decision-making-TwdpHN1YeerqxHtxw4hAs4

# PRIORITIES (1-9 importance)

- spend some time initially setting up a workflow and TS app as it will save me time later: [9]
- wireframe: [8]
- how to useReducer? > try using a more easy version of this > use 2/3 useReducer? > two arrays with one with the attributes and count and one with the series of choices (& attributes): [7]
- how to access the different attributes so that they can be used in the choices? : [8]
- how to use react flow? Play around with it to understand the data architecture and to see if it is worth doing from the start: [8]
- how to use a slider: [6]
- testing: after writing a react component, write a test: [9]
- functionality: [8]
- design: [4]

# DECISIONS

- Change the react flow element to JS as cannot find documentation on the types
- After spending 2-3 hours looking into react flow, I have decided to start working on the attribute component with an input bar to get to grips with useReducer and see if it can be incorporated easily in flow, if not, I will worry about flow if I have time later

# MILLION $ QUESTION: how do you add attribute which are dependent on another state into this state?

# MILLION $ QUESTION: How to change x and y of [react-flow] elements if we are using a state array to create the react flow elements?

# MILLION $ QUESTION: How to declare a useReduce in a functional component?

[import it into the component which will render the React Flow chart and then use it as a label in the component, this means that my [attribute] component only shows the template => declare state at the top level, map through the attribute state and add an element for react flow (+ figure out what to do with the x value - add 100 each time?)]

^ if the above don't work, the strategy will have to change

# AFTER READING REACT FLOW DOCUMENTATION:

- text input to add an attribute
- with a button to add a node : https://reactflow.dev/examples/save-and-restore/ + also linked to the useReducer and adds to the elements to show as nodes
- we can probably add a slider in a node as here there are react elements: https://reactflow.dev/examples/custom-node/

# USE REDUCER

attribute state:
[{attribute: string, weight: number}, {attribute: string, weight: number}...]
this needs two dispatch functions: add a new element to array and change the value of weight

Options state:
[{option: string, total: number}, {option: string, total: number}...]

    or
    [{option: string, attribute: [{name: string, score: number}, {name: string, score: number}], total: number}, {option: string, attribute: [{name: string, score: number}, {name: string, score: number}], total: number}...]

Winner: can just be figured out by selecting the object with the highest score (doesnt need a state)

DECISION on states:
ATTRIBUTES: [{id: number, attribute: string, weight: number}, {id: number, attribute: string, weight: number}...]
OPTIONS: [{id: number, option_name: string, values: [number, number], total:number}, {id: number, option_name: string, values: [number, number], total:number}....]

> using indexes for id may make it easier to extract the values and their associated ids (which will correspond to the indexes of the values)

8th Feb PM:

- wireframe
- plan on README
- play around with react flow

9th Feb AM:

- create attribute element with use reducer
- see if can whittle down into flow element => this worked but it is best for now to use regular react as functionality > looks
- create the attributes component

9th Feb PM:

- create one option element with useReducer and see if it can access the attribute values
- DECIDED to use one state for the useReduce as this was the purpose of the challenge
- Managed to get the options and the attributes working and decided the best way to pick the winner would be through a function
- basic functionality is achieved

10th Feb AM:
decisions:

- Now basic functionality is achieved, pass the state as props in the flow chart and for each option and for each attribute add them to an array which will eventually be the flow chart data
- Worry about the connections between them later
- Managed to plot them onto the react flow data
- managed to get the links between them
- Added some testing to see the functionality of the options and the attributes input
- I want to add some testing for adding to the react flow data array but I don't know much about function mocking
- Maybe a Saturday job but not ultimate

Decisions:

- SPEND TIME FINDING OUT THE TYPE FOR THE STATE and ACTION in the reducer function as it is important
- no work on thursday as got interview but on Friday play around with React Flow + TEST
- TESTING is more important

BUGS:

- when add attribute the choices don't update (importance: 6)
- when choices have the same score, they only pick one as the winner (importance: 5)
- not a bug but testing (importance: 10)
- maybe the UI doesn't make it obvious what the user can do (importance: 6)
- need to think of what the type is for the React Flow data (impportance 8)
- not centered when the number is even in either choices or attributes (importance: 2)
