To prepare for this lecture go through all the demos and slides. Consider going through flexbox froggy to refresh on flex as well.

Note: (3-12-2021) To the next deliverer of this lecture, please create skeleton files for the demos and appropriately update the solution files. From you're friend, Past Instructor.

# W5D3

## CSS Display

* We're going to go over the display property in css today!
---

## Learning Objectives

Prepare for Shakshuka Part 2

* CSS Reset Review
* Display
  + `block`, `inline`, `inline-block`
  + `flex` 🤩
* Float intro

---

## Lecture Outline

* CSS Reset Review
* Display Property
  * Display Demo
* Float
  * Float Demo
* Flex
  * Flex Demo
* Kahoot!

---

### CSS Reset Review

+ Explain what it's for.
+ Go through the setup steps
+ Pull up the demo and walk through it.

---


### Display

+ block: a box that's stacked upon other boxes, content before and after the box appears on a separate line
  + the whole box model as described above applies to block boxes
+ inline: opposite of block, flows with the document's text, appearing on the same line as surrounding text and other inline elements
+ inline-block: mix of the other two, flows with surrounding text/inline elements, can still be sized using width and height, wont be broken across paragraph lines,
  + will fit where it's width and height allow, but outside of that other elements can kinda do their thing

---

### Block

`<div>`
* Tries to be as wide as possible
* Content before and after box appears on separate line
* Can have any other element as a child

---

### Inline

`<span>`
* Allows other elements to sit to its left and right
* Cannot have a width and height set
* Doesn't respect top/bottom margin/padding

---

### Inline-block

* Allows other elements to sit to its left and right
* Respects width/height, and margin/padding (including top/bottom)

---

### Display Demo

---

## Display Demo

This one has all the html you need, just needs to be commented in as we go through it.

### Block

We will start with block, and talk about how it doesn't show up if it has no height. Also talk about how width is as big as can be unless you say otherwise. You can change the width, and the colored area will shrink, but note that because it's a block, it will be on it's own line (it takes up the full width of it's parent). 

With block elements, you can center horizontally using `margin: 0 auto`; 

Also, show how vertical margins collapse. Use the dev tools to inspect the page, and show how the pink and teal boxes' margins do NOT combine, but rather the larger one wins. 

There is a cool attribute selector we can comment in to give all block same width and height.

### Inline

Comment in the html code, and show how it looks different from block. Note that even if we try to give it a width and height, it is ignored.

Additionally, there is another attribute selector (commented out) that gives the font a bigger size and adds some margin and padding. Note that we cannot change the vertical margin/padding (it has no effect)

### Inline-block

No need to touch css for this one. Comment out the html. Show how inline block is like block elements (can be given a width height, and vertical margin/padding) AND renders left to right (like inline). We can experiement with giving it different dimensions.

---

### Back to slides

---

### Float

* Useful for making a print design layout (Like in a newspaper!)
* left, right, none
* clear: left, right, none, both
* Removed from normal flow of page, but things "float" around it (still in flow)

Note:
* The float property can have a value of left, right, or none
* Use the clear property on an element to force it to move below or "clear" floated sibling elements
* You could make a point of saying that float is less widely used now due to the popularity and versatility of display: flex, but you can still find it in some code bases.

---

### Clearfix

* If a floating element is "floating" outside of it's container, this is a clearfix:

```css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

Note: 
* Let students know that you will demo this out because it can be confusing if not seen.
* The clear fix has a long history, and many different iterations existed over the years.
* The main idea is that floating elements can sometimes overlap the container they are supposed to be in.
* To fix it, you use an empty pseudo element after the clearfix container (:after, content: ""), that clears anything to it's left and right (clear: both). display doesn't have to be table, it would work with block.
* If it looks confusing, that's because it is. It is a hacky fix for an old way of doing things, and if you run into it in the wild, this is what it does.
* Tell students they don't need to memorize it and that they can just look it up.

---

### Float Resources
* [CSS Tricks: All About Floats](https://css-tricks.com/all-about-floats/)

---

### Float Demo

---

### Float

We don't need to spend too much time here. Basically, we can comment in the html, and show how floating the image behaves. We can float the element left (it will go to the left of the page, and other elements will flow around it) and same with right. 

We can use clear on sibiling elements. It allows the sibling to "go past" or "clear" the float. In other words, if we float the image right, the p tags will flow to the left. If we want the text below the floated element, we can add a `clear: right` to the first p tag, which says "Hey, don't flow next to elements that are float right; instead, clear past float right elements". Show this with `clear: left` and `clear: both`.

Float the images left and right and comment out the clearfix to show the issue where the container (the pool) collapses and the images stick out below it. That's what the clearfix is meant to solve. Comment it back in to show it's effect. Briefly explain that it just makes a pseudo element that is inside the pool container that clears the images, but because it is inside the container the pool must expand to contain the pseudo element.

---

### Back to slides

---

### Flex

+ If there is one css skill to master - THIS IS IT!
+ goes on the container to affect the layout of the children
+ main idea is to give the container the ability to alter it's childen's placement and order to best fill the available space
+ intended to be a more _flexible_ way of managing the content position and size on a site

Note:
+ row or column, shrink or grow elements as needed
+ flex > float/position
  + vertically centering a block inside a parent
  + making all children take up equal width and height
+ sizing
  + can add flex sizing which offers a proportion of an element compared to others at the same level

---

### Flex Basics

* Add `display: flex` to a parent element
* Specify what main axis will be using `flex-direction`; either `row` or `column`)
* Main axis determines how `justify-content` and `align-items` work

---


### Flex Resources
* [Flex Box Froggy](https://flexboxfroggy.com/)
 + Play it and play it again! Then play it again!
* [CSS Tricks: Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

### Flex Demo

---

### Flex

No need to touch css for this one. Comment out flex html code. We will be experimenting and showing how the flex-direction determines the meaning of justify-content / align-items

+ Stress that flex effects the CHILDREN ELEMENTS of the container that has display: flex;
+ This is a very flexible and reliable way to style!

---

### Back to slides

---

#### A note on CSS projects - Finish them.

---

# Kahoot!

Note: https://play.kahoot.it/v2/?quizId=c961b428-9cf2-47c0-9438-07849243193b