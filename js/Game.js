/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
/**
 *
 */

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
    let phrases;
    return (phrases = [
      { phrase: "may the odd favour you" },
      { phrase: "Life is what happens to us while we are making other plans" },
      { phrase: "It does not do to dwell on dreams and forget to live" },
      {
        phrase:
          "It is better to be hated for what you are than to be loved for what you are not"
      },
      { phrase: "You only live once, but if you do it right, once is enough" }
    ]);
  }

  /**
   * Selects random phrase from phrases property
   * @return {object} Phrase object chosen to be used
   */

  getRandomPhrase(phrases) {
    randomQuote = Math.floor(Math.random() * phrases);
    return phrases[randomQuote];
  }
}
