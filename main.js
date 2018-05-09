'use strict';

const items = document.getElementsByClassName('item'),
    cart = document.getElementById('cart'),
    total = document.getElementById('total');

let dragged;

const handlerDragStart = (event) => {
    dragged = event.target;
    // event.target.style.opacity = .5;
}

// const handlerDragEnd = (event) => {
//     event.target.style.opacity = "";
// }

for (const item of items) {
    item.setAttribute("draggable", "true");
    item.addEventListener("dragstart", handlerDragStart, false);
    // item.addEventListener("dragend", handlerDragEnd, false);
}

const handlerDragOver = (event) => {
      event.preventDefault();
}

// const handlerDragEnter = (event) => {
//     if (event.target.id == "cart") {
//         event.target.style.background = "purple";
//     }
// }

// const handlerDragLeave = (event) => {
//     if (event.target.id == "cart") {
//         event.target.style.background = "";
//     }
// }

const handleDrop = (event) => {
    event.preventDefault();

    let target = event.target;

    while (true) {
        if (target.id == "cart") {
            total.textContent = Number.parseInt(total.textContent) + Number.parseInt(dragged.getAttribute('price'));
        
            target.style.background = "";
            dragged.parentNode.removeChild(dragged);
    
            dragged.setAttribute("draggable", "false");
            target.appendChild(dragged);
            return;
        }
        target = target.parentNode  
        } 
}
 
cart.addEventListener("dragover", handlerDragOver, false);
// cart.addEventListener("dragenter", handlerDragEnter, false);
// cart.addEventListener("dragleave", handlerDragLeave, false);
cart.addEventListener("drop", handleDrop, false);