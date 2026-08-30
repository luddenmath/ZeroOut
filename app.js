/* =========================================================
ZERO OUT
First version with timer + finish game
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

finished: false,

currentValue: null,

lastValue: null,

lastTeamId: null,

teams: [],

timerEnabled: false,

timerSeconds: 0,

timerInterval: null

};

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

const reassignButton =
document.getElementById("reassignButton");

const editScoresButton =
document.getElementById("editScoresButton");

const finishGameButton =
document.getElementById("finishGameButton");

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

const timerMinutes =
document.getElementById("timerMinutes");

const enableTimer =
document.getElementById("enableTimer");

const setupTimerStatus =
document.getElementById("setupTimerStatus");

const gameTimerMinutes =
document.getElementById("gameTimerMinutes");

const setGameTimer =
document.getElementById("setGameTimer");

const gameTimerStatus =
document.getElementById("gameTimerStatus");

const timerDisplay =
document.getElementById("timerDisplay");

/* =========================================================
TEAM SELECTION
========================================================= */

let selectedLetters = [];

function createAlphabet() {

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ";

alphabetElement.innerHTML = "";

for (const letter of letters) {

```
const button =
  document.createElement("button");

button.className =
  "letter-button";

button.textContent =
  letter;

button.dataset.letter =
  letter;

button.addEventListener(
  "click",
  () => toggleLetter(letter, button)
);

alphabetElement.appendChild(button);
```

}
}

function toggleLetter(letter, button) {

const index =
selectedLetters.indexOf(letter);

if (index === -1) {

```
selectedLetters.push(letter);

button.classList.add("selected");
```

} else {

```
selectedLetters.splice(index, 1);

button.classList.remove("selected");
```

}

updateTeamSelectionDisplay();
}

function updateTeamSelectionDisplay() {

selectedCountElement.textContent =
selectedLetters.length;

selectedLettersElement.innerHTML = "";

selectedLetters.forEach(letter => {

```
const element =
  document.createElement("span");

element.className =
  "selected-letter";

element.textContent =
  letter;

selectedLettersElement.appendChild(
  element
);
```

});

startGameButton.disabled =
selectedLetters.length === 0;
}

/* =========================================================
ANIMAL ASSIGNMENT
========================================================= */

function assignAnimals(letters) {

const usedAnimals = [];

return letters.map((letter, index) => {

```
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

  letter,

  name:
    animal.name,

  emoji:
    animal.emoji,

  score: 0,

  position: index

};
```

});
}

/* =========================================================
TIMER SETUP
========================================================= */

let setupTimerEnabled = false;

enableTimer.addEventListener(
"click",
() => {

```
setupTimerEnabled =
  !setupTimerEnabled;

if (setupTimerEnabled) {

  const minutes =
    getMinutes(timerMinutes);

  setupTimerStatus.textContent =
    `Timer: ${minutes} minute${minutes === 1 ? "" : "s"}`;

  enableTimer.textContent =
    "REMOVE TIMER";

} else {

  setupTimerStatus.textContent =
    "No timer";

  enableTimer.textContent =
    "ADD TIMER";
}
```

}
);

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

game.started =
true;

game.finished =
false;

game.currentValue =
null;

game.lastValue =
null;

game.lastTeamId =
null;

game.teams =
assignAnimals(selectedLetters);

/*
Copy the setup timer into the game.
*/

game.timerEnabled =
setupTimerEnabled;

if (game.timerEnabled) {

```
game.timerSeconds =
  getMinutes(timerMinutes) * 60;
```

} else {

```
game.timerSeconds = 0;
```

}

setupSection.classList.add(
"hidden"
);

gameControls.classList.remove(
"hidden"
);

renderEverything();

/*
Start the timer if enabled.
*/

if (game.timerEnabled) {

```
startTimer();
```

}

/*
Generate the first value.
*/

generateNewValue();

}

/* =========================================================
RANDOM POINT VALUE
========================================================= */

function generatePointValue() {

let value = 0;

while (value === 0) {

```
value =
  Math.floor(
    Math.random() * 201
  ) - 100;
```

}

return value;
}

/*
Every time a new value is needed,
immediately generate it.

There is no longer a NEW VALUE button.
*/

function generateNewValue() {

if (
!game.started ||
game.finished
) {
return;
}

game.currentValue =
generatePointValue();

game.lastValue =
null;

game.lastTeamId =
null;

reassignButton.disabled =
true;

renderValue();
}

/* =========================================================
AWARD POINTS
========================================================= */

