const grid = document.getElementById('snake grid');
const start = document.getElementById('start');
start.addEventListener('click', snake);

var Occelate = "white";

function snake(){
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
    gridItem.style.height = '10px';
    gridItem.style.width = '10px';
      gridItem.className = 'asquare'; 
      gridItem.id =`${i}${r}`;
      grid.appendChild(gridItem);
    }
}
}