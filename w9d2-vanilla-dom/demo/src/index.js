
const groceryForm = document.querySelector('.grocery-form');
const groceries = document.querySelector('.groceries');


const lsItems = JSON.parse(localStorage.getItem('items')) || [];


const addItem = (e) => {
    // debugger;
    e.preventDefault();
    const input = document.querySelector("input[name='add-grocery']");
    const value = input.value;

    lsItems.push({value: value})
    localStorage.setItem("items", JSON.stringify(lsItems));

    const item = document.createElement("li");
    item.innerText = value;

    // item.addEventListener("click", markAsDone);

    groceries.appendChild(item);

    input.value = "";


}

const markAsDone = (e) => {
    // debugger;
    const ele = e.target;
    ele.classList.toggle("done");
}


const updateList = () => {
    lsItems.map(item => {
        let li = document.createElement('li');
        li.innerText = item.value;
        groceries.appendChild(li);
    });
}
// const boo = (e) => {
//     alert("Boo from the groceries ul!")
// }

groceries.addEventListener("click", markAsDone);

groceryForm.addEventListener("submit", addItem);
updateList();