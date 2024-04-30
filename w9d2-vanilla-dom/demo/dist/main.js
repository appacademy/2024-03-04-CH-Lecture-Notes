/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\nconst groceryForm = document.querySelector('.grocery-form');\nconst groceries = document.querySelector('.groceries');\n\n\nconst lsItems = JSON.parse(localStorage.getItem('items')) || [];\n\n\nconst addItem = (e) => {\n    // debugger;\n    e.preventDefault();\n    const input = document.querySelector(\"input[name='add-grocery']\");\n    const value = input.value;\n\n    lsItems.push({value: value})\n    localStorage.setItem(\"items\", JSON.stringify(lsItems));\n\n    const item = document.createElement(\"li\");\n    item.innerText = value;\n\n    // item.addEventListener(\"click\", markAsDone);\n\n    groceries.appendChild(item);\n\n    input.value = \"\";\n\n\n}\n\nconst markAsDone = (e) => {\n    // debugger;\n    const ele = e.target;\n    ele.classList.toggle(\"done\");\n}\n\n\nconst updateList = () => {\n    lsItems.map(item => {\n        let li = document.createElement('li');\n        li.innerText = item.value;\n        groceries.appendChild(li);\n    });\n}\n// const boo = (e) => {\n//     alert(\"Boo from the groceries ul!\")\n// }\n\ngroceries.addEventListener(\"click\", markAsDone);\n\ngroceryForm.addEventListener(\"submit\", addItem);\nupdateList();\n\n//# sourceURL=webpack://vanilla-dom-skeleton/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;