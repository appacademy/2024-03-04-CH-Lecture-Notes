# W6D3

## Rails Routes & Controllers

---

## Learning Objectives
+ Explain the basics of an HTTP request-response cycle
+ Explain how the request-response cycle works with respect to Rails & MVC
+ Explain what a RESTful API is
+ Build Rails Routes, Controllers & Actions corresponding to the 7 RESTful routes

---

## Lecture Agenda
+ MVC Overview
+ HTTP Request-Response Cycle
+ Routes
+ Controllers

---

## MVC Overview

+ We've covered models
+ Next up: Routes and Controllers

![mvc](https://i.ibb.co/W2Yt4MQ/mvc.jpg)

---

## What happens when you go to `google.com` and hit `Enter`?

+ Take 30 seconds to think of some ideas.

---

## The HTTP Request-Response Cycle

![http](https://i.ibb.co/KDrThdX/basic-http-request.png)

+ When you type `www.google.com` in your url bar and hit `Enter`:
    1. Our computer (the client) sends an HTTP request to a server. (GET www.google.com page)
    2. The server handles request and formulates an appropriate response.
    3. The HTTP response is sent back to the client.

+ HTTP:
    - protocol for communication over the internet
    - clients and servers communicate via messages (requests and responses)
    - HTTP requests and responses are just strings
    - HTTP defines how request and response messages are formatted and transmitted

---

## Components of an HTTP Request
  * **Method (HTTP Verb)** (e.g. `GET`, `POST`) - describes what action to perform
  * **Path** (e.g. `/users`) - a string that specifies the resource being requested
  * **Query String** (e.g. `?loc=new+york` - _optional_) - may further specify the resource requested
  * **Body** (e.g. `username=janedoe` - _optional_) - additional data from the client

---

## Anatomy a URL

The **path** and **query string** are part of the URL

![url-parts](https://i.ibb.co/CPh1Knp/anatomy-of-url.png)

* The `path` in an http request is simply the path that is relative to the domain. 
* We won't worry about the domain for now. We'll focus on the `path` for our discussion of HTTP requests and Rails routes and controllers.

---

## Components of an HTTP Request
  * **Method (HTTP Verb)** (e.g. `GET`, `POST`) - describes what action to perform
  * **Path** (e.g. `/users`) - a string that specifies the resource being requested
  * **Query String** (e.g. `?loc=new+york` - _optional_) - may further specify the resource requested
  * **Body** (e.g. `username=janedoe` - _optional_) - additional data from the client

* _Note: the path, the query string, and the request body represent the three main ways to send information in an HTTP request_

---

## HTTP Methods

* `GET` (get something from the database)
* `POST` (insert something into the DB)
* `PATCH`/`PUT` (change something in the DB)
* `DELETE` (remove something from the DB)

---

## Components of an HTTP Response
  * **Status** (e.g. 200, 302, 404)
    - indicates the type of response (whether successful or not)
    - [Common Response Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  * **Body** (e.g. actual HTML document, or data formatted as JSON)
    - the actual data/content the server responded with

---

## Lecture Agenda
+ MVC Overview
+ HTTP Request-Response Cycle
+ Rails Router and RESTful Routes <---
+ Controllers

---

## Rails Router

#### Takes in HTTP Requests, decides where to _send_ them

![mvc](https://i.ibb.co/0Vx12y5/rails-mvc.png)

* The Router instantiates an **instance of a controller** and invokes an action on that controller

---

## REST: Representational State Transfer

#### REST is a standardized way to interpret an http request and extrapolate the desired response from the server

#### A convention that maps HTTP verbs onto CRUD actions

* `POST` -------------> **C**reate (insert record into DB)
* `GET` --------------> **R**ead (retrieve record(s) from DB)
* `PATCH` / `PUT` ----> **U**pdate (update record in DB)
* `DELETE` ----------> **D**estroy (remove record from DB)

A RESTful API defines a predictable way for us to access and manipulate resources in our application.
- Reminder: API = Application Programming Interface. (The public-facing portion of our Rails application.)

---

## RESTful Routes

![restful-routes](https://i.ibb.co/yPzw091/restful-routes.png)

---

## Setting up Routes

* Generate 7 standard RESTful routes for a resource:
  ```rb
  resources :users
  ```
* Can add `only` or `except` option to include/exclude certain actions
  ```rb
  resources :users, only: [:create, :destroy]
  ```
  ```rb
  resources :users, except: [:create, :destroy]
  ```
* Create a custom route in `routes.rb`:
  ```rb
  get '/users', to: 'users#index'
  ```

* Rails Guide on Routing: https://edgeguides.rubyonrails.org/routing.html

---

## Example requests to RESTful API
  * `GET /users` query all users
  * `GET /users/1` query for user with ID 1
  * `POST /users` create a new user
  * `PATCH /users/1` update user with ID 1
  * `DELETE /users/1` delete user with ID 1
  
---

## Can these two routes co-exist?

* `GET /users/:id`
* `GET /users/:username`

Vote with a reaction: ✅ or ❌

---

## [Kahoot! - Quiz 1](https://play.kahoot.it/v2/?quizId=1f5013b7-6dad-49ff-a4be-14b6c2dacf5f)

---

## Lecture Agenda
+ MVC Overview
+ HTTP Request-Response Cycle
+ Rails Router and RESTful Routes
+ Controllers <---

---

## Controllers

#### Takes in HTTP Requests, decides what to _do_ with them & how to respond

![mvc](https://i.ibb.co/0Vx12y5/rails-mvc.png)

* Controllers work with models and views to populate a response to be sent back to the client.

---

## Params

Three ways to pass params in an HTTP request as follows:

* Using _wildcards_ inside a route (e.g. `/users/:id`)
* Via the _query string_ (e.g. `/path?param1=value1&param2=value2`)
* Inside the _request body_ (usually built using a form, basically a bunch of key value pairs)
  * Should avoid for `GET` requests

---

## Setting up Controllers

* Be sure to define your class as below:
  ```rb
  class UsersController < ApplicationController
  end
  ```

---

## [Kahoot! - Quiz 2](https://play.kahoot.it/v2/?quizId=ebd33304-5eda-4b98-aca5-ccd4bddf677c)

---

## Additional tips, good habits for learning Rails

* Read your server log often!
    - You can confirm each request that was made to the server and see the response status
    - Any request parameters will be visible in the log
    - If you have a 500-level server error, check your ser
    ver log for helpful error messages
    - Debuggers will appear in the log
* Use debuggers in your controller actions. Check the information inside of `params`.
* Use Chrome Dev Tools' Network panel to gain additional information about a request/response
* Add a JSON extension to make reading JSON responses easier e.g. JSON Formatter
* Commit to learning Rails' naming conventions early! (e.g., Controller names are pluralized, Model names are singular)

---

## Thank you! 