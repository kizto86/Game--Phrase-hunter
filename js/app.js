/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 *An event listener which starts the game when the user clicks on the start game button
 */
let game;
document.getElementById("btn__reset").addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  key.addEventListener("click", e => {
    game.handleInteraction(e.target);
  });
});
