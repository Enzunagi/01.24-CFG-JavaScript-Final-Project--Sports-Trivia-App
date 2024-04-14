const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


// Iterates through the highScores array and creates a new array with formatted list items for each score
highScoresList.innerHTML = highScores.map(score => {
  return `<li class= "high-score"> ${score.name} - ${score.score} </li>`;
}).join("");
