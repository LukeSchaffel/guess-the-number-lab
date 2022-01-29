const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

  },
  prevoiusGuesses: [],

  getGuess: function(){
    this.playerGuess = window.prompt(`Enter a number between ${this.smallestNum} and 1 ${this.biggestNum}`)
    if (this.playerGuess >= 1 &&  this.playerGuess <= 100) {return this.playerGuess} else {return this.playerGuess = NaN}
  },
  }

  //game.getGuess()
  console.log(typeof game.playerGuess)

 