const container = document.querySelector('.container');
const mainCon = document.getElementsByClassName('main');
const clearGrid = document.querySelector('.clear');
const setGrid = document.querySelector('.set-grid');

onStartGrid(20);

setGrid.onclick = function () {
    let gridNumber = prompt('How many grids do you wish?', "");
        removeAllChildNodes(container);
        onStartGrid(gridNumber);  
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function onStartGrid(gridSize){

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for(let i = 1; i <= gridSize*gridSize ; i++){
    const gridBlock = document.createElement('div');
    gridBlock.id = ('gridBlock'+i);
    container.appendChild(gridBlock);
    gridBlock.classList = 'gridBlock'
    }  
    let choices = document.querySelectorAll('.gridBlock');
    choices.forEach(choice => choice.addEventListener('mouseover', play));
    for (let i = 0; i < choices.length; i++) {
        choices[i].style.width = `${600 / gridSize}px`;
        choices[i].style.height = `${600 / gridSize}px`;
    }

}

function play(e){
const userChoice = document.getElementById(e.target.id);
if(userChoice.classList !== ""){
    userChoice.style.backgroundColor = randomColor(0);
    console.log(userChoice)
}else{
    userChoice.style.backgroundColor = randomColor(1);

}
}

randomColor();

clearGrid.onclick = function (){
    const choices = document.querySelectorAll('.gridBlock');
    choices.forEach(choice => {
        choice.style.backgroundColor = "";
    });
}   

function randomColor(e){ 
    const hsl1 = Math.floor(Math.random()*360);
    const hsl2 = Math.floor(Math.random()*100);
    const hsl3 = Math.floor(Math.random()*100);

        
    return `hsl(${hsl1}, ${hsl2 + e}%, ${hsl3}%)`
}