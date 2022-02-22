let gridSize = 10;
let reset = document.querySelector('.reset');
let mainPage = document.querySelector('.main-page');
let canvas = document.querySelector(".canvas");



// Creating grid canvas
canvas.setAttribute('style', `grid-template-columns: repeat(${gridSize}, auto)`);

function gridCreate() {
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            let cell = document.createElement("div");
            cell.classList.toggle("cell");
            canvas.appendChild(cell);
        }

    }
}

gridCreate();

function cellListner(){
    let cellArray = Array.from(document.querySelectorAll(".cell"));
    cellArray.forEach(cell => cell.addEventListener('mouseenter', () => {
        cell.classList.add("active");
    } ));
}   

cellListner();

function resetAll() {
    //cellArray.forEach(cell => cell.classList.remove('active'));
    gridSize = prompt("Enter grid size (max=100)");
    if (gridSize > 0 && gridSize < 100){
        while (canvas.hasChildNodes()){
            canvas.removeChild(canvas.firstChild);
        }
        canvas.setAttribute('style', `grid-template-columns: repeat(${gridSize}, auto)`);
        gridCreate();
        cellListner();
    }
    else
        alert("Enter a number between 0 and 100");
}

reset.addEventListener('click', resetAll);