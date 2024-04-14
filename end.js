const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreButton");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const max_high_scores = 10;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreButton.disabled = !username.value;
})

//Saving high score to the end page
saveHighScore = e => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(max_high_scores);

  //Converts the updated highScores array to a JSON string and stores it in the local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign('/highscores.html')
};