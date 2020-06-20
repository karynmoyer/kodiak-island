import hunt from 'http://127.0.0.1:5500/src/data/hunt.js';
import displayPlayer from 'http://127.0.0.1:5500/src/modules/displayPlayer.js';

function main() {
  init();
  displayTitle();
  document.addEventListener('keydown', keyDown);
  displayPlayer();
  displayScenario();
}

let state = {
  playerName: '',
  energy: 0,
  equipment: [],
  skills: [],
  diseases: [],
};

function init() {
  console.clear();
  getPlayerName();
  getEnergy();
  getSkills();
  getDiseases();
}

function displayTitle() {
  console.log(`
  ▄ •▄       ·▄▄▄▄  ▪   ▄▄▄· ▄ •▄     ▪  .▄▄ · ▄▄▌   ▄▄▄·  ▐ ▄ ·▄▄▄▄  
  █▌▄▌▪▪     ██▪ ██ ██ ▐█ ▀█ █▌▄▌▪    ██ ▐█ ▀. ██•  ▐█ ▀█ •█▌▐███▪ ██ 
  ▐▀▀▄· ▄█▀▄ ▐█· ▐█▌▐█·▄█▀▀█ ▐▀▀▄·    ▐█·▄▀▀▀█▄██▪  ▄█▀▀█ ▐█▐▐▌▐█· ▐█▌
  ▐█.█▌▐█▌.▐▌██. ██ ▐█▌▐█ ▪▐▌▐█.█▌    ▐█▌▐█▄▪▐█▐█▌▐▌▐█ ▪▐▌██▐█▌██. ██ 
  ·▀  ▀ ▀█▄▀▪▀▀▀▀▀• ▀▀▀ ▀  ▀ ·▀  ▀    ▀▀▀ ▀▀▀▀ .▀▀▀  ▀  ▀ ▀▀ █▪▀▀▀▀▀• 
  `);
}

function displayScenario() {
  let huntCard = Math.floor(Math.random() * hunt.length);

  console.log(
    `You are faced with a${aOrAn(hunt[huntCard].Hunt.charAt(0))} ${
      hunt[huntCard].Hunt
    }.`
  );
}

function aOrAn(str) {
  console.log(str.charAt(0));
  if (
    str[0] === 'A' ||
    'E' ||
    'I' ||
    'O' ||
    'U' ||
    'a' ||
    'e' ||
    'i' ||
    'o' ||
    'u'
  ) {
    return 'n';
  }
}

let gameIsSaved = false;

function quit() {
  gameIsSaved = window.prompt(`Save Game?`, false);
  console.log(`Save Game?`);
  console.log(gameIsSaved);
}

function keyDown() {
  if (event.isComposing || event.keyCode === 27) {
    quit();
  }
}

function getPlayerName() {
  let playerName;
  do {
    console.log("What's your name?");
    playerName = window.prompt("What's your name?", 'Player 1');

    if (playerName === '') {
      playerName = 'Player 1';
      console.log('Player name set to "Player 1"');
    }
  } while (playerName === '');

  console.log(`Player name set to ${playerName}`);
  state.playerName = playerName;
}

function getSkills(skill) {
  state.skills.push(skill);
}

function getEquipment(item) {
  state.equipment.push(item);
}

function getDiseases(ailment) {
  state.diseases.push(ailment);
}

function getEnergy() {
  state.energy = 100;
}

function generateDisplay() {
  console.clear();
  displayPlayer();
  displayScenario();
}

main();

function scenario() {
  setWeather();
}
