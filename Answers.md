1. What problem does the context API help solve?

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling. (Prop drilling (also called “threading”) refers to the process you have to go through to get data to parts of the React Component tree.)

Context provides a way to pass data through the component tree without having to pass props down manually at every level.
It generally consists of three building blocks:

- A Context Object
- A Context Provider
- A Context Consumer

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Redux actions are basically JavaScript objects. Actions tell the reducer how to change the state. It must contain a type property. It can optionally contain a payload property

A reducer is a JavaScript function that takes two parameters: the current state and an action. The Reducers manage the way data is kept in store provided by the actions.

The store in Redux holds all of the application’s state. Store is the result of calling createStore, a function from the Redux library.
The store is known as the “single source of truth” in redux because components will get their data from the Store. The store mechanism is so smart because the component will re-render itself when the data changes.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!
