/**
 * DOM API 
 * Kuidas kasutada javascripti HTMLi manipuleerimiseks.
 * Saab kasutada HTML dokumente, kuhu on seotud see js fail.
 * querySelector võtab esimese node'i (nt h1)
 * querySelectAll võtab kogu node listi (nt kogu h1-d)
 * ! pöörab true false' iks nt: if(!fruitInput.trim()){ - antud blokk eemaldab tühikud stringi eest ja tagant, 
 * kui on tühikud, tagastatakse false' ina, ja katkestatakse tegevus
 */

const h1Element = document.querySelector('h1');
h1Element.innerText = "Head teed!"

const fruits = ["Apple", "Orange", "Banana", "Mango", "Kiwi"];

const fruitListContainer = document.querySelector('#fruit-list');


function renderList() {
    fruitListContainer.innerHTML = "";
    const orderedListElement = document.createElement('ol');

    for(let i = 0; i < fruits.length; i++) {
        const listElement = document.createElement('li');

        const spanElement = document.createElement('span');
        spanElement.innerText = fruits[i];

        const deleteButton = document.createElement('button');
        deleteButton.innerText = "🗑️";
        deleteButton.classList.add('delete-btn');
        deleteButton.setAttribute('data-index', i);

        listElement.appendChild(spanElement);
        listElement.appendChild(deleteButton);

        orderedListElement.appendChild(listElement);
    }
    fruitListContainer.appendChild(orderedListElement);
};

renderList();

const dontTouchMeButton = document.querySelector('#dont-touch-me-button');

dontTouchMeButton.addEventListener('click', (event) => {
    console.log(event);
    alert("Ei tohtinud ju.");
});

const addNewFruitForm = document.querySelector('#add-new-fruits-form');
addNewFruitForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const fruitInput = formData.get('fruit');
    console.log(fruitInput);

    if(!fruitInput.trim()) return;
    
    fruits.push(fruitInput);
    renderList();

    event.target.reset();
});

//Kustutame elemente

fruitListContainer.addEventListener('click', (event) => {
    const buttonElement = event.target.closest('.delete-btn');
    const index = parseInt(buttonElement.getAttribute("data-index"));

    // TODO: implement  check for index
    fruits.splice(index, 1);

    renderList();
})