/* =========================================================
ZERO OUT
First working version + timer
========================================================= */

/* =========================================================
ANIMAL DATABASE
========================================================= */

const animals = {

A: [
{ name: "Alligator", emoji: "🐊" },
{ name: "Ant", emoji: "🐜" },
{ name: "Antelope", emoji: "🦌" },
{ name: "Armadillo", emoji: "🦔" },
{ name: "Axolotl", emoji: "🦎" }
],

B: [
{ name: "Bear", emoji: "🐻" },
{ name: "Beaver", emoji: "🦫" },
{ name: "Bee", emoji: "🐝" },
{ name: "Buffalo", emoji: "🦬" },
{ name: "Butterfly", emoji: "🦋" }
],

C: [
{ name: "Cat", emoji: "🐱" },
{ name: "Cheetah", emoji: "🐆" },
{ name: "Chicken", emoji: "🐔" },
{ name: "Crab", emoji: "🦀" },
{ name: "Crocodile", emoji: "🐊" }
],

D: [
{ name: "Deer", emoji: "🦌" },
{ name: "Dolphin", emoji: "🐬" },
{ name: "Donkey", emoji: "🫏" },
{ name: "Duck", emoji: "🦆" },
{ name: "Dragonfly", emoji: "🪰" }
],

E: [
{ name: "Eagle", emoji: "🦅" },
{ name: "Elephant", emoji: "🐘" },
{ name: "Elk", emoji: "🦌" },
{ name: "Eel", emoji: "🐍" }
],

F: [
{ name: "Fox", emoji: "🦊" },
{ name: "Falcon", emoji: "🦅" },
{ name: "Frog", emoji: "🐸" },
{ name: "Flamingo", emoji: "🦩" },
{ name: "Ferret", emoji: "🦦" }
],

G: [
{ name: "Giraffe", emoji: "🦒" },
{ name: "Goat", emoji: "🐐" },
{ name: "Gorilla", emoji: "🦍" },
{ name: "Goose", emoji: "🪿" }
],

H: [
{ name: "Hedgehog", emoji: "🦔" },
{ name: "Hippo", emoji: "🦛" },
{ name: "Horse", emoji: "🐴" },
{ name: "Hawk", emoji: "🦅" }
],

I: [
{ name: "Iguana", emoji: "🦎" },
{ name: "Impala", emoji: "🦌" },
{ name: "Ibis", emoji: "🐦" }
],

J: [
{ name: "Jaguar", emoji: "🐆" },
{ name: "Jellyfish", emoji: "🪼" },
{ name: "Jackal", emoji: "🦊" }
],

K: [
{ name: "Kangaroo", emoji: "🦘" },
{ name: "Koala", emoji: "🐨" },
{ name: "Kiwi", emoji: "🥝" },
{ name: "Kingfisher", emoji: "🐦" }
],

L: [
{ name: "Lion", emoji: "🦁" },
{ name: "Leopard", emoji: "🐆" },
{ name: "Llama", emoji: "🦙" },
{ name: "Lobster", emoji: "🦞" }
],

M: [
{ name: "Monkey", emoji: "🐒" },
{ name: "Moose", emoji: "🫎" },
{ name: "Mouse", emoji: "🐭" },
{ name: "Meerkat", emoji: "🦦" }
],

N: [
{ name: "Narwhal", emoji: "🦄" },
{ name: "Newt", emoji: "🦎" },
{ name: "Nightingale", emoji: "🐦" }
],

O: [
{ name: "Owl", emoji: "🦉" },
{ name: "Octopus", emoji: "🐙" },
{ name: "Otter", emoji: "🦦" },
{ name: "Ostrich", emoji: "🦤" }
],

P: [
{ name: "Panda", emoji: "🐼" },
{ name: "Penguin", emoji: "🐧" },
{ name: "Pig", emoji: "🐷" },
{ name: "Porcupine", emoji: "🦔" }
],

Q: [
{ name: "Quail", emoji: "🐦" }
],

R: [
{ name: "Raccoon", emoji: "🦝" },
{ name: "Rabbit", emoji: "🐰" },
{ name: "Raven", emoji: "🐦" },
{ name: "Reindeer", emoji: "🦌" }
],

S: [
{ name: "Snake", emoji: "🐍" },
{ name: "Shark", emoji: "🦈" },
{ name: "Seal", emoji: "🦭" },
{ name: "Sloth", emoji: "🦥" },
{ name: "Squirrel", emoji: "🐿️" }
],

T: [
{ name: "Tiger", emoji: "🐯" },
{ name: "Turtle", emoji: "🐢" },
{ name: "Toucan", emoji: "🐦" },
{ name: "Turkey", emoji: "🦃" }
],

U: [
{ name: "Urchin", emoji: "🦔" }
],

V: [
{ name: "Vulture", emoji: "🦅" },
{ name: "Viper", emoji: "🐍" }
],

W: [
{ name: "Wolf", emoji: "🐺" },
{ name: "Whale", emoji: "🐋" },
{ name: "Walrus", emoji: "🦭" },
{ name: "Wombat", emoji: "🐾" }
],

X: [
{ name: "Xerus", emoji: "🐿️" }
],

Y: [
{ name: "Yak", emoji: "🐂" },
{ name: "Yellowhammer", emoji: "🐦" }
],

Z: [
{ name: "Zebra", emoji: "🦓" },
{ name: "Zebu", emoji: "🐂" }
]

};

