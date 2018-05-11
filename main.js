'use strict';

const items = document.getElementsByClassName('item'),
      cart = document.getElementById('cart'),
      total = document.getElementById('total');

const handlerDragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.style.opacity = .5;
}

const handlerDragEnd = (event) => {
    event.target.style.opacity = "";
}

const handlerDragOver = (event) => {
    event.preventDefault();
}

const handleDrop = (event) => {
    event.preventDefault();

    let target = event.target;

    while (true) {
        if (target.id == "cart") {

            let id = event.dataTransfer.getData("text/plain");
            let item = document.getElementById(id);

            amount = parseInt(item.getAttribute('price'));
            cart.dispatchEvent(count);
            
            item.parentNode.removeChild(item);
            item.setAttribute("draggable", "false");
            target.appendChild(item);
            return;
        }
        target = target.parentNode
    }
}

let amount = 0;
const count = new Event('build');
const handleCount = (event) => {
    total.textContent = parseInt(total.textContent) + parseInt(amount);
}

for (const item of items) {
    item.setAttribute("draggable", "true");
    item.addEventListener("dragstart", handlerDragStart, false);
    item.addEventListener("dragend", handlerDragEnd, false);
}

cart.addEventListener("dragover", handlerDragOver, false);
cart.addEventListener("drop", handleDrop, false);
cart.addEventListener('build', handleCount, false);