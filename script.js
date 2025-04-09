window.addEventListener('load', function() {
    changeGridSize(10);    
  });

function onButtonClick(){
    const errorMessage = document.getElementById("invalidValue");
    const inputField = document.getElementById("input");
        if(inputField.value > 1 && inputField.value < 100){
            grid.innerHTML = "";
            errorMessage.textContent = "";
            changeGridSize(inputField.value);
        }
    else{
        errorMessage.style.fontSize ="small"
        errorMessage.textContent = "Error: Submit a value between 2 and 99";
        console.log("ERROR");
        
    }
}





function changeGridSize(num){
    const grid = document.getElementById("grid")
    grid.innerHTML = "";
        for(let i = 0; i < num; i++){
            let flexRow = document.createElement("div");
            flexRow.classList.add("flexRow");
            for(let j = 0; j < num; j++){
                const box = document.createElement("div")
                box.classList.add("flexBox")
                box.style.border = "1px solid lightgray";
                box.style.height = `${500 / num}px`;
                box.style.width = `${600 / num}px`;
                flexRow.appendChild(box);
            }
            grid.appendChild(flexRow)
    }
    document.querySelectorAll(".flexBox").forEach(box => {
        box.addEventListener("mouseover", () => {
          box.style.backgroundColor = "black";
        });
      });
}





function defaultCursor(){

    document.querySelectorAll(".flexBox").forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
      });
}

function rgbRandomizer(){
    document.querySelectorAll(".flexBox").forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "rgb(" 
            + Math.floor(Math.random() * 256) + 
            "," + Math.floor(Math.random() * 256) + 
            "," + Math.floor(Math.random() * 256) + ")";
        });
      });
}



function clearColors(){
    document.querySelectorAll(".flexBox").forEach(box => {
            box.style.backgroundColor = "white";
      });
}