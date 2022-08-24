const createDiv =(newDiv) =>{
    newDiv = document.createElement("div");
    mainContainer.append(newDiv);
    newDiv.classList.add("gridDiv");
}

const hoverFunc= ()=>{
    newDiv=addEventListener("mouseover", (e)=>{
    e.target.classList.add("hovered");
    })
    newDiv = addEventListener("mousedown", (e)=>{
    e.target.classList.remove("hovered");
    })
}

const createGrid=()=>{
    let gridSize=16;
    for(r =0;r<gridSize;r++){
        for(i= 0; i<gridSize; i++){
                createDiv()
        }  
    }
}

const resetGrid=()=>{
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild)
    }
}

const getPromptSize=(e)=> {
    
    let gridSize = prompt("Enter the desired Grid Size: ");
    if(gridSize>100){
       alert("Enter a number lower than 100.")
    }else{
         console.log(gridSize);
        e.stopPropagation();
        resetGrid()
        for(r =0;r<gridSize;r++){
            for(i= 0; i<gridSize; i++){
                    createDiv()
            }  
        }
    }
    
    
    
}

askSizeButton.addEventListener("click", getPromptSize);

hoverFunc()
createGrid()


