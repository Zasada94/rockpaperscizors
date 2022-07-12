const totalScore = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
	let rpsChoice = ["rock", "paper", "scizors"];
	const index = Math.floor(Math.random() * 3);
	return rpsChoice[index];
}

function getResult(playerChoice, computerChoice) {
	let score;
	if (playerChoice == computerChoice) {
		score = 0;
	} else if (playerChoice == "rock" && computerChoice == "scizors") {
		score = 1;
	} else if (playerChoice == "paper" && computerChoice == "rock") {
		score = 1;
	} else if (playerChoice == "scizors" && computerChoice == "paper") {
		score = 1;
	} else {
		score = -1;
	}
	return score;
}

function showResult(score, playerChoice, computerChoice) {
	const resultDiv = document.getElementById("result");
	const handsDiv = document.getElementById("hands");
	const playerScoreDiv = document.getElementById("player-score");
	if (score == -1) {
		resultDiv.innerText = "You lose";
	} else if (score == 0) {
		resultDiv.innerText = "Its a tie";
	} else {
		resultDiv.innerText = "You won";
	}
	handsDiv.innerText = `👱${playerChoice} vs 💻${computerChoice}`;
	playerScoreDiv.innerText = `Your score: ${totalScore["playerScore"]}`;
}

function onClickRPS(playerChoice) {
	const computerChoice = getComputerChoice();
	const score = getResult(playerChoice, computerChoice);
	totalScore["playerScore"] += score;
	showResult(score, playerChoice, computerChoice);
}

function playGame() {
	const rpsButtons = document.querySelectorAll(".rpsButton");
	rpsButtons.forEach((button) => {
		button.onclick = () => onClickRPS(button.value);
	});
	const endGameButton = document.getElementById("endGameButton");
	endGameButton.onclick = () => {
		endGame(totalScore);
	};
}

function endGame(totalScore) {
	totalScore["playerScore"] = 0;
	totalScore["computerScore"] = 0;

	const resultDiv = document.getElementById("result");
	const handsDiv = document.getElementById("hands");
	const playerScoreDiv = document.getElementById("player-score");

	resultDiv.innerText = "";
	handsDiv.innerText = "";
	playerScoreDiv.innerText = "";
}

playGame();
