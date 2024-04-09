# W6D2

## Metaprogramming

---

## Learning Objectives

- Define metaprogramming
- Identify `self` in:
  + class definitions
  + class methods
  + instance methods
- Describe the difference between class variables and class instance variables
- Know how to use `send` and `define_method` 

---

![doge](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/sql/w6d2-metaprogramming/meta-doge.jpg?token=AQCB66LTEQ4A6LKKAZHKK53BMS2OW)


---

## What is Programming?


---

* The essence of programming is defining behaviour

---

### What is Metaprogramming?

---

* Metaprogramming is defining behaviour that will define future behaviour

---

### What is Metaprogramming?

* Often used to dynamically define a suite of similar methods based on undetermined future input to reduce duplicate code

Examples:

* `attr_reader`/`attr_writer`
* `belongs_to`/`has_many`
* `validates` 

- the extent of the lecture will be to explore a small collection of methods used in metaprogramming
- you are encouraged to explore and play around with things that we don't get to in lecture

---

Let's walk through some demos!
