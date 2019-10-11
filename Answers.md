1. What problem does the context API help solve?

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling. (Prop drilling (also called “threading”) refers to the process you have to go through to get data to parts of the React Component tree.)

Context provides a way to pass data through the component tree without having to pass props down manually at every level.
It generally consists of three building blocks:

- A Context Object
- A Context Provider
- A Context Consumer

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Redux actions are basically JavaScript objects. Actions tell the reducer how to change the state. It must contain a type property. It can optionally contain a payload property

A reducer is a JavaScript function that takes two parameters: the current state and an action. The Reducers manage the way data is kept in store provided by the actions.

The store in Redux holds all of the application’s state. Store is the result of calling createStore, a function from the Redux library.
The store is known as the “single source of truth” in redux because components will get their data from the Store. The store mechanism is so smart because the component will re-render itself when the data changes.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and Component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.

Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

Application state is useful for data that needs to be accessed by multiple components at the same top-level while component state is useful for data that does not need to be used by any other component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. It is a library that allows us to use middleware to intercept the normal Redux flow and make asynchronous API calls from action creators. Our `action-creators` can now return a function instead of an action and this will be given `dispatch` as an argument.

That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
