const grid = document.getElementById('snake-grid');
const start = document.getElementById('start');
start.addEventListener('click', snakegrid);

var Occelate = "white";

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
setInterval(gamerun, 1000);
}
var snakelife = true;
var tag = 4;
function gamerun(){
    while (snakelife == true){
        console.log('cool');
        tag = (tag+1);
        if (tag>5000){
            snakelife = false;
        }
    



    }

}
    var snakehead = 46;
    function headmove(){

    }

