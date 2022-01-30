const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  playerCurrentGuess: null,
  prevoiusGuesses: [],


  getGuess: function(){
    let input = null 
    let isCorrectNum = null

    while (this.playerCurrentGuess !== this.secretNum ) {


          if (this.prevoiusGuesses.length ===0) {
            input = window.prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}.`)
            this.playerCurrentGuess = parseInt(input)
            return this.playerCurrentGuess 
            
          } else { input = window.prompt(`Enter a number  between ${this.smallestNum} and ${this.biggestNum}. Previous Guesses = ${this.prevoiusGuesses.join(', ')}`)
          this.playerCurrentGuess = parseInt(input)
          return this.playerCurrentGuess 
        
      }
      
     
    }
    
    },
  
  render: function(){
    
    if (this.playerCurrentGuess === this.secretNum){
      //console.log(`Congrats! You guessed the number in ${this.prevoiusGuesses.length} guesses!`) 
      alert(`Congrats! You guessed the number in ${this.prevoiusGuesses.length} guesses!`)
    } else if (this.playerCurrentGuess > this.secretNum){
      //console.log(`Your guess is too high Previous guesses: ${this.prevoiusGuesses.join(', ')}`) 
      alert(`Your guess is too high! Previous guesses: ${this.prevoiusGuesses.join(', ')} `)
    } else alert( `Your guess is too low! Previous guesses: ${this.prevoiusGuesses.join(', ')}`)
    //console.log(`Your guess is too low! Previous guesses: ${this.prevoiusGuesses.join(', ')}`) 
  },
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        while (this.prevoiusGuesses[this.prevoiusGuesses.length-1] !== this.secretNum){
        this.getGuess()
        //console.log(`the computer picked ${this.secretNum}`)
        //console.log (this.playerCurrentGuess)
        this.prevoiusGuesses.push(this.playerCurrentGuess)
        //console.log(this.prevoiusGuesses)
        this.render()
      }
  },
  

  
  }



 game.play()
