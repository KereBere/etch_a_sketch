const container = document.querySelector('.container');
const gridBlock = document.createElement('div');
const mainCon = document.getElementsByClassName('main');
const clearButton = document.querySelector('.clear');
const setGrid = document.querySelector('.set-grid');
let gridNumber = 400;


setGrid.onclick = function () {
    number = prompt("Enter a number less 100", "");
    gridNumber = number * number;
    console.log(gridNumber);
}

for ( let i = 0; i < gridNumber ; i++){
    const gridBlock = document.createElement('div');
    gridBlock.id = ('gridBlock'+i);
    gridBlock.classList = "gridBlock";
    container.appendChild(gridBlock);

}
 
const choices = document.querySelectorAll('.gridBlock');


choices.forEach(choice => choice.addEventListener('mouseover', play));


function play(e) {
    userChoice = document.getElementById(e.target.id);
    userChoice.style.backgroundColor = "black";
    console.log(userChoice); 
}


//Create the Grid
clearButton.onclick = function () {
    const selectBlock = document.querySelectorAll('.gridBlock');
    for (let i = 0; i < selectBlock.length; i++) {
        selectBlock[i].style.backgroundColor = "pink";
    }
    console.log('hele');
  };



// clearButton.addEventListener("click", function(){
//     alert("dwadada");
// });