function awardPoints(teamId) {

if (
!game.started ||
game.finished ||
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
Save this transaction.
*/

game.lastValue =
game.currentValue;

game.lastTeamId =
team.id;

/*
Award the points.
*/

team.score +=
game.currentValue;

/*
IMPORTANT:
Immediately generate the next value.
*/

game.currentValue =
generatePointValue();

/*
Reassign now refers to the value
that was just awarded.
*/

reassignButton.disabled =
false;

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

const originalTeamId =
game.lastTeamId;

teamButtonsElement.innerHTML = "";

game.teams.forEach(team => {

```
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
  team.id === originalTeamId
) {

  button.disabled =
    true;

  button.style.opacity =
    "0.35";
}

teamButtonsElement.appendChild(
  button
);
```

});

}

function reassignValue(newTeamId) {

if (
game.lastValue === null ||
game.lastTeamId === null
) {
return;
}

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

if (
!oldTeam ||
!newTeam ||
oldTeam.id === newTeam.id
) {
return;
}

/*
Remove the previous value from
the original recipient.
*/

oldTeam.score -=
game.lastValue;

/*
Apply it to the new recipient.
*/

newTeam.score +=
game.lastValue;

game.lastTeamId =
newTeam.id;

renderEverything();

highlightTeam(newTeam.id);
}

/* =========================================================
FINISH GAME
========================================================= */

finishGameButton.addEventListener(
"click",
finishGame
);

function finishGame() {

if (!game.started || game.finished) {
return;
}

const confirmed =
confirm(
"Finish the game now?"
);

if (!confirmed) {
return;
}

endGame();
}

function endGame() {

game.finished =
true;

game.started =
false;

stopTimer();

game.currentValue =
null;

renderEverything();

showWinner();
}

/* =========================================================
TIMER
========================================================= */

function getMinutes(input) {

let minutes =
Number(input.value);

if (
!Number.isFinite(minutes) ||
minutes < 1
) {
minutes = 1;
}

if (minutes > 180) {
minutes = 180;
}

input.value =
minutes;

return minutes;
}

/*
Set/change timer while game is running.
*/

setGameTimer.addEventListener(
"click",
() => {

```
if (
  !game.started ||
  game.finished
) {
  return;
}

const minutes =
  getMinutes(gameTimerMinutes);

game.timerEnabled =
  true;

game.timerSeconds =
  minutes * 60;

startTimer();
```

}
);

/*
Start/restart the countdown.
*/

function startTimer() {

stopTimer();

updateTimerDisplay();

game.timerInterval =
setInterval(
() => {

```
    game.timerSeconds--;

    updateTimerDisplay();

    if (
      game.timerSeconds <= 0
    ) {

      game.timerSeconds = 0;

      updateTimerDisplay();

      stopTimer();

      endGame();

    }

  },
  1000
);
```

}

/*
Stop countdown.
*/

function stopTimer() {

if (
game.timerInterval !== null
) {

```
clearInterval(
  game.timerInterval
);

game.timerInterval =
  null;
```

}
}

/*
Display timer everywhere.
*/

function updateTimerDisplay() {

if (!game.timerEnabled) {

```
timerDisplay.classList.add(
  "hidden"
);

gameTimerStatus.textContent =
  "No timer";

return;
```

}

timerDisplay.classList.remove(
"hidden"
);

const minutes =
Math.floor(
game.timerSeconds / 60
);

const seconds =
game.timerSeconds % 60;

const display =
`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

timerDisplay.textContent =
display;

gameTimerStatus.textContent =
`Time remaining: ${display}`;
}

/* =========================================================
SCOREBOARD
========================================================= */

function renderScoreboard() {

teamsElement.innerHTML = "";

game.teams.forEach(team => {

```
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

teamsElement.appendChild(
  card
);
```

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
TEACHER TEAM BUTTONS
========================================================= */

function renderTeamButtons() {

teamButtonsElement.innerHTML = "";

game.teams.forEach(team => {

```
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

teamButtonsElement.appendChild(
  button
);
```

});
}

/* =========================================================
VALUE DISPLAY
========================================================= */

function renderValue() {

const display =
game.currentValue === null
? "—"
: formatScore(
game.currentValue
);

currentValueElement.textContent =
display;

teacherCurrentValueElement.textContent =
display;

updateTimerDisplay();
}

/* =========================================================
RENDER EVERYTHING
========================================================= */

function renderEverything() {

renderScoreboard();

renderTeamButtons();

renderValue();
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

card.classList.add(
"highlight"
);

setTimeout(
() => {
card.classList.remove(
"highlight"
);
},
700
);
}

/* =========================================================
CONTROL PANEL
========================================================= */

controlsToggle.addEventListener(
"click",
() => {
controlPanel.classList.add(
"open"
);
}
);

closeControls.addEventListener(
"click",
() => {
controlPanel.classList.remove(
"open"
);
}
);

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

```
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

scoreEditors.appendChild(
  editor
);
```

});

editModal.classList.remove(
"hidden"
);
}

saveScoresButton.addEventListener(
"click",
saveEditedScores
);

function saveEditedScores() {

const inputs =
scoreEditors.querySelectorAll(
"input"
);

inputs.forEach(input => {

```
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

if (
  Number.isFinite(value)
) {

  team.score =
    value;
}
```

});

closeScoreEditor();

renderEverything();
}

function closeScoreEditor() {

editModal.classList.add(
"hidden"
);
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

stopTimer();

game = {

```
started: false,

finished: false,

currentValue: null,

lastValue: null,

lastTeamId: null,

teams: [],

timerEnabled: false,

timerSeconds: 0,

timerInterval: null
```

};

selectedLetters = [];

setupTimerEnabled = false;

document
.querySelectorAll(
".letter-button"
)
.forEach(button => {

```
  button.classList.remove(
    "selected"
  );

});
```

enableTimer.textContent =
"ADD TIMER";

setupTimerStatus.textContent =
"No timer";

setupSection.classList.remove(
"hidden"
);

gameControls.classList.add(
"hidden"
);

reassignButton.disabled =
true;

teamsElement.innerHTML = "";

updateTeamSelectionDisplay();

renderValue();
}

/* =========================================================
WINNER
========================================================= */

function determineWinner() {

if (
game.teams.length === 0
) {
return null;
}

let winner =
game.teams[0];

for (
const team of game.teams
) {

```
if (
  Math.abs(team.score) <
  Math.abs(winner.score)
) {

  winner =
    team;
}
```

}

return winner;
}

function showWinner() {

const winner =
determineWinner();

if (!winner) {
return;
}

winnerAnimal.textContent =
winner.emoji;

winnerName.textContent =
winner.name;

winnerScore.textContent =
formatScore(winner.score);

winnerScreen.classList.remove(
"hidden"
);
}

closeWinner.addEventListener(
"click",
() => {

```
winnerScreen.classList.add(
  "hidden"
);
```

}
);

/* =========================================================
INITIALIZATION
========================================================= */

createAlphabet();

updateTeamSelectionDisplay();

renderValue();
