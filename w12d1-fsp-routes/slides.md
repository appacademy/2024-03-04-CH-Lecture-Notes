
# W12D1 Full Stack Backend & Frontend Routes

---

## Main Points
  1. API Routes are how we'll be sending and receiving information between our frontend and backend.
  2. Aim to keep our routes RESTful but there may be situations that need a custom route
  4. Include relevant params for each of these routes

---

## Backend (API) Routes
- What information you'll make ajax requests for
- Will that information have its own route or be included in a payload? (ex: no 'likes' index route)
- NOT FRONTEND ROUTES

---

### `users`
+ `GET /api/users` - returns the user information for the User Search feature
+ `POST /api/users` - sign up

---

### `chirps`
+ `GET /api/chirps` - returns relevant chirps (filtered by `data`/`params`)
+ `GET /api/chirps/:id` - returns chirp
+ `POST /api/chirps` - creates a chirp
+ `PATCH /api/chirps/:id` - edit a chirp
+ `DELETE /api/chirps/:id` - remove a chirp

---

### `likes`
+ `POST /api/likes` - like a chirp
+ `DELETE /api/likes` - unlike a chirp

---

### Superfluous Routes - AVOID THEM

+ `GET /api/likes` - all the likes
  + Is this route needed? 
+  NO 
+ `likes` are associated with a chirp. Call the association `likes` when a `chirp` is fetched. 
  + When a `chirp` is fetched, you'd send up the `likes` in the `json.jbuilder`
+ We don't ever need an `index` for all the `likes`. 
+ Don't create routes you will not use. 

+ ***Same reasoning if your app has comments and reviews associated with a post.***

---

### Superfluous Routes - AVOID THEM!

+ `GET /api/users/:user_id/chirps/:id` 
  + How about this route?
+ **PLEASE NO**. If you need to find a chirp, you just need its `id`.
  + e.g. `GET /api/chirps/:id` --> This route is already defined.
+ Don't have two routes leading to the same result. 

---

### `nesting?` 
+ ***You Can...***
  + `GET /api/users/:user_id/chirps` 

+ **But Don't**
  + You have information in your slices of state.
  + You can use `ownProps.match.params.otherId` to retrieve the `id`s you need. 

---

## Backend Routes Demo
+ [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

## Due Dates 
* Backend Routes: W12D3 - 9am

---

## Frontend Routes

---

## Main Points
  1. Frontend Routes are going to be used to determine what components get rendered.

---

## Frontend Routes
+ `/login`
+ `/signup`
+ `/feed` - chirp feed, homepage
+ `/users/:userId` - user profile
+ `/chirps/new` - create a chirp
+ `/chirps/:chirpId` - chirp show
+ `/chirps/:chirpId/edit` - update a chirp

- These are the hash routes that will be visible to the user as they navigate your app.
- Be as semantic as possible
- Add annotations for which component is going to be rendered at each route

---

## Frontend Routes Demo
+ [BlueBird Wiki](https://github.com/appacademy/bluebird/wiki)

---

## Questions

--- 

## Other FSP logistics 

---

### Tips for the FSP

+ Have a working app at every stage of the project. It might not be a
  "good" app, but it should function.
+ Iterate quickly
  + build small pieces to completion
  + test often: write a method, test a method
+ Complete one feature at a time: Write the full stack for each part of your
  app before moving on to the next piece.
+ DON'T write a complete Rails app first and then add React on top.

---

# Due Dates 
* Routes: W12D3 @ 9AM
* Full Proposal: W12D4 @ 9AM 
* TAs will not provide help on full stack projects until the design documents/proposal are finished!
* If design documents/proposal is unfinished come W12D5, then you may receive a strike.

---

## Project Completion Reminder
+ Your progress on this project will directly translate into your readiness and success in the Job Search
+ At a minimum you should complete 60% of your FSP by the end of the two weeks
  + A complete and styled; User Auth, Feature 1 and Feature 2
  + Successful hosting of your website
  + A complete Production README
+ Anything you do not complete will need to be completed before you are approved to start your job search
+ You should aim for 100% completion
  + Success in software development is not aligned with minimum expectations
  + 4 main features and all 7 features is possible in two weeks

---

## Questions?
