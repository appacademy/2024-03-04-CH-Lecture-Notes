# W9D3: AJAX & Fetch

---

## Lecture Agenda

+ AJAX Overview
+ Fetch API
+ Promises
+ Async/Await
+ Single Page Applications
+ Kahoot (time permitting)

---

## Learning Objectives

+ Explain what AJAX is and why it is useful
+ Use `fetch` to generate AJAX requests with a variety of intended effects
+ Handle, process, and chain together `Promise` objects
	+ particularly those returned by invocations of `fetch`
+ Rewrite promise-based code written in the more traditional `then()` syntax using the more modern `async`/`await` keywords
+ Describe the differences between multiple and single page applications
+ Refactor a Rails back-end to respond to XMLHTTPRequests with JSON data

---

## AJAX Overview

+ **A**synchronous **J**avascript **A**nd **X**ML
+ An HTTP request that happens in the background
	+ technically an `XMLHttpRequest` (XHR) object
+ Allows us to request, send, and receive data after the document loads
+ Allows us to request, send, and receive data in the background

---

### AJAX vs HTML Requests

![httpreqvsajax](https://www.dotnetcurry.com/images/jquery/Getting-started-with-.ajaxBack-to-Basics_197B/httpreqvsajax.png)

---

### Question: Why?

---

### Answer: To create single page web applications (SPAs)

![multi-vs-spa](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ajax/spa-vs-mpa.png)

---

### Question: How?

---

## Fetch API

+ `fetch` is a method defined on the browser (**not in Node**)
+ Is one of a variety of tools that can be used to make AJAX requests in order to fetch resources across a network
	+ jQuery
  + vanilla JavaScript
+ Takes two arguments - a path string and an options hash
	+ the path can be relative or a full url
  + defaults to a `GET` request unless otherwise specified in the options hash
+ Returns a `Promise` object
	+ will not reject based on the status code of the response

---

### Example #1
 
```js
fetch("/posts/123");
```

---

### Example #2

```js
fetch("/posts/5", {
  method: "DELETE"
});
```

---

### Example #3

```js
const newPost = { content: "What a pleasant day!" };
fetch("/posts", {
  method: "POST",
  body: JSON.stringify(newPost),
  credentials: 'include',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});
```

---

## Demo 1 - A basic "fetch"

---

## Break Time!

---

## Promises

+ A promise is an object that wraps an asychronous action
	+ alternative to writing async functions that take in a completion callback
+ Is a proxy for the action's return value until it resolves
	+ exists in one of three states: `pending`, `fulfilled`, or `rejected`
+ Improves readability of asychronous code
+ Returned by all invocations of `fetch`
	+ can also be instantiated separately

---

### `Promise.prototype.then`

+ Takes a success callback and an optional failure callback as arguments
+ Returns a new promise and can therefore be chained endlessly
+ Execution of chain stops upon throwing an error
	+ will first look for failure callback in immediately subsequent `then`
  + next looks for `Promise.prototype.catch` anywhere down the chain
  
---

### Example

When chaining promises, the return value of the previous `then` method's success callback is passed into the subsequent `then` method's success callback

```js
fetch("/posts/123")
  .then(res => res.json())
  .then(post => console.log(post));
```

**Bonus Question**: What does this tell us about the `json()` method?

---

### `Promise.prototype.catch`

+ Takes a failure callback as its single argument
+ Returns a promise and can therefore be chained

---

### Example

We have to manually check the status code because `fetch` won't do it for us

```js
fetch("/posts/123")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw response;
    }
  })
  .then(post => console.log(post)) // post is the returned 'response' from above
  .catch(errorResponse => console.error(errorResponse)); // errorResponse is the
                                                         // thrown 'response' 
                                                         // from above
```

---

## Demo #2 - `fetch` with Promise syntax

---

## Break Time!

---

## Async/Await

+ Syntactic sugar for writing promise-based code
+ Any function declared as `async` will run asynchronously and return a promise
+ Can attach the `await` keyword to any expression inside an `async` function
	+ used most often in conjunction with asynchronous expressions
+ Internal execution of an `async` function will pause until `await` resolves
	+ assures sequential evaluation of code within the function

Note:
- can technically use `await` keyword at the top-level scope in both the browser and Node, but it is a relatively rare use case

---

## Example

```js
async function getPost(id) {
  try {
     const response = await fetch(`/posts/${id}`);
     if (response.ok) {
       const post = await response.json();
       console.log(post);
     } else {
       throw response;
     }
  } catch (errorResponse) {
      console.error(errorResponse);
  }
}
```

---

## Single Page Applications (SPAs)

+ In **server-side rendering**, every single request causes a new document to be constructed and returned by the backend server
+ In **client-side rendering**, only the initial request (or refresh) causes a new document to be constructed and returned by the backend server
	+ all subsequent requests are AJAX requests
  + after the initial request, all changes to the application are handled by JS code running in the browser
  + this is the pattern used by single page applications (SPAs)

---

![multi-vs-spa](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ajax/spa-vs-mpa.png)

---

### The Front-End

+ When writing `fetch` requests, it is good practice to specify the expected data type of the response using the `Accept` header
	+ typically `text/html` or `application/json`
+ Write JavaScript code that will make our page respond dynamically to the data returned by incoming server responses
	+ DOM manipulation using vanilla JS, jQuery, or libraries like React + Redux
  
---

### The Back-End

+ Will be used primarily as a JSON API going forward
	+ needs to be able to serve up both full HTML documents and JSON data
+ Can dictate that certain routes always return certain data types by default
+ Controller can automatically construct response of proper data type
	+ requires that incoming requests have valid `Accept` header
  + can override the automatic behavior using `respond_to`

---

### Example - Routes

```ruby
# config/routes.rb

defaults format: :json do
  resources :cats
end
```

---

### Example - Controller

```ruby
# app/controllers/cats_controller.rb

class CatsController < ApplicationController
  def index
    @cats = Cat.all

    respond_to do |format|
      format.html { render :index }
      format.json { render :index }
    end
  end
end
```

---

## Demo #3 - using `async/await` to handle Promises

---

## [Kahoot](https://play.kahoot.it/v2/?quizId=6f29decf-a97d-467e-aba0-eb0de1871e76)

---

## Thank you!