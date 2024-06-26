### W11D5
## Thunk Middleware

---

## Learning Objectives

* Review Redux Cycle
* Remember Rails
* Connect an API backend to React/Redux frontend
* Understand Motivation for Middleware and Thunk

---

## Learning Outline

* Review React Redux Cycle
* Long demo!
  * React Redux Frontend
  * Rails Backend API
  * APIUtils - `fetch`
  * Thunk Action Creators
  * Middleware
* Kahoot!

---

## Recommendations for Today

* Just listen and try to take in _CONCEPTS_ from lecture
* Understand the _MOTIVATION_ for what we build
* Visualize the connection and flow of the code
* Explain it to a friend!

---

## React Review

* Components
* Props

---

## Redux

* Store
  * `getState` (function) -> read
  * `dispatch` (function) -> write
* `Provider` -> context for your whole app
* `useSelector` & `useDispatch` -> React-Redux hooks

---

## Redux Cycle

![Redux Cycle](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_hooks.png)

---

## Redux with Rails

![Redux with Rails](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_hooks_rails.png)

---

## Redux with Rails animated
![Redux Cycle GIF](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_gif.gif)

---

## Rails as a JSON API

* Rails will: 
  - house a React app in a frontend folder
  - respond to HTTP requests from the frontend with data from our database in the form of JSON

---

## Demo: React-Redux Frontend & Rails Backend

---

## Break

---

## Connecting backend & frontend

* Receiving backend data through fetch requests

```js
  fetch('/api/teas')
    .then(res => res.json())
    .then(data => console.log(data));
```

---

### Demo: APIUtils - fetch

---

### What about updating our Redux store?

---

## Thunk Middleware

* Allows you to write _thunk_ action creators that return a _function_ instead of a POJO
* Have actions that are POJOs _or functions_
* **Benefits:**
	* Delay the dispatch of an action
  * Conditionally dispatch actions
* `applyMiddleware()`

---

## Redux actions

* Regular **action creator**:

```js
  export const receiveTeas = teas => {
    return {
      type: RECEIVE_TEAS,
      teas
    }
  };
```

---

## Redux actions: thunks

* **Thunk action creator**:

### Promise syntax
```js
  export const fetchAllTeas = () => (dispatch) => {
    fetch(`/api/teas`)
      .then(res => res.json())
      .then(data => dispatch(receiveTeas(data)));
  };
```

### Async syntax
```js
  export const fetchAllTeas = () => async (dispatch) => {
    const res = await fetch(`/api/teas`);
    const data = await res.json();
    dispatch(receiveTeas(data));
  };
```

---

## Redux actions compared

```js
  export const receiveTeas = teas => ({
    type: RECEIVE_TEAS,
    teas
  });
```

```js
  export const fetchAllTeas = () => async (dispatch) => {
    const res = await fetch(`/api/teas`);
    const data = await res.json();
    dispatch(receiveTeas(data));
  };
```

---

## What is Thunk?! Thunk action creator breakdown

```js
  // thunk action creator
  export const fetchAllTeas = () => {
    // thunk action
    return async (dispatch, getState) => {
        // fetch request
        const res = await fetch(`/api/teas`);
        const teas = await res.json();
        // when we get a response, dispatch regular action
        dispatch(receiveTeas(teas));
        // ex: dispatch({type: RECEIVE_TEAS, teas: teas})
    };
  };
```

---

## DEMO: Thunk Action Creators

---

## Break

---

## Thunk Middleware (Steps)

* IF the action is a function
  * Invoke the action, passing in `dispatch` and `getState`
* (else) the action is a POJO
  * Pass the action along to the next middleware or the reducer(s)

---

![Redux with Rails again](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_hooks_rails.png)

---

## Demystifying the thunk signature

* It looks weird

```javascript
  const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };

  export default thunk;
```

---

## Breaking down thunk

```js
  // applyMiddleware will pass in the store
  // this will be invoked for you
  const thunk = function(store) {
    // applyMiddleware will pass in next
    // next represents next piece of middleware to receive an action
    // this will be invoked for you
    return function(next) {
      // Action is what WE wrote in our code
      // this will be invoked for you
      return function(action) {
        if (typeof action === "function") {
          // invoke the action, i.e. make an AJAX request
          return action(store.dispatch, store.getState);
        }
        return next(action);
      };
    };
  };
```

---

## DEMO: Thunk Middleware

---

## Questions?

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=221f4c7b-123a-4a71-aec1-f53f8e1fe6a3)

---

# THANK YOU