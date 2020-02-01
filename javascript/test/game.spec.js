const { Game } = require("../src/game");
const { Player } = require("../src/player");

const _ = require("lodash");

const { gameRunner } = require("../src/game-runner");
const { getRandom } = require("./rands");
const expected = require("./expected");

describe("The game", function() {
  it("should work ;-)", function() {
    const loggedLines = [];
    const oldLog = console.log;
    console.log = function(arg) {
      loggedLines.push(arg);
    };

    _.range(15).forEach(() => {
      gameRunner(getRandom);
    });

    console.log = oldLog;

    expect(loggedLines).toEqual(expected);
  });

  it("should offer goldCoin if player answer correctly", function() {
    const game = new Game();
    const aPlayer = new Player("Ivan");
    const anotherPlayer = new Player("Jon");
    game.addPlayer(aPlayer);
    game.addPlayer(anotherPlayer);
    game.wasCorrectlyAnswered();
    expect(aPlayer.goldCoins).toEqual(1);
  })
});
