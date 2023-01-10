const highScoresList = document.getElementById('highScoresList');
const topScores = JSON.parse(localStorage.getItem("highScores")) || {};