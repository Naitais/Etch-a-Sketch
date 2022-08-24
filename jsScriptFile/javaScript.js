const createDiv =(newDiv) =>{
    newDiv = document.createElement("div");
    mainContainer.append(newDiv);
    newDiv.classList.add("gridDiv");
}

for(let r =0;r<16;r++){
    for(let i= 0; i<16; i++){
            createDiv()
    }  
}

const hoverFunc= ()=>{
    newDiv=addEventListener("mouseover", (e)=>{
    e.target.classList.add("hovered");
    })
    newDiv = addEventListener("mousedown", (e)=>{
    e.target.classList.remove("hovered");
    })
}

let gridSize;


const getPromptSize=(e)=> {
    gridSize = prompt("Enter the desired Grid Size: ");
    console.log(gridSize);
    e.stopPropagation();
}

askSizeButton.addEventListener("click", getPromptSize);

hoverFunc()


