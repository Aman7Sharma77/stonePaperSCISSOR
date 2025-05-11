let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const showWinner =(userWin)=>{
    if(userWin){
        console.log("win");
        msg.innerText= "Win";
    }
    else{
        console.log("looose");
        msg.innerText= "Looooose";
    }
}

const darwGAme = ()=>{
    console.log("game draw");
    msg.innerText= "Draw";
}

const getCompChoice = () =>{
    const options =["rock","paper","scissor"];
    const randix = Math.floor(Math.random()*3);
    return options[randix];
}

const playGame = (userChoiceId)=>{
    console.log("user choice =",userChoiceId);
    const compChoice1 = getCompChoice();
    console.log("comp choice =",compChoice1);

    if(userChoiceId=== compChoice1){
        darwGAme();
    } else {
        let userWin = true;
        if(userChoiceId === "rock"){
            userWin = compChoice1 === "paper" ? false : true;
        } else if(userChoiceId === "paper"){
            userWin = compChoice1 === "scissor" ? false : true;
        } else {
            userWin = compChoice1 === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoiceId =choice.getAttribute("id");
        console.log("choice was clicked",userChoiceId);  
        playGame(userChoiceId);

    })
})