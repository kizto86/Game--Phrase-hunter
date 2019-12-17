/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
/**
 * @param   {string}   phrase - The  actual phrase been represented by the phrase object
 */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseUl = document
      .getElementById("phrase")
      .getElementsByTagName("ul")[0];
    const splitPhrase = this.phrase.split("");
    let htmlLetters = [];
    splitPhrase.forEach(letter => {
      let li = document.createElement("li");
      phraseUl.append(li);
      li.innerHTML = letter;
      htmlLetters.push(li);
      if (letter === " ") {
        li.className = "space";
      } else {
        li.className = "letter";
      }
    });
  }

  /**
   * checked if passed letter in the phrase
   * @param (string) letter -Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * displays passed letter on screen after a match is found
   * @param (string) letter -letter to display
   */
  showMatchedLetter(letter) {
    const selectedLetter = document.querySelectorAll(".letter");
    selectedLetter.forEach(element => {
      if (element.innerHTML === letter) {
        element.className = "show";
      }
    });
  }
}
