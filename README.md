# DECISION MAKING HELPER

# APP ATTRIBUTES

1. Create attributes and assign importance

   - Decision: the user be able to add as many as possible.
   - Decision: Add an input at the top to put in the choices and then the "card" with the weighting bar will show up rather than have the cards ready and then the user can change the names, as this will allow them to add as many as they want.

2. Input a series of choices

   - Decision: After adding an attribute, an input will show up at to add choices and then the "card" with the weighting bars (for the attribute scores) will show up.

3. For each choice, change the value of that attribute based on its score
   Questions:

   - Decision: Use a slider

4. Show the top choice based on the above

# WIREFRAME

https://whimsical.com/decision-making-TwdpHN1YeerqxHtxw4hAs4

# PRIORITIES (1-9 importance)

functionality: [9]

- spend some time initially setting up a workflow and TS app as it will save me time later (prettier, eslint...) [9]
- wireframe [8]
- how to useReducer? [8]
  > play around with a simpler version (e.g. counter app)
  > use one or two states (attributes and options)?
  > how to access the different attributes so that they can be used in the options?
- how to use a slider [6]
- testing: after writing a react component, write a test: [9]

design: [6]

- how to use react flow? [8]
  > Play around with it to understand the data architecture and to see if it is worth doing from the start

# DECISIONS

- After spending 2-3 hours looking into react flow, I have decided to start working on the attribute component with an input bar to get to grips with useReducer and see if it can be incorporated easily in flow, if not, I will worry about flow if I have time later.

# AFTER READING REACT FLOW DOCUMENTATION:

- text input to add an attribute
- with a button to add a node : https://reactflow.dev/examples/save-and-restore/ + also linked to the useReducer and adds to the elements to show as nodes
- we can probably add a slider in a node as here there are react components: https://reactflow.dev/examples/custom-node/

- Design is less important so I initially built the react app without using react flow (the types were confusing and I could visualise more clearly what needed to be done without react flow) -- As you can see, I have commented out the Attribute and Option component in Attrbutes and Options, respectively.

- I was also thinking that after creating the Attribute and Option component, I would be able to sift it into the data array used for react flow (as the value of the label key in the Element object).

- I decided to use one only state and declare them at the top level and then import into the component which will render the React Flow Chart (or the Attributes and Options and Winner components) depending on which styling option I choose.

# QUESTION: how do you add attribute which are dependent on another state into this state?

// for each attribute
// in each option object add an object with the attribute id and a score

# QUESTION:

# How to change x and y of [react-flow] elements if we are using a state array to create the react flow elements?

// In order to add to the Reach Flow data, I mapped through the the attributes and options and then added the winner and pushed them onto an array, using three different functions.
/ The above was my initial strategy and it worked, but I was aware that if it wouldn't I would have to change strategy or not use React Flow.
// declare x or y and add to them each time you push an element in the array of data

8th Feb PM:

- built wireframe
- plan on README
- because I wanted to learn something new, I decided to play around with react flow, I copied the example in the documentation and got to grips with the structure of the data and how it feeds into the React Flow component.
- Added width and height to the container as otherwise it doesn't render.

9th Feb AM:

- After realising that I couldn't quite picture yet how React Flow would work yet, I decided to build the app using regular React components.
- I spent some time watching videos on useReducer and created a state holding my attributes and the components which would render the input and then also the attribute card once inputted.
- I managed to whittle down these attributes into a React Flow template, but I realised it might get confusing when added the options.
- Create the attributes component(using useReducer to change the weight and also add to it -- I used a state to store the name of the attribute)

9th Feb PM:

- Decided to use one state for the useReduce as this was the purpose of the challenge
- Created the option/options component with useReducer and see if it can access the attribute values.
  > Each option will have a values key which will store the attribute id and it's score
- Managed to get the options and the attributes working and decided the best way to pick the winner would be through a function which calculates the scores for each option and then returns the winner
- Basic functionality is achieved, however my reducer function is using a lot of "any" type so the priority is to have a look at the error message and figure out what my type is.

- No work on thursday as got interview but on Friday play around with React Flow + TEST

11th Feb AM:

- Spent time figuring out what the types were for reducer and got it working : this was very important as I want to keep the use of "any" to a minimum.
- Now basic functionality is achieved, pass the state as props in the flow chart and for each option and for each attribute add them to an array which will eventually be the flow chart data, worry about the connections between them later.
- Managed to plot them onto the react flow data. Not super happy with my function as quite clunky but it seems to work.
- Managed to get the links between them.
- Added some testing to see the functionality of the options and the attributes input.
- I want to add some testing for adding to the react flow data array but I don't know much about function mocking in testing.

12th Feb:

- Neatened up READ.ME file
- Considered adding more testing but I have worked on the app for 2 and a half days now and very happy with what I have learnt from it so I won't bother (plus it's a weekend and work life balance is important to me)

TO DO:

- when add attribute the choices don't update (importance: 6) > managed to fix this quickly as i now understand better what reducer returns and how it works.
- when choices have the same score, they only pick one as the winner (importance: 5)
- testing (importance: 10)
- maybe the UI doesn't make it obvious what the user can do (importance: 6)
- need to think of what the type is for the React Flow data (impportance 8)
- not centered when the number is even in either choices or attributes (importance: 2)
