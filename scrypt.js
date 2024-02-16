const grid = document.getElementById('snake-grid');
const start = document.getElementById('start');
start.addEventListener('click', snakegrid);
let snakeloc;
var Occelate = "white";
//arrowpressed
let snakedir;
window.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            console.log('Left arrow key pressed');
            snakedir = "left";
            break;
        case 'ArrowRight':
            console.log('Right arrow key pressed');
            snakedir = "right";
            break;
        case 'ArrowUp':
            console.log('Up arrow key pressed');
            snakedir = "up";
            break;
        case 'ArrowDown':
            console.log('Down arrow key pressed');
            snakedir = "down";
            break;
    }
});
//makegrid
let snakelife;
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
    i = i+1;
    gridItem.id =`${i}${r}`;
    i = i-1;
    grid.appendChild(gridItem);
    }

}
snakeloc = (Math.floor(Math.random()*100))+10;
//snakeloc = 10;
snakelife = "safe";


}







const snakeloclist = document.createElement('ul');
let snakesegment = 1;
var foodlife = "uneaten";
var foodlocation = 10;
var newfood = "true";
//snake move
setInterval(snakemove, 500);

function snakemove(){
    //food
    let foodcon;
if (foodlife == "uneaten"){
    foodlocation = (Math.floor(Math.random()*100))+10;
    if (foodlocation<10){
       //  foodcon = document.getElementById(`${0}${foodlocation}`);
        foodcon = document.getElementById('0' + foodlocation);
    }
    foodcon = document.getElementById(`${foodlocation}`);
    console.log(foodlocation, foodcon);
    foodcon.classList.add("apple");
    foodcon.classList.remove("asquare");
    foodcon.style.backgroundColor = '';
    // foodcon.style.backgroundColor = "red";
    foodlife = "eaten";
    
    
}

if (snakelife == "safe"){
const snakecurloc = document.getElementById(`${snakeloc}`)
snakecurloc.classList.add("snakehead");
snakecurloc.classList.remove("asquare");
snakecurloc.style.backgroundColor = '';

const listItem = document.createElement('li');
listItem.classList.add =(`${snakeloc}`);
snakeloclist.appendChild(listItem);
if (snakedir == "down"){
    snakeloc = snakeloc+1;
}
if (snakedir == "up"){
    snakeloc = snakeloc-1;
}
if (snakedir == "left"){
    snakeloc = snakeloc-10;
}
if (snakedir == "right"){
    snakeloc = snakeloc+10;

}
if (snakeloc == foodlocation){
    snakesegment = snakesegment+1;
    foodlife = "uneaten";
    console.log (snakeloc ,foodlocation)
}
}



/*
for (let sn = 0; sn < snakesegment; sn++){



}
    if (newfood = "true"){
        
    }


*/
}