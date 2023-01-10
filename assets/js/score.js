const initials = document.getElementById("initials");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("mostRecentScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
console.log(initials)

const highScores = [];
// JSON.parse(localStorage.setItem("highScore")) ||
const maxScore = 3;

finalScore.innerText = ("Save your" + " " + 'mostRecentScore');

initials.addEventListener("keyup", () => {
    // console.log(initials.value);
    saveScoreBtn.disabled = !initials.value;
});

function saveHighScore(e) { // Need the 'e' to pass the event from the HTML
    console.log(highScores);
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: initials.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score); // this is telling it if b is higher than a, put it above a (higher score)
    highScores.splice(3); // This is keeping the top 3 scores

    localStorage.setItem('highScores', JSON.stringify(highScores));
    // window.location.assign('/'); //WHAT IS THIS DOING??
};