const setSize = document.querySelector("#size");
setSize.addEventListener('click', ()=>{
    let userSize = Number(prompt("Enter size of the grid:", '16'));

    if(!userSize || userSize <= 1 || userSize > 100)
    {
        alert("Invalid");
        return;
    } 
    createGrid(userSize);
});

let drawingMode=false;

const container = document.querySelector(".container");
container.addEventListener('dblclick', ()=>{
    drawingMode = !drawingMode;
});

const black = document.querySelector("#black");
const color = document.querySelector("#color");
const random = document.querySelector("#random");
const erase = document.querySelector("#erase");
const reset = document.querySelector("#reset");
const colorPicker = document.querySelector("#colorPicker");

let currentMode = "black";
let currentColor = "#000000";

black.addEventListener('click', () => {
    currentMode = "black";
});

random.addEventListener('click', () => {
    currentMode = "random";
});

color.addEventListener('click', ()=>{
    currentMode = "color";
});

colorPicker.addEventListener('input', ()=>{
    currentColor = colorPicker.value;
    currentMode = "color";
}); 

erase.addEventListener('click', () => {
    currentMode = "erase";
});

reset.addEventListener('click',() => {
    const squares = document.querySelectorAll(".container div");
    squares.forEach(square => {
         square.style.backgroundColor="";
    });
})

  
function createGrid(size)
{
    container.innerHTML="";
    for(let i=0;i<(size*size); i++)
    {
        const gridDiv = document.createElement("div");
        gridDiv.style.flex = `0 0 ${100 / size}%`;
        gridDiv.style.height = `${100 / size}%`;
        gridDiv.style.border = "0.5px dotted black";

        gridDiv.addEventListener('mouseover', function() {
            if (drawingMode)
            {
                if(currentMode === "black")
                    gridDiv.style.backgroundColor = "black";
                else if(currentMode === "random")
                {
                   let r = Math.floor(Math.random()*256);
                   let g = Math.floor(Math.random()*256);
                   let b = Math.floor(Math.random()*256);
                   gridDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                }
                else if(currentMode === "color")
                {
                    gridDiv.style.backgroundColor = currentColor;
                }
                else if(currentMode === "erase")
                {
                    gridDiv.style.backgroundColor="";
                }
            }
        });
        container.appendChild(gridDiv);
    }
}