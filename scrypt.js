const grid = document.getElementById('snake-grid');
const start = document.getElementById('start');
start.addEventListener('click', snakegrid);

var Occelate = "white";
//arrowpressed
window.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            console.log('Left arrow key pressed');
            break;
        case 'ArrowRight':
            console.log('Right arrow key pressed');
            break;
        case 'ArrowUp':
            console.log('Up arrow key pressed');
            break;
        case 'ArrowDown':
            console.log('Down arrow key pressed');
            break;
    }
});
//makegrid
function snakegrid(){
    let gridItem;
for (let i = 0; i < 10; i++) {
    if (i%2 == 0){
        Occelate = "white";
    }
    else {
        Occelate = "black";
    }
    for (let r = 0; r < 10; r++) {
        gridItem = document.createElement('div');
        gridItem.style.left = ((i*43)+100).toString() + 'px';
        gridItem.style.top = ((r*43)+50).toString() + 'px';
        if (Occelate == "white") {
            Occelate = "black";
    }
    else {
        Occelate = "white";
    }
    if (Occelate == "white"){
        gridItem.style.backgroundColor = 'white';
    }
    else {
        gridItem.style.backgroundColor = "black";
        console.log('literllhy');
    }
    gridItem.className = 'asquare'; 
    gridItem.id =`${i}${r}`;
    grid.appendChild(gridItem);
    }

}

}
var foodlife = "uneaten";
var foodlocation = 10;
//snake move
setInterval(snakemove, 500);

function snakemove(){
    //food
    let foodcon;
if (foodlife == "uneaten"){
    foodlocation = Math.floor(Math.random()*100);
    foodcon = document.getElementById(`${foodlocation}`);
    console.log(foodlocation, foodcon);
    foodcon.classList.add("apple");
    foodcon.classList.remove("asquare");
    foodcon.backgroundColor.remove("black");
    foodcon.backgroundColor.remove("white");
    // foodcon.style.backgroundColor = "red";
    foodlife = "eaten";
    
    
}

}