/* =========================================================
GAME STATE
========================================================= */

let game = {

started: false,

currentValue: null,

lastValue: null,

lastTeamId: null,

teams: [],

timerSeconds: null,

timerRunning: false

};

let timerInterval = null;

/* =========================================================
DOM ELEMENTS
========================================================= */

const alphabetElement =
document.getElementById("alphabet");

const selectedCountElement =
document.getElementById("selectedCount");

const selectedLettersElement =
document.getElementById("selectedLetters");

const startGameButton =
document.getElementById("startGame");

const setupSection =
document.getElementById("setupSection");

const gameControls =
document.getElementById("gameControls");

const teamsElement =
document.getElementById("teams");

const currentValueElement =
document.getElementById("currentValue");

const teacherCurrentValueElement =
document.getElementById("teacherCurrentValue");

const teamButtonsElement =
document.getElementById("teamButtons");

const controlPanel =
document.getElementById("controlPanel");

const controlsToggle =
document.getElementById("controlsToggle");

const closeControls =
document.getElementById("closeControls");

const newValueButton =
document.getElementById("newValue");

const reassignButton =
document.getElementById("reassignButton");

const editScoresButton =
document.getElementById("editScoresButton");

const resetGameButton =
document.getElementById("resetGameButton");

const editModal =
document.getElementById("editModal");

const scoreEditors =
document.getElementById("scoreEditors");

const saveScoresButton =
document.getElementById("saveScores");

const cancelScoreEdit =
document.getElementById("cancelScoreEdit");

const closeEditModal =
document.getElementById("closeEditModal");

const winnerScreen =
document.getElementById("winnerScreen");

const winnerAnimal =
document.getElementById("winnerAnimal");

const winnerName =
document.getElementById("winnerName");

const winnerScore =
document.getElementById("winnerScore");

const closeWinner =
document.getElementById("closeWinner");

/* TIMER ELEMENTS */

const gameTimerElement =
document.getElementById("gameTimer");

const teacherTimerElement =
document.getElementById("teacherTimer");

const setupTimerMinutes =
document.getElementById("setupTimerMinutes");

const setupTimerSeconds =
document.getElementById("setupTimerSeconds");

const gameTimerMinutes =
document.getElementById("gameTimerMinutes");

const gameTimerSeconds =
document.getElementById("gameTimerSeconds");

const setTimerButton =
document.getElementById("setTimerButton");

const stopTimerButton =
document.getElementById("stopTimerButton");

const finishGameButton =
document.getElementById("finishGameButton");

/* =========================================================
TEAM SELECTION
========================================================= */

let selectedLetters = [];

function createAlphabet() {

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

alphabetElement.innerHTML = "";

for (const letter of letters) {


const button =
  document.createElement("button");

button.className = "letter-button";

button.textContent = letter;

button.dataset.letter = letter;

button.addEventListener(
  "click",
  () => toggleLetter(letter, button)
);

alphabetElement.appendChild(button);


}
}

function toggleLetter(letter, button) {

const index =
selectedLetters.indexOf(letter);

if (index === -1) {


selectedLetters.push(letter);

button.classList.add("selected");


} else {


selectedLetters.splice(index, 1);

button.classList.remove("selected");


}

updateTeamSelectionDisplay();
}

