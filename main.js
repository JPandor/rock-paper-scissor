const buttons = document.querySelectorAll("button")

function playGame(choice){
    let playerChoice = choice;
    let compChoice = Math.random()

    // setting up computer choice
    if (compChoice < .34){
        compChoice = "Rock"
    }else if (compChoice <= .67){
        compChoice = "Paper"
    }else {
        compChoice = "Scissor"
    }
    document.getElementById("compResult").innerText = "Computer chose " + compChoice;

    if (playerChoice == compChoice){
        document.getElementById("result").innerText = "It was a draw. Try Again"
    }else if (playerChoice == "Rock" && compChoice == "Paper"){
        document.getElementById("result").innerText = "You lose! Mwahahahahahaha"
    }else if (playerChoice == "Scissor" && compChoice == "Paper"){
        document.getElementById("result").innerText = "You win! Well Done!"
    }else if (playerChoice == "Paper" && compChoice == "Rock"){
        document.getElementById("result").innerText = "You win! Well Done!"
    }else if (playerChoice == "Paper" && compChoice == "Scissor"){
        document.getElementById("result").innerText = "You lose! Mwahahahahahaha"
    }else if (playerChoice == "Scissor" && compChoice == "Rock"){
        document.getElementById("result").innerText = "You lose! Mwahahahahahaha"
    }else if (playerChoice == "Rock" && compChoice == "Scissor"){
        document.getElementById("result").innerText = "You win! Well Done!"
    }
}