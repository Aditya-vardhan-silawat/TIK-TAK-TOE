//    TIK TAK TOE GAME 
let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#resetbutton");
let newgamebutton = document.querySelector("#newgamebutton");
let messagecontainer = document.querySelector(".messagecontainer");
let msg = document.querySelector("#msg");
let msg1 = document.querySelector("#msg1");
let messagecontainer1 = document.querySelector(".messagecontainer1");


let turn0 = false;


const winpatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8]
];

const resetgame = () => {
    turn0 = true;
    enableboxes();
    messagecontainer.classList.add("hide");
}


const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if (turn0){
            box.innerText = "0";
            turn0 = false;
            box.style.color = "green";
        }else{
            box.innerText = "X"
            turn0 = true;
            box.style.color = "#f19c79"
        }
        box.disabled = true;

        checkwinner ();
    });
});



const showwinner = (winner) => {
       msg.innerHTML = `CONGURALATIONS THE WINNER IS ${winner}`;
       messagecontainer.classList.remove("hide");
       disableboxes();
}



const checkwinner = () => {
    for(let patterns of winpatterns){
        const pos1val = boxes[patterns[0]].innerText;
        const pos2val = boxes[patterns[1]].innerText;
        const pos3val = boxes[patterns[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                
                showwinner (pos1val) ;
            }
        }
    }
}

newgamebutton.addEventListener("click" , resetgame);
resetbutton.addEventListener("click" , resetgame);