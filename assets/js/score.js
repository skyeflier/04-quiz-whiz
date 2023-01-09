const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("mostRecentScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = [];
// JSON.parse(localStorage.setItem("highScore")) ||
const maxScore = 3;

console.log(highScores);

console.log(JSON.parse(localStorage.getItem("highScores")));
finalScore.innerText = ('mostRecentScore');

username.addEventListener("keyup", () => {
    // console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score); // this is telling it if b is higher than a, put it above a (higher score)
    highScores.splice(3); // This is keeping the top 3 scores

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/'); //WHAT IS THIS DOING??
};