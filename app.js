const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  playerCurrentGuess: null,
  prevoiusGuesses: [],


  getGuess: function(){
     
    let input = null
    
    
      input = window.prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`)
      this.playerCurrentGuess = parseInt(input)
  
    console.log(typeof this.playerCurrentGuess)
    return this.playerCurrentGuess
    },
  
  render: function(){
    if (this.playerCurrentGuess === this.secretNum){
      console.log(`Congrats! You guessed the number in ${this.prevoiusGuesses.length} guesses!`) 
    } else { console.log(`Your guess is too [high|low] Previous guesses: x, x, x, x`)}


  },
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      
      
        while (this.prevoiusGuesses[this.prevoiusGuesses.length-1] !== this.secretNum){
          this.getGuess()
        console.log(`the computer picked ${this.secretNum}`)
        console.log (this.playerCurrentGuess)
        this.prevoiusGuesses.push(this.playerCurrentGuess)
        console.log(this.prevoiusGuesses)
        this.render()
      }
          
      
      
        
      //return this.prevoiusGuesses
      
      
      // while ()
      // {this.getGuess()
      // this.prevoiusGuesses.push(this.playerCurrentGuess)}

      

  },
  

  
  }

  game.play()

 console.log(game.play)
  