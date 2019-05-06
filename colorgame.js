
var numsquares = 6;
var colors = []
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay")
var message = document.querySelector("#message");
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset")
var mode = document.querySelectorAll(".mode")

colordisplay.textContent = pickedcolor;
init();

function init(){
    setbuttonlisteners();
    setcolors();
    set();
}

function setbuttonlisteners(){
for(var i=0;i<mode.length;i++){
    mode[i].addEventListener("click",function(){
        mode[0].classList.remove("selected")
        mode[1].classList.remove("selected")
        this.classList.add("selected")

        this.textContent === "Easy"?numsquares = 3:numsquares=6;
        set();
    })
}
}


function set(){
    reset.textContent = "New Colors"
    message.textContent = ""
    h1 = document.querySelector("h1")
    h1.style.background = "steelblue"
    colors = generaterandomcolors(numsquares)
    pickedcolor = pickcolor()
    colordisplay.textContent = pickedcolor;
    
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i]
            squares[i].style.display = "block"
        }
        else
            squares[i].style.display = "none"
    }
}



function setcolors(){

reset.addEventListener("click",function(){
    set();
})

for(var i=0;i<squares.length;i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click",function(){
        var clickedcolor = this.style.background
        if(clickedcolor === pickedcolor){
            message.textContent = "Correct!!"
            changecolor(pickedcolor);
            h1.style.background = pickedcolor 
            reset.textContent = "Play Again"  
        }
        else{
            this.style.background = "#232323";
            message.textContent = "Try Again!!"
        }
    })
}
}


function changecolor(color){
    for(var i=0;i<colors.length;i++){
        squares[i].style.background = color;
    }
}

function pickcolor(){
    return colors[Math.floor((Math.random()*colors.length))]
}

function generaterandomcolors(num){
    var arr = []
    for(var i=0;i<num;i++){
        var r = Math.floor(Math.random()*256)
        var g = Math.floor(Math.random()*256)
        var b = Math.floor(Math.random()*256)

        arr[i] = `rgb(${r}, ${g}, ${b})`;
    }

    return arr;
}