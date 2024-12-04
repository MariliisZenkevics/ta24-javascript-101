/**
 * DOM API 
 * Kuidas kasutada javascripti HTMLi manipuleerimiseks.
 * Saab kasutada HTML dokumente, kuhu on seotud see js fail.
 * querySelector võtab esimese node'i (nt h1)
 * querySelectAll võtab kogu node listi (nt kogu h1-d)
 */

const h1Element = document.querySelector('h1');
h1Element.innerText  = "Head teed!"

const fruits = ["Apple", "Orange", "Banana", "Mango", "Kiwi"];

const fruitListContainer = document.querySelector('#fruit-list');
const orderedListElement  = document.createElement('ol');

for(let i = 0; i < fruits.length; i++) {
    const listElement = document.createElement('li');
    listElement.innerText = fruits[i];
    orderedListElement.appendChild(listElement);
}

fruitListContainer.appendChild(orderedListElement);