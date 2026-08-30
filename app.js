/* =========================================================
   ZERO OUT
   First working version
   ========================================================= */


/* =========================================================
   ANIMAL DATABASE
   =========================================================

   For this first version, animals are represented by emoji.

   Later we can replace these with actual animal images.
   The structure is deliberately set up so that adding images
   later will be easy.
*/

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

  teams: []

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
   TEAM SELECTION
   ========================================================= */

let selectedLetters = [];


/*
   Create alphabet buttons.
*/

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


/*
   Select/deselect a letter.

   Because every letter has only one button,
   duplicate letters are impossible.
*/

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


/*
   Update setup information.
*/

function updateTeamSelectionDisplay() {

  selectedCountElement.textContent =
    selectedLetters.length;

  selectedLettersElement.innerHTML = "";

  selectedLetters.forEach(letter => {

    const element =
      document.createElement("span");

    element.className = "selected-letter";

    element.textContent = letter;

    selectedLettersElement.appendChild(element);
  });

  startGameButton.disabled =
    selectedLetters.length === 0;
}


/* =========================================================
   RANDOM ANIMAL ASSIGNMENT
   ========================================================= */


/*
   Randomly select an animal for a letter.

   For now we make sure the same animal name isn't used twice
   during the same game.
*/

function assignAnimals(letters) {

  const usedAnimals = [];

  return letters.map((letter, index) => {

    const available =
      animals[letter].filter(
        animal => !usedAnimals.includes(animal.name)
      );

    /*
       In the unlikely event that the letter only has
       already-used animals, allow one to be reused.
    */

    const pool =
      available.length > 0
        ? available
        : animals[letter];

    const animal =
      pool[Math.floor(Math.random() * pool.length)];

    usedAnimals.push(animal.name);

    return {

      id: `${letter}-${index}-${Date.now()}`,

      letter: letter,

      name: animal.name,

      emoji: animal.emoji,

      score: 0,

      /*
         This is the selection order.
         It determines the team's position on the scoreboard.
      */

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
     Generate the first point value immediately.
  */

  generateNewValue();

}


/* =========================================================
   RANDOM POINT VALUE
   ========================================================= */


/*
   Generate an integer from -100 through +100,
   excluding zero.
*/

function generatePointValue() {

  let value = 0;

  while (value === 0) {

    value =
      Math.floor(Math.random() * 201) - 100;
  }

  return value;
}


/*
   Generate a new value.
*/

newValueButton.addEventListener(
  "click",
  generateNewValue
);


function generateNewValue() {

  game.currentValue =
    generatePointValue();

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
     Save the transaction so it can be reassigned.
  */

  game.lastValue =
    game.currentValue;

  game.lastTeamId =
    team.id;


  /*
     Apply the points.
  */

  team.score +=
    game.currentValue;


  /*
     Remove the current value until
     a new one is generated.
  */

  game.currentValue = null;

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

  /*
     Create temporary buttons.

     We don't change anything until
     the teacher selects another team.
  */

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

    /*
       The team that originally received the value
       cannot be selected again.
    */

    if (team.id === game.lastTeamId) {

      button.disabled = true;

      button.style.opacity = "0.35";
    }

    teamButtonsElement.appendChild(button);

  });

}


/*
   Move the previous value from the old team
   to the newly selected team.
*/

function reassignValue(newTeamId) {

  const oldTeam =
    game.teams.find(
      team => team.id === game.lastTeamId
    );

  const newTeam =
    game.teams.find(
      team => team.id === newTeamId
    );

  if (!oldTeam || !newTeam) {
    return;
  }

  /*
     Remove the points from the original team.
  */

  oldTeam.score -=
    game.lastValue;


  /*
     Apply them to the new team.
  */

  newTeam.score +=
    game.lastValue;


  /*
     Record the new recipient.
  */

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

    card.className = "team-card";

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


  /*
     Adjust the grid based on the number of teams.
  */

  const count =
    game.teams.length;

  let columns = 2;

  if (count === 1) {
    columns = 1;
  }

  else if (count === 2) {
    columns = 2;
  }

  else if (count <= 4) {
    columns = 2;
  }

  else if (count <= 6) {
    columns = 3;
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


/*
   Save manually edited scores.
*/

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
        t => t.id === input.dataset.teamId
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


/*
   Close score editor.
*/

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

  game = {

    started: false,

    currentValue: null,

    lastValue: null,

    lastTeamId: null,

    teams: []

  };

  selectedLetters = [];

  /*
     Reset alphabet buttons.
  */

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

}


/* =========================================================
   WINNER
   =========================================================

   This first version includes the winner system but does
   not automatically trigger it because we haven't yet
   defined how the teacher signals that the game is over.

   We can add a FINISH GAME button later.
*/

function determineWinner() {

  if (game.teams.length === 0) {
    return null;
  }

  let winner =
    game.teams[0];

  for (const team of game.teams) {

    if (
      Math.abs(team.score) <
      Math.abs(winner.score)
    ) {

      winner = team;

    }

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
