var playerScore = 0;
var pcScore = 0;

function getComputerChoice() {
    var choices = ["ROCK", "PAPER", "SCISSORS"];
    var random = Math.random();
    random = Math.floor(random * choices.length);
    return choices[random];
}
function updateButtonsHuman(choice) {
    switch (choice) {
        case "ROCK":
            playerSelection = "ROCK";
            break;
        case "PAPER":
            playerSelection = "PAPER";
            break;
        case "SCISSORS":
            playerSelection = "SCISSORS";
            break;
    }
    switch (playerSelection) {
        case "ROCK":
            document.getElementsByClassName("human-choice")[0].textContent = "✊";
            break;
        case "PAPER":
            document.getElementsByClassName("human-choice")[0].textContent = "✋";
            break;
        case "SCISSORS":
            document.getElementsByClassName("human-choice")[0].textContent = "✌";
            break;
    }
}

function updateButtonsPC(pcSelection) {
    switch (pcSelection) {
        case "ROCK":
            document.getElementsByClassName("pc-choice")[0].textContent = "✊";
            break;
        case "PAPER":
            document.getElementsByClassName("pc-choice")[0].textContent = "✋";
            break;
        case "SCISSORS":
            document.getElementsByClassName("pc-choice")[0].textContent = "✌";
            break;
    }
}
function checkWinner() {
    var playerSelection =
        document.getElementsByClassName("human-choice")[0].textContent;
    var computerSelection =
        document.getElementsByClassName("pc-choice")[0].textContent;

    if (playerSelection == computerSelection) {
        document.getElementsByTagName("h3")[0].textContent = "TIE";
    } else if (
        (playerSelection == "✋" && computerSelection == "✊") ||
        (playerSelection == "✌" && computerSelection == "✋") ||
        (playerSelection == "✊" && computerSelection == "✌")
    ) {
        playerScore++;
        document.getElementsByTagName("h3")[0].textContent = "Player Wins !!";
    } else if (
        (computerSelection == "✋" && playerSelection == "✊") ||
        (computerSelection == "✌" && playerSelection == "✋") ||
        (computerSelection == "✊" && playerSelection == "✌")
    ) {
        pcScore++;
        document.getElementsByTagName("h3")[0].textContent = "PC Wins !!";
    }
    document.getElementsByTagName("h3")[1].textContent = "Player:" + playerScore;
    document.getElementsByTagName("h3")[2].textContent = "PC:" + pcScore;
    console.log(playerSelection);
}
function playRound() {
    var computerSelection = getComputerChoice();
    console.log(computerSelection);
    updateButtonsPC(computerSelection);
}

function announceWinner() {
    if (playerScore == 5) {
        // document.getElementsByTagName("h3")[0].textContent = "Player Has Won This Round !!";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("text").textContent =
            "Player Has Won This Round !!";
        setTimeout(function () {
            window.location.reload(1);
        }, 5000);
    } else if (pcScore == 5) {
        // document.getElementsByTagName("h3")[0].textContent = "PC Has Won This Round !!";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("text").textContent = "PC Has Won This Round !!";
        setTimeout(function () {
            window.location.reload(1);
        }, 5000);
    }
}
document.getElementById("paper").addEventListener("click", () => {
    playRound();
    updateButtonsHuman("PAPER");
    checkWinner();
    announceWinner();
});
document.getElementById("rock").addEventListener("click", () => {
    playRound();
    updateButtonsHuman("ROCK");
    checkWinner();
    announceWinner();
});
document.getElementById("scissors").addEventListener("click", () => {
    playRound();
    updateButtonsHuman("SCISSORS");
    checkWinner();
    announceWinner();
});
