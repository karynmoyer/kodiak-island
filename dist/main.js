/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/hunt.js":
/*!**************************!*\
  !*** ./src/data/hunt.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst hunt = [\n  {\n    Hunt: 'Kodiak Bear',\n    Difficulty: 4,\n    Inventory: '',\n    'Energy Type': 'Red',\n    Energy: 40,\n    Description: '',\n    'Type(s)': 'Ursus',\n    Forest: 4,\n    Glacier: 0,\n    Grassland: 2,\n    Lake: 3,\n    Mountain: 3,\n    Ocean: 0,\n    River: 4,\n    Seashore: 1,\n    Tundra: 2,\n  },\n  {\n    Hunt: 'Red Fox',\n    Difficulty: 1,\n    Inventory: '',\n    'Energy Type': 'Red',\n    Energy: 5,\n    Description: '',\n    'Type(s)': 'Canine',\n    Forest: 2,\n    Glacier: 0,\n    Grassland: 4,\n    Lake: 2,\n    Mountain: 2,\n    Ocean: 0,\n    River: 2,\n    Seashore: 0,\n    Tundra: 3,\n  },\n  {\n    Hunt: 'Rock Ptarmigan',\n    Difficulty: 1,\n    Inventory: '',\n    'Energy Type': 'Red',\n    Energy: 2,\n    Description: '',\n    'Type(s)': 'Avian',\n    Forest: 0,\n    Glacier: 0,\n    Grassland: 0,\n    Lake: 0,\n    Mountain: 4,\n    Ocean: 0,\n    River: 0,\n    Seashore: 3,\n    Tundra: 0,\n  },\n  {\n    Hunt: 'Rabbit',\n    Difficulty: 1,\n    Inventory: '',\n    'Energy Type': 'Red',\n    Energy: 4,\n    Description: '',\n    'Type(s)': 'Rodentia',\n    Forest: 0,\n    Glacier: 0,\n    Grassland: 4,\n    Lake: 0,\n    Mountain: 3,\n    Ocean: 0,\n    River: 0,\n    Seashore: 0,\n    Tundra: 3,\n  },\n  {\n    Hunt: 'Beaver',\n    Difficulty: 2,\n    Inventory: '',\n    'Energy Type': 'Red',\n    Energy: 15,\n    Description: '',\n    'Type(s)': 'Rodentia',\n    Forest: 0,\n    Glacier: 0,\n    Grassland: 0,\n    Lake: 4,\n    Mountain: 0,\n    Ocean: 0,\n    River: 4,\n    Seashore: 0,\n    Tundra: 0,\n  },\n  {\n    Hunt: 'River Otter',\n    Difficulty: 1,\n    Inventory: '',\n    'Energy Type': 'Red',\n    Energy: 6,\n    Description: '',\n    'Type(s)': 'Rodentia',\n    Forest: 0,\n    Glacier: 0,\n    Grassland: 0,\n    Lake: 0,\n    Mountain: 0,\n    Ocean: 0,\n    River: 4,\n    Seashore: 0,\n    Tundra: 0,\n  },\n  {\n    Hunt: 'Red Squirrel',\n    Difficulty: 0,\n    Inventory: '',\n    'Energy Type': 'Red',\n    Energy: 1,\n    Description: 'Cannot use Medium or Large Guns.',\n    'Type(s)': 'Rodentia',\n    Forest: 5,\n    Glacier: 0,\n    Grassland: 3,\n    Lake: 0,\n    Mountain: 3,\n    Ocean: 0,\n    River: 3,\n    Seashore: 0,\n    Tundra: 0,\n  },\n  {\n    Hunt: 'Blacktail Deer',\n    Difficulty: 3,\n    Inventory: '',\n    'Energy Type': 'Red',\n    Energy: 27,\n    Description: '',\n    'Type(s)': 'Fauna',\n    Forest: 4,\n    Glacier: 0,\n    Grassland: 3,\n    Lake: 2,\n    Mountain: 1,\n    Ocean: 0,\n    River: 3,\n    Seashore: 0,\n    Tundra: 0,\n  },\n  {\n    Hunt: 'Elk',\n    Difficulty: 4,\n    Inventory: '',\n    'Energy Type': 'Red',\n    Energy: 45,\n    Description: '',\n    'Type(s)': 'Fauna',\n    Forest: 0,\n    Glacier: 0,\n    Grassland: 2,\n    Lake: 1,\n    Mountain: 1,\n    Ocean: 0,\n    River: 1,\n    Seashore: 0,\n    Tundra: 4,\n  },\n  {\n    Hunt: 'Willow Ptarmigan',\n    Difficulty: 1,\n    Inventory: '',\n    'Energy Type': 'Red',\n    Energy: 2,\n    Description: '',\n    'Type(s)': 'Avian',\n    Forest: 4,\n    Glacier: 0,\n    Grassland: 3,\n    Lake: 0,\n    Mountain: 0,\n    Ocean: 0,\n    River: 0,\n    Seashore: 0,\n    Tundra: 2,\n  },\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hunt);\n\n\n//# sourceURL=webpack:///./src/data/hunt.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_johnpfannkuchen_Documents_Development_kodiak_island_src_data_hunt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/data/hunt.js */ \"./src/data/hunt.js\");\n/* harmony import */ var _Users_johnpfannkuchen_Documents_Development_kodiak_island_src_modules_displayPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/modules/displayPlayer.js */ \"./src/modules/displayPlayer.js\");\n\n\n\nfunction main() {\n  init();\n  displayTitle();\n  document.addEventListener('keydown', keyDown);\n  Object(_Users_johnpfannkuchen_Documents_Development_kodiak_island_src_modules_displayPlayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  displayScenario();\n}\n\nlet state = {\n  playerName: '',\n  energy: 0,\n  equipment: [],\n  skills: [],\n  diseases: [],\n};\n\nfunction init() {\n  console.clear();\n  getPlayerName();\n  getEnergy();\n  getSkills();\n  getDiseases();\n}\n\nfunction displayTitle() {\n  console.log(`\n  ▄ •▄       ·▄▄▄▄  ▪   ▄▄▄· ▄ •▄     ▪  .▄▄ · ▄▄▌   ▄▄▄·  ▐ ▄ ·▄▄▄▄  \n  █▌▄▌▪▪     ██▪ ██ ██ ▐█ ▀█ █▌▄▌▪    ██ ▐█ ▀. ██•  ▐█ ▀█ •█▌▐███▪ ██ \n  ▐▀▀▄· ▄█▀▄ ▐█· ▐█▌▐█·▄█▀▀█ ▐▀▀▄·    ▐█·▄▀▀▀█▄██▪  ▄█▀▀█ ▐█▐▐▌▐█· ▐█▌\n  ▐█.█▌▐█▌.▐▌██. ██ ▐█▌▐█ ▪▐▌▐█.█▌    ▐█▌▐█▄▪▐█▐█▌▐▌▐█ ▪▐▌██▐█▌██. ██ \n  ·▀  ▀ ▀█▄▀▪▀▀▀▀▀• ▀▀▀ ▀  ▀ ·▀  ▀    ▀▀▀ ▀▀▀▀ .▀▀▀  ▀  ▀ ▀▀ █▪▀▀▀▀▀• \n  `);\n}\n\nfunction displayScenario() {\n  let huntCard = Math.floor(Math.random() * _Users_johnpfannkuchen_Documents_Development_kodiak_island_src_data_hunt_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length);\n\n  console.log(\n    `You are faced with a${aOrAn(_Users_johnpfannkuchen_Documents_Development_kodiak_island_src_data_hunt_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][huntCard].Hunt.charAt(0))} ${\n      _Users_johnpfannkuchen_Documents_Development_kodiak_island_src_data_hunt_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][huntCard].Hunt\n    }.`\n  );\n}\n\nfunction aOrAn(str) {\n  console.log(str.charAt(0));\n  if (\n    str[0] === 'A' ||\n    'E' ||\n    'I' ||\n    'O' ||\n    'U' ||\n    'a' ||\n    'e' ||\n    'i' ||\n    'o' ||\n    'u'\n  ) {\n    return 'n';\n  }\n}\n\nlet gameIsSaved = false;\n\nfunction quit() {\n  gameIsSaved = window.prompt(`Save Game?`, false);\n  console.log(`Save Game?`);\n  console.log(gameIsSaved);\n}\n\nfunction keyDown() {\n  if (event.isComposing || event.keyCode === 27) {\n    quit();\n  }\n}\n\nfunction getPlayerName() {\n  let playerName;\n  do {\n    console.log(\"What's your name?\");\n    playerName = window.prompt(\"What's your name?\", 'Player 1');\n\n    if (playerName === '') {\n      playerName = 'Player 1';\n      console.log('Player name set to \"Player 1\"');\n    }\n  } while (playerName === '');\n\n  console.log(`Player name set to ${playerName}`);\n  state.playerName = playerName;\n}\n\nfunction getSkills(skill) {\n  state.skills.push(skill);\n}\n\nfunction getEquipment(item) {\n  state.equipment.push(item);\n}\n\nfunction getDiseases(ailment) {\n  state.diseases.push(ailment);\n}\n\nfunction getEnergy() {\n  state.energy = 100;\n}\n\nfunction generateDisplay() {\n  console.clear();\n  Object(_Users_johnpfannkuchen_Documents_Development_kodiak_island_src_modules_displayPlayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  displayScenario();\n}\n\nmain();\n\nfunction scenario() {\n  setWeather();\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/displayPlayer.js":
/*!**************************************!*\
  !*** ./src/modules/displayPlayer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction displayPlayer() {\n  console.log(`//////// ${state.playerName} VS Kodiak Island \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\`);\n  console.log(\n    `Energy: ${state.energy} ${!state.skills[0] ? '' : '| Skills: '} ${\n      state.diseases\n    } ${!state.equipment[0] ? '' : '| Equipment: '} ${state.equipment} ${\n      !state.diseases[0] ? '' : '| Diseases: '\n    } ${state.diseases}`\n  );\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayPlayer);\n\n\n//# sourceURL=webpack:///./src/modules/displayPlayer.js?");

/***/ })

/******/ });