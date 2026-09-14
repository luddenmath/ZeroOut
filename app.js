```javascript
/* =========================================================
ZERO OUT
First working version + timer
========================================================= */

/* =========================================================
ANIMAL DATABASE
========================================================= */

const animals = {

A: [
{ name: "Aardvark" },
{ name: "Alpaca" },
{ name: "Axolotl" }
],

B: [
{ name: "Baboon" },
{ name: "Badger" },
{ name: "Beaver" }
],

C: [
{ name: "Capybara" },
{ name: "Caterpillar" },
{ name: "Chameleon" },
{ name: "Cheetah" },
{ name: "Cobra" }
],

D: [
{ name: "Deer" },
{ name: "Dodo" }
],

E: [
{ name: "Echidna" },
{ name: "Eel" },
{ name: "Elephant Seal" },
{ name: "Emu" }
],

F: [
{ name: "Ferret" },
{ name: "Fossa" }
],

G: [
{ name: "Gazelle" },
{ name: "Gerbil" },
{ name: "Gibbon" },
{ name: "Gila Monster" },
{ name: "Goose" }
],

H: [
{ name: "Hyena" }
],

I: [
{ name: "Ibex" },
{ name: "Ibis" },
{ name: "Impala" }
],

J: [
{ name: "Jackal" },
{ name: "Jaguarundi" },
{ name: "Jellyfish" }
],

K: [
{ name: "Kingfisher" },
{ name: "Koala" },
{ name: "Komodo Dragon" }
],

L: [
{ name: "Lemur" },
{ name: "Lionfish" },
{ name: "Lobster" }
],

M: [
{ name: "Manta Ray" },
{ name: "Marmoset" },
{ name: "Meerkat" }
],

N: [
{ name: "Newt" },
{ name: "Nightingale" },
{ name: "Nudibranch" }
],

O: [
{ name: "Octopus" },
{ name: "Orangutan" },
{ name: "Ox" }
],

P: [
{ name: "Pelican" },
{ name: "Pigeon" },
{ name: "Platypus" }
],

Q: [
{ name: "Quetzal" },
{ name: "Quokka" }
],

R: [
{ name: "Raccoon" },
{ name: "Raven" },
{ name: "Red Panda" }
],

S: [
{ name: "Scorpion" },
{ name: "Seahorse" },
{ name: "Sloth" }
],

T: [
{ name: "Tapir" },
{ name: "Toucan" },
{ name: "Turkey" }
],

U: [
{ name: "Urchin" },
{ name: "Urial" }
],

V: [
{ name: "Vicuna" },
{ name: "Viper" },
{ name: "Vole" }
],

W: [
{ name: "Wallaby" },
{ name: "Wildebeest" },
{ name: "Wolverine" }
],

X: [
{ name: "Xenopus" },
{ name: "X-ray Tetra" }
],

Y: [
{ name: "Yellowhammer" },
{ name: "Yellowjacket" },
{ name: "Yeti Crab" }
],

Z: [
{ name: "Zebu" },
{ name: "Zorilla" },
{ name: "Zosterops" }
]

};


/* =========================================================
ANIMAL IMAGE PATH
========================================================= */

function getAnimalImage(name) {

  return (
    "images/" +
    name
      .toLowerCase()
      .replaceAll(" ", "_") +
    ".png"
  );

}


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
FIREBASE
========================================================= */

import {
  ref,
  set,
  onValue,
  get
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

const db = window.firebaseDB;

let firebaseGameId = null;

let gameListener = null;


async function saveGameToFirebase() {

  if (!firebaseGameId) {
    console.error("No Firebase game ID.");
    return;
  }

  if (!db) {
    console.error("Firebase database is not available.");
    return;
  }

  const gameData = {
    started: game.started,
    currentValue: game.currentValue,
    lastValue: game.lastValue,
    lastTeamId: game.lastTeamId,
    teams: game.teams,
    timerSeconds: game.timerSeconds,
    timerRunning: game.timerRunning
  };

  console.log(
    "Saving to Firebase:",
    firebaseGameId,
    gameData
  );

  await set(
    ref(db, "games/" + firebaseGameId),
    gameData
  );

  console.log(
    "Firebase save complete."
  );
}


/* =========================================================
DOM ELEMENTS
========================================================= */

const gameCodeScreen =
document.getElementById("gameCodeScreen");

const gameCodeInput =
document.getElementById("gameCodeInput");

const joinGameButton =
document.getElementById("joinGameButton");

const gameCodeError =
document.getElementById("gameCodeError");

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


/* =========================================================
STUDENT GAME CODE CONNECTION
========================================================= */

joinGameButton.addEventListener(
  "click",
  joinGame
);


gameCodeInput.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {
      joinGame();
    }

  }
);


async function joinGame() {

  const code =
    gameCodeInput.value
      .trim()
      .toUpperCase();


  gameCodeError.textContent = "";


  /*
    Basic code validation.
  */

  if (!/^[A-Z0-9]{6}$/.test(code)) {

    gameCodeError.textContent =
      "Enter the 6-character game code.";

    return;

  }


  joinGameButton.disabled = true;

  joinGameButton.textContent =
    "CONNECTING...";


  try {

    const gameRef =
      ref(
        db,
        "games/" + code
      );


    /*
      Check whether the game exists.
    */

    const snapshot =
      await get(gameRef);


    if (!snapshot.exists()) {

      gameCodeError.textContent =
        "Game not found. Check the code and try again.";

      joinGameButton.disabled = false;

      joinGameButton.textContent =
        "JOIN GAME";

      return;

    }


    /*
      Remember the game code.
    */

    firebaseGameId =
      code;


    /*
      Hide the code screen.
    */

    gameCodeScreen.classList.add(
      "hidden"
    );


    /*
      Listen for all future changes.
    */

    if (gameListener) {
      gameListener();
    }


    gameListener =
      onValue(
        gameRef,
        snapshot => {

          const firebaseGame =
            snapshot.val();

          if (!firebaseGame) {
            return;
          }

          /*
            Remember whether the game was
            previously running.
          */

          const wasStarted =
            game.started;

          /*
            Update local game state.
          */

          game =
            firebaseGame;

          /*
            Render the scoreboard.
          */

          renderEverything();

          /*
            If the teacher just ended the game,
            show the winner screen.
          */

          if (
            wasStarted === true &&
            game.started === false
          ) {
            showWinner();
          }

        }
      );


  } catch (error) {

    console.error(
      "Failed to join game:",
      error
    );

    gameCodeError.textContent =
      "Could not connect to the game.";

  }


  joinGameButton.disabled = false;

  joinGameButton.textContent =
    "JOIN GAME";

}


/* =========================================================
TIMER ELEMENTS
========================================================= */

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

      letter:
        letter,

      name:
        animal.name,

      image:
        getAnimalImage(animal.name),

      score:
        0,

      position:
        index
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


async function startGame() {

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

  firebaseGameId =
    Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

  await set(
    ref(db, "games/" + firebaseGameId),
    {
      started: true,
      currentValue: null,
      teams: game.teams
    }
  );


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

    game.timerSeconds =
      null;

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

async function awardPoints(teamId) {

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
  Immediately create the next value.
  */

  game.currentValue =
    generatePointValue();

  reassignButton.disabled = false;

  /*
  Save the NEW state to Firebase.
  */

  try {

    await saveGameToFirebase();

    console.log(
      "Game saved to Firebase:",
      game
    );

  } catch (error) {

    console.error(
      "Firebase save failed:",
      error
    );

  }

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
        <img
          src="${team.image}"
          alt=""
        >
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


/*
The value variable above is retained from
the original working logic.
*/

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
        <img
          src="${team.image}"
          alt="${team.name}"
        >
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
        <img
          src="${team.image}"
          alt=""
        >
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


async function finishGame() {

  if (
    !game.started ||
    game.teams.length === 0
  ) {
    return;
  }

  stopGameTimer();

  game.started = false;

  await saveGameToFirebase();

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
          <img
            src="${team.image}"
            alt="${team.name}"
          >
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

  winnerAnimal.innerHTML =
    winners.map(
      winner => `
        <img
          src="${winner.image}"
          alt="${winner.name}"
        >
      `
    ).join("");

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
```
