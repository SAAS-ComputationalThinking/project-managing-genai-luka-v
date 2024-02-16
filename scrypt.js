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







let snakesegment = 1;
var foodlife = "uneaten";
var foodlocation = 10;
var newfood = "true";
var snakeloclist = [];
var snakegrowth = "no"
let onlyafterrun;
let snakecurloc2;
var startmove = "notyet";
var ultix = [];
var wegood = "yeah";

//snake move
setInterval(snakemove, 350);

function snakemove(){
    if (snakelife == "dead"){
        const deadmaybe = document.getElementById("deadtype");
        deadmaybe = "you are now DEAD";

    }
        const snakecurloc5 = document.getElementById(`${ultix[0]}`)
        if(Math.floor((ultix[0])/10)% 2 != 0){
        if((ultix[0]) % 2 == 0){
            if (snakecurloc5) {
            snakecurloc5.style.backgroundColor = "black";
            if (foodlife == "uneaten"){ 
                snakecurloc5.classList.remove("apple");     
                }   
        }
        }
        else{
            if (snakecurloc5) {
                snakecurloc5.style.backgroundColor = "white";
                if (foodlife == "uneaten"){ 
                    snakecurloc5.classList.remove("apple");     
                    }   
        }
    }
}
    if(Math.floor((ultix[0])/10)% 2 == 0){
        if((ultix[0]) % 2 == 0){
            if (snakecurloc5) {
                snakecurloc5.style.backgroundColor = "white";  
                if (foodlife == "uneaten"){ 
                snakecurloc5.classList.remove("apple");     
                }   
        }
        }
        else{
            if (snakecurloc5) {
                snakecurloc5.style.backgroundColor = "black" ; 
                if (foodlife == "uneaten"){ 
                    snakecurloc5.classList.remove("apple");     
                    }       
        }
    }
}

    snakeloclist[0]=snakeloc;
    //console.log(snakeloclist, "this is the snake list")
    //food
    let foodcon;
if (foodlife == "uneaten"){
    foodlocation = (Math.floor(Math.random()*100))+10;
    /*
    for (let r = 0; r < snakeloclist.length; r++) {
        if(foodlocation == snakeloclist[r]){
            wegood = "nope"
            foodlife = "uneaten"
            console.log(wegood);
        }
    }
    console.log(wegood);
    */
    //if(wegood = "yeah"){
    foodcon = document.getElementById(`${foodlocation}`);
    console.log(foodlocation, foodcon);
    foodcon.classList.add("apple");
    //foodcon.classList.remove("asquare");
    foodcon.classList.remove("snakehead");
    foodcon.classList.remove("snakebody");
    foodcon.style.backgroundColor = '';
    // foodcon.style.backgroundColor = "red";
    foodlife = "eaten";
  //  console.log(wegood);
   // }
  //  else{
  //      wegood = "yeah"
  //  }
    
}


//this is the re-color funtion

if(startmove == "true"){
for (let r = 0; r < snakeloclist.length; r++) {
        const bodyatm = document.getElementById(`${snakeloclist[r]}`);
        bodyatm.style.backgroundColor = '';
        bodyatm.classList.add("snakebody");
        bodyatm.classList.remove("asquare");
        //bodyatm.classList.remove("apple");
        bodyatm.classList.remove("snakehead");
        bodyatm.classList.remove("snaketail");
}
//console.log(snakeloclist); 
}
if(startmove == "true"){
    for (let r = 0; r < snakeloclist.length; r++) {
if(snakeloclist[r+1] == snakeloc){
    snakelife = "dead";

}
    }
    //console.log(snakeloclist); 
    }



/*
    if( r != 0){
bodyatm.classList.add("snakebody");
bodyatm.classList.remove("asquare");
bodyatm.classList.remove("snakehead");
snakeloclist[r] = snakeloclist[r-1];
    }
if (r == 0){
    
    bodyatm.classList.add("snakehead");
}





const tailatm = document.getElementById(`${snakeloclist[snakeloclist.length]}`)
if(startmove == "true"){
    if(snakegrowth !="yes"){
    if(parseInt(tailatm.id) % 2 == 0){
        tailatm.backgroundColor = "white";
    snakegrowth ="no";
    }
    else{
        tailatm.backgroundColor = "black"
        snakegrowth ="no";
    }
}
}
*/





if (snakedir == "down"){
    snakeloc = snakeloc+1;
    startmove = "true";
}
if (snakedir == "up"){
    snakeloc = snakeloc-1;
    startmove = "true";
}
if (snakedir == "left"){
    snakeloc = snakeloc-10;
    startmove = "true";
}
if (snakedir == "right"){
    snakeloc = snakeloc+10;
    startmove = "true";

}
if (snakeloc == foodlocation){
    snakesegment = snakesegment+1;
    foodlife = "uneaten";
    console.log (snakeloc ,foodlocation)
    snakegrowth = "yes";
}

if (snakelife == "safe"){
const snakecurloc = document.getElementById(`${snakeloc}`)
snakecurloc.classList.add("snakehead");
snakecurloc.classList.remove("asquare");
snakecurloc.style.backgroundColor = '';
}





let snakelife2;
if(snakelife2 == "dead"){
snakelife = "dead";
}

if(snakeloc> 109|| snakeloc<10){
    console.log("death");
    snakelife2 = "dead";
}




onlyafterrun = "yes";

if(snakegrowth == "yes"){
    snakeloclist.push(snakeloc);
    snakegrowth ="no";
}
ultix[0] = snakeloclist[snakeloclist.length-1];
for (let r = snakeloclist.length - 1; r > 0; r--) {
    
    const snakecurloc4 = document.getElementById(`${snakeloclist[r]}`)
    snakeloclist[r] = snakeloclist[r - 1];
}
/*
for (let sn = 0; sn < snakesegment; sn++){



}
    if (newfood = "true"){
        
    }


*/
}