function updateTeamSelectionDisplay() {

selectedCountElement.textContent =
selectedLetters.length;

selectedLettersElement.innerHTML = "";

selectedLetters.forEach(letter => {


const element =
  document.createElement("span");

element.className =
  "selected-letter";

element.textContent =
  letter;

selectedLettersElement.appendChild(element);


});

startGameButton.disabled =
selectedLetters.length === 0;
}

/* =========================================================
RANDOM ANIMAL ASSIGNMENT
========================================================= */

function assignAnimals(letters) {

  const usedAnimals = [];

  return letters.map((letter, index) => {

    const available =
      animals[letter].filter(
        animal =>
          !usedAnimals.includes(animal.name)
      );

    const pool =
      available.length > 0
        ? available
        : animals[letter];

    const animal =
      pool[
        Math.floor(
          Math.random() * pool.length
        )
      ];

    usedAnimals.push(animal.name);

    return {

      id:
        `${letter}-${index}-${Date.now()}`,

      letter: letter,

      name: animal.name,

      emoji: animal.emoji,

      score: 0,

      position: index
    };

  });
}

/* =========================================================
START GAME
========================================================= */

startGameButton.addEventListener(
"click",
startGame
);

function startGame() {

if (selectedLetters.length === 0) {
return;
}

stopGameTimer();

game.started = true;

game.currentValue = null;

game.lastValue = null;

game.lastTeamId = null;

game.teams =
assignAnimals(selectedLetters);

setupSection.classList.add("hidden");

gameControls.classList.remove("hidden");

renderEverything();

/*
Generate the first value immediately.
*/

generateNewValue();

/*
Start optional setup timer.
*/

const setupMinutes =
Number(setupTimerMinutes.value) || 0;

const setupSeconds =
Number(setupTimerSeconds.value) || 0;

const totalSeconds =
setupMinutes * 60 +
setupSeconds;

if (totalSeconds > 0) {


game.timerSeconds =
  totalSeconds;

startGameTimer();


} else {


game.timerSeconds = null;

updateTimerDisplay();


}
}

/* =========================================================
RANDOM POINT VALUE
========================================================= */

function generatePointValue() {

let value = 0;

while (value === 0) {


value =
  Math.floor(
    Math.random() * 201
  ) - 100;


}

return value;
}

newValueButton.addEventListener(
"click",
generateNewValue
);

function generateNewValue() {

if (!game.started) {
return;
}

game.currentValue =
generatePointValue();

/*
A manually generated value starts
a new assignment cycle.
*/

game.lastValue = null;

game.lastTeamId = null;

reassignButton.disabled = true;

renderValue();
}

/* =========================================================
AWARD POINTS
========================================================= */

function awardPoints(teamId) {

if (
!game.started ||
game.currentValue === null
) {
return;
}

const team =
game.teams.find(
t => t.id === teamId
);

if (!team) {
return;
}

/*
Save transaction for reassignment.
*/

game.lastValue =
game.currentValue;

game.lastTeamId =
team.id;

/*
Apply points.
*/

team.score +=
game.currentValue;

/*
IMPORTANT:
Immediately create the next value.
*/

game.currentValue =
generatePointValue();

reassignButton.disabled = false;

renderEverything();

highlightTeam(team.id);
}

/* =========================================================
REASSIGN LAST VALUE
========================================================= */

reassignButton.addEventListener(
"click",
beginReassign
);

function beginReassign() {

if (
game.lastValue === null ||
game.lastTeamId === null
) {
return;
}

const value =
game.lastValue;

teamButtonsElement.innerHTML = "";

game.teams.forEach(team => {


const button =
  document.createElement("button");

button.className =
  "team-select-button";

button.innerHTML = `
  <span>
    ${team.emoji}
    ${team.name}
  </span>

  <span class="button-score">
    ${formatScore(team.score)}
  </span>
`;

button.addEventListener(
  "click",
  () => reassignValue(team.id)
);

if (
  team.id === game.lastTeamId
) {

  button.disabled = true;

  button.style.opacity = "0.35";
}

teamButtonsElement.appendChild(button);


});

}

function reassignValue(newTeamId) {

const oldTeam =
game.teams.find(
team =>
team.id === game.lastTeamId
);

const newTeam =
game.teams.find(
team =>
team.id === newTeamId
);

if (!oldTeam || !newTeam) {
return;
}

oldTeam.score -=
game.lastValue;

newTeam.score +=
game.lastValue;

game.lastTeamId =
newTeam.id;

renderEverything();

highlightTeam(newTeam.id);
}

