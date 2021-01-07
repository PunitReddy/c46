class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Start');
      this.title = createElement('h2');
    }
    hide(){
      
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }

    display(){
      this.title.html("Drivers Test");
      this.title.position(displayWidth/2 - 50, 100);

      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.mousePressed(()=>{
      //input.hide();
      //button.hide();

      console.log(candidateCount)
      candidateCount = candidateCount + 1
      candidate.updateCount(candidateCount)
      candidate.name = this.input.value()
      candidate.update()
      this.input.hide()
      this.button.hide()

      gameState = 1
      game.update(1)
      });
  
    }

    questions(){

      var q1 = createElement('h3');
      q1.html("What is the minimum age for driving a motorcycle without gear?")
      q1.position(150, 150)
      var op1 = createRadio()
      op1.position(150, 200)
      op1.option("16 years")
      op1.option("18 years")
      op1.option("21 years")
    }
}