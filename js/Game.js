/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */

  createPhrases() {
    const phrase = [
      new Phrase("may the odd favour you"),
      new Phrase("Life is what happens to us while we are making other plans"),
      new Phrase("It does not do to dwell on dreams and forget to live"),

      new Phrase("life is like a box of chocolates"),
      new Phrase("You only live once, but if you do it right, once is enough")
    ];
    return phrase;
  }

  /**
   * Selects random phrase from phrases property
   * @return {object} Phrase object chosen to be used
   */

  getRandomPhrase() {
    let randomNum = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNum];
  }

  /**
   * Begins  the game by selecting a random phrase and displaying it to user
   */

  startGame() {
    document.getElementById("overlay").style.display = "none";
    const randomPhrase = this.getRandomPhrase();
    const phrase = new Phrase(randomPhrase.phrase);
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase;
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param {*HTML button} button
   */

  handleInteraction(button) {
    button.disabled = true;
    //checks if the button clicked matches the phrase letter
    const checkLetter = game.activePhrase.checkLetter(button.textContent);
    if (!checkLetter) {
      button.className = "wrong";
      this.removeLife();
    } else {
      button.className = "chosen";
      game.activePhrase.showMatchedLetter(button.textContent);

      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
  }

  /**
   * Increase the value of the missed property
   * Removes a life from the scoreboard
   * checks if the player has remaining lives and end game if player is out
   */
  removeLife() {
    document
      .querySelectorAll(".tries")
      [this.missed].getElementsByTagName("img")[0].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(this.checkForWin());
    }
  }
  /**
   * checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const phrase = document.querySelectorAll(".letter");
    return phrase.length === 0 ? true : false;
  }

  /**
   * Display game over message
   * @param {boolean} gameWon -Whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "";
    if (gameWon) {
      document.getElementById("game-over-message").innerHTML =
        "Congrats! You won the game!";
      overlay.className = "win";
    } else {
      document.getElementById("game-over-message").innerHTML =
        "Sorry, play better next time";
      overlay.className = "lose";
    }
    let ul = document.getElementById("phrase").getElementsByTagName("ul")[0];
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }

    //enable used keys
    let usedKeys = document.querySelectorAll(".wrong, .chosen");
    usedKeys.forEach(key => {
      key.disabled = false;
      key.className = "key";
    });

    //renews hearts
    this.missed = 0;

    const tries = document.querySelectorAll(".tries");
    tries.forEach(heartimg => {
      heartimg.getElementsByTagName("img")[0].src = "images/liveHeart.png";
    });
  }
}