/* =========================================================
RENDER SCOREBOARD
========================================================= */

function renderScoreboard() {

teamsElement.innerHTML = "";

game.teams.forEach(team => {


const card =
  document.createElement("div");

card.className =
  "team-card";

card.dataset.teamId =
  team.id;

card.innerHTML = `

  <div class="team-animal">
    ${team.emoji}
  </div>

  <div class="team-name">
    ${team.name}
  </div>

  <div class="team-score">
    ${formatScore(team.score)}
  </div>

`;

teamsElement.appendChild(card);


});

const count =
game.teams.length;

let columns = 2;

if (count === 1) {
columns = 1;
}

else if (count <= 4) {
columns = 2;
}

else if (count <= 9) {
columns = 3;
}

else {
columns = 4;
}

teamsElement.style.gridTemplateColumns =
`repeat(${columns}, 1fr)`;
}

/* =========================================================
RENDER TEACHER TEAM BUTTONS
========================================================= */

function renderTeamButtons() {

teamButtonsElement.innerHTML = "";

game.teams.forEach(team => {


const button =
  document.createElement("button");

button.className =
  "team-select-button";

button.innerHTML = `

  <span>
    ${team.emoji}
    ${team.name}
  </span>

  <span class="button-score">
    ${formatScore(team.score)}
  </span>

`;

button.addEventListener(
  "click",
  () => awardPoints(team.id)
);

teamButtonsElement.appendChild(button);


});
}

/* =========================================================
RENDER VALUE
========================================================= */

function renderValue() {

const value =
game.currentValue;

const display =
value === null
? "—"
: formatScore(value);

currentValueElement.textContent =
display;

teacherCurrentValueElement.textContent =
display;
}

/* =========================================================
RENDER EVERYTHING
========================================================= */

function renderEverything() {

renderScoreboard();

renderTeamButtons();

renderValue();

updateTimerDisplay();
}

/* =========================================================
SCORE FORMATTING
========================================================= */

function formatScore(value) {

if (value > 0) {
return `+${value}`;
}

return String(value);
}

/* =========================================================
HIGHLIGHT TEAM
========================================================= */

function highlightTeam(teamId) {

const card =
document.querySelector(
`.team-card[data-team-id="${teamId}"]`
);

if (!card) {
return;
}

card.classList.add("highlight");

setTimeout(() => {


card.classList.remove("highlight");


}, 700);
}

/* =========================================================
CONTROL PANEL
========================================================= */

controlsToggle.addEventListener(
"click",
() => {
controlPanel.classList.add("open");
}
);

closeControls.addEventListener(
"click",
() => {
controlPanel.classList.remove("open");
}
);

/* =========================================================
TIMER
========================================================= */

function formatTime(totalSeconds) {

if (
totalSeconds === null ||
totalSeconds === undefined
) {
return "00:00";
}

const minutes =
Math.floor(totalSeconds / 60);

const seconds =
totalSeconds % 60;

return (
String(minutes).padStart(2, "0") +
":" +
String(seconds).padStart(2, "0")
);
}

function updateTimerDisplay() {

  if (
    game.timerSeconds === null ||
    game.timerSeconds === undefined
  ) {

    gameTimerElement.classList.add("hidden");

    teacherTimerElement.textContent = "";

    teacherTimerElement.classList.remove("warning");

    return;
  }

  gameTimerElement.classList.remove("hidden");

  gameTimerElement.textContent =
    formatTime(game.timerSeconds);

  teacherTimerElement.textContent =
    formatTime(game.timerSeconds);

  /*
  Warning animation during final minute.
  */

  if (game.timerSeconds <= 60) {

    gameTimerElement.classList.add("warning");

    teacherTimerElement.classList.add("warning");

  } else {

    gameTimerElement.classList.remove("warning");

    teacherTimerElement.classList.remove("warning");

  }
}

function startGameTimer() {

stopGameTimer();

if (
!game.timerSeconds ||
game.timerSeconds <= 0
) {
return;
}

game.timerRunning = true;

stopTimerButton.disabled = false;

updateTimerDisplay();

timerInterval =
setInterval(() => {


  if (!game.started) {
    stopGameTimer();
    return;
  }

  game.timerSeconds--;

  updateTimerDisplay();

  if (game.timerSeconds <= 0) {

    game.timerSeconds = 0;

    updateTimerDisplay();

    stopGameTimer();

    finishGame();

  }

}, 1000);


}

