



const createDiv =() =>{
    const newDiv = document.createElement("div");
    mainContainer.append(newDiv);
    newDiv.classList.add("gridDiv");
    newDiv.textContent="new div content";
}

for(let r =0;r<16;r++){
    for(let i= 0; i<16; i++){
        createDiv()
    }
}
    


