import { Game } from "./game";
import { Player } from "./player";

export function gameRunner(randomInt) {
  // a simulator of a game

  let notAWinner = false;

  const game = new Game();

  game.addPlayer(new Player("Chet"));
  game.addPlayer(new Player("Pat"));
  game.addPlayer(new Player("Sue"));

  do {
    game.roll(randomInt(6));

    if (randomInt(10) == 7) {
      notAWinner = game.wrongAnswer();
    } else {
      notAWinner = game.wasCorrectlyAnswered();
    }
  } while (notAWinner);
}