function stopGameTimer() {

if (timerInterval !== null) {


clearInterval(timerInterval);

timerInterval = null;


}

game.timerRunning = false;

if (stopTimerButton) {
stopTimerButton.disabled = true;
}
}

/*
Set/start timer during the game.
*/

setTimerButton.addEventListener(
"click",
setGameTimer
);

function setGameTimer() {

const minutes =
Number(gameTimerMinutes.value) || 0;

const seconds =
Number(gameTimerSeconds.value) || 0;

if (
minutes === 0 &&
seconds === 0
) {
return;
}

const totalSeconds =
minutes * 60 +
seconds;

game.timerSeconds =
totalSeconds;

startGameTimer();
}

/*
Stop timer during the game.
*/

stopTimerButton.addEventListener(
"click",
stopGameTimer
);

/* =========================================================
FINISH GAME
========================================================= */

finishGameButton.addEventListener(
"click",
finishGame
);

function finishGame() {

if (
!game.started ||
game.teams.length === 0
) {
return;
}

stopGameTimer();

game.started = false;

showWinner();
}

/* =========================================================
EDIT SCORES
========================================================= */

editScoresButton.addEventListener(
"click",
openScoreEditor
);

function openScoreEditor() {

scoreEditors.innerHTML = "";

game.teams.forEach(team => {


const editor =
  document.createElement("div");

editor.className =
  "score-editor";

editor.innerHTML = `

  <label>
    ${team.name}
  </label>

  <div class="score-editor-row">

    <div class="score-editor-animal">
      ${team.emoji}
    </div>

    <input
      type="number"
      data-team-id="${team.id}"
      value="${team.score}"
    >

  </div>

`;

scoreEditors.appendChild(editor);


});

editModal.classList.remove("hidden");
}

saveScoresButton.addEventListener(
"click",
saveEditedScores
);

function saveEditedScores() {

const inputs =
scoreEditors.querySelectorAll("input");

inputs.forEach(input => {


const team =
  game.teams.find(
    t =>
      t.id === input.dataset.teamId
  );

if (!team) {
  return;
}

const value =
  Number(input.value);

if (Number.isFinite(value)) {

  team.score = value;

}


});

closeScoreEditor();

renderEverything();
}

function closeScoreEditor() {

editModal.classList.add("hidden");
}

closeEditModal.addEventListener(
"click",
closeScoreEditor
);

cancelScoreEdit.addEventListener(
"click",
closeScoreEditor
);

/* =========================================================
NEW GAME
========================================================= */

resetGameButton.addEventListener(
"click",
resetGame
);

function resetGame() {

const confirmed =
confirm(
"Start a new game? The current game will be lost."
);

if (!confirmed) {
return;
}

stopGameTimer();

game = {


started: false,

currentValue: null,

lastValue: null,

lastTeamId: null,

teams: [],

timerSeconds: null,

timerRunning: false


};

selectedLetters = [];

document
.querySelectorAll(".letter-button")
.forEach(button => {


  button.classList.remove("selected");

});


setupSection.classList.remove("hidden");

gameControls.classList.add("hidden");

reassignButton.disabled = true;

updateTeamSelectionDisplay();

teamsElement.innerHTML = "";

renderValue();

updateTimerDisplay();
}

/* =========================================================
WINNER
========================================================= */

function determineWinners() {

  if (game.teams.length === 0) {
    return [];
  }

  const winningScore =
    Math.min(
      ...game.teams.map(
        team => Math.abs(team.score)
      )
    );

  return game.teams.filter(
    team =>
      Math.abs(team.score) === winningScore
  );
}

function showWinner() {

  const winners =
    determineWinners();

  if (winners.length === 0) {
    return;
  }

  /*
  Display all tied winners.
  */

  winnerAnimal.textContent =
    winners.map(
      winner => winner.emoji
    ).join(" ");

  winnerName.textContent =
    winners.map(
      winner => winner.name
    ).join(" & ");

  winnerScore.textContent =
    formatScore(winners[0].score);

  winnerScreen.classList.remove(
    "hidden"
  );
}

closeWinner.addEventListener(
"click",
() => {


winnerScreen.classList.add(
  "hidden"
);


}
);

/* =========================================================
INITIALIZATION
========================================================= */

createAlphabet();

updateTeamSelectionDisplay();

renderValue();

updateTimerDisplay();
