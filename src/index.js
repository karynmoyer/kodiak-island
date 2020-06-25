import hunt from '/Users/johnpfannkuchen/Documents/Development/kodiak-island/src/data/hunt.js';
import forage from '/Users/johnpfannkuchen/Documents/Development/kodiak-island/src/data/forage.js';
import equipment from '/Users/johnpfannkuchen/Documents/Development/kodiak-island/src/data/equipment.js';
import displayTitle from '/Users/johnpfannkuchen/Documents/Development/kodiak-island/src/modules/startScreen.js';
import { create } from 'domain';

let state = {};
let players = init();
let scenario = new Scenario();
document.addEventListener('keydown', keyDown);

for (let i = 0; i < players.length; i++) {
  players[i].display();
}

function init() {
  console.clear();
  displayTitle();
  if (window.prompt('New | Load', 'new') === 'new') {
    console.log('New save created.');
    return newPlayers();
  }
}

function newPlayers() {
  const numberOfPlayers = window.prompt('How many players?', 1);
  let players = [];
  for (let i = 1; i <= numberOfPlayers; i++) {
    console.log(`Name player ${i}: Player ${i}`);
    players.push(new Player(window.prompt(`Name player ${i}:`, `Player ${i}`)));
    console.log(`Player name changed to ${players[i - 1].name}`);
  }
  return players;
}

const quit = function () {
  console.log(`Save Game?`);
  if (window.prompt(`Save Game?`, true)) {
    save(state);
  }
};

function save(data) {
  let now = new Date();
  state.timeStamp = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  state.name = `${players[0].name} ${state.timeStamp}`;
  state.players = players.forEach((player) => {
    return player.getPlayerData;
  });

  if (checkDB()) {
    return;
  }

  // 1. Open or (or if none exists) Create new DB

  let request = window.indexedDB.open('stateDB', 4),
    db,
    transaction,
    store,
    index;

  request.onerror = function (e) {
    console.log(`Database error: ${e.target.errorCode}.`);
  };

  // If a current DB of the same version cannot be found
  // creates a new objectStore for this database
  request.onupgradeneeded = function () {
    let db = request.result,
      store = db.createObjectStore('dataStore', { keyPath: 'name' });

    index = store.createIndex('name', 'name', { unique: false });
    console.log('Data store created.');
  };

  request.onsuccess = function () {
    console.log('Request received.');
    db = request.result;
    transaction = db.transaction('dataStore', 'readwrite');
    store = transaction.objectStore('dataStore');
    index = store.index('name');

    db.onerror = function (e) {
      console.log(`Error: ${e.target.errorCode}`);
    };

    store.put(data);

    transaction.oncomplete = function () {
      console.log('Data written.');
      db.close();
      console.log('Database connection closed.');
    };
  };
}

function displaySaveData() {
  let request = window.indexedDB.open('stateDB', 4),
    db,
    transaction,
    store,
    index;

  request.onerror = function (e) {
    console.log(`Database error: ${e.target.errorCode}.`);
  };

  request.onsuccess = function () {
    console.log('Request received.');
    db = request.result;
    transaction = db.transaction('dataStore', 'readwrite');
    store = transaction.objectStore('dataStore');

    db.onerror = function (e) {
      console.log(`Error: ${e.target.errorCode}`);
    };

    request = objectStore.getAll();

    transaction.oncomplete = function () {
      db.close();
      console.log('Database connection closed.');
    };
  };
}

function checkDB() {
  if (!window.indexedDB) {
    console.log(
      "Your browser doesn't support a stable version of IndexedDB. Save feature is not available."
    );
    return 0;
  } else {
    console.log('IndexedDB present.');
  }
}

function Player(
  name = 'Player',
  energy = 20,
  equipment = [],
  skills = [],
  diseases = []
) {
  this.name = name;
  this.energy = energy;
  this.equipment = equipment;
  this.skills = skills;
  this.diseases = diseases;

  this.getPlayerData = function () {
    return [this.name, this.energy, this.equipment, this.skills, this.diseases];
  };

  this.getPlayerName = function () {
    do {
      console.log("What's your name?");
      this.name = window.prompt("What's your name?", 'Player 1');

      if (this.name === '') {
        name = 'Player 1';
        console.log('Player name set to "Player 1"');
      }
    } while (this.name === '');

    console.log(`Player name set to ${this.name}`);
  };

  this.display = function () {
    console.log(`//////// ${this.name} VS Kodiak Island \\\\\\\\\\\\\\\\`);
    console.log(
      `Energy: ${this.energy} ${!this.skills[0] ? '' : '| Skills: '} ${
        this.diseases
      } ${!this.equipment[0] ? '' : '| Equipment: '} ${this.equipment} ${
        !this.diseases[0] ? '' : '| Diseases: '
      } ${this.diseases}`
    );
  };
}

function Scenario(terrain, weather) {
  this.terrain = terrain;
  this.weather = weather;
}

function keyDown() {
  // Escape Key
  if (event.isComposing || event.keyCode === 27) {
    quit();
  }

  // Left Arrow

  // Right Arrow

  // Up Arrow

  // Down Arrow

  // Tab Key

  // Space Bar

  // Num Keys

  // Enter/Return

  //
}

state.huntDeck = createDeck(hunt, 1, 5, 6, 6, 6, 6, 6, 6, 6, 6);
console.log(state);

// Function that generates a deck [array] from the dataset
// Take as arguments the dataset, and then any number of proportions.
function createDeck(data, ...proportions) {
  if (!data) {
    console.log(`Data not found.`);
  }
  let deck = [];
  console.log(`Creating deck from data.`);
  for (let i = 0; i < proportions.length; i++) {
    for (let j = 0; j < proportions[i]; j++) {
      console.log(
        `Number of ${data[i].name}s added to deck: ${proportions[i]}.`
      );
      deck.push(data[i]);
    }
  }
  console.log(`New deck created.`);
  console.log(`Shuffling deck...`);
  shuffle(deck);
  return deck;
}

// Function that accepts any number of decks and returns new combined decks
function combine(...decks) {
  let combinedDeck = [];
  console.log(`Combining decks...`);

  for (let i = 0; i < decks.length; i++) {
    for (let j = 0; j < decks[i].length; j++) {
      combinedDeck.push(decks[i][j]);
      console.log(`Card added: ${decks[i][j].Name}.`);
    }
  }
  shuffle(combinedDeck);
  console.log(`Decks combined...`);
  return combinedDeck;
}

// Function that shuffles decks
function shuffle(deck) {
  console.log('Shuffling cards.');
  var m = deck.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }
  console.log('Cards shuffled.');
  return deck;
}
