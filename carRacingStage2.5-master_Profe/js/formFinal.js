class formFinal {

    constructor() {
      
      this.greeting = createElement('h2');
      this.greeting2 = createElement('h2');
      this.title = createElement('h2');
      
    }
    hide(){
      this.greeting.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Parabens!! Congratulation");
      this.title.position(displayWidth/2 - 50, 0);
  
        
     
        /*player.name = this.input.value();
        playerCount+=1;**/
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);


        this.greeting.html("Hello " + player.name)
        this.greeting2.html("Voce ficoum em " + player.rank + "lugar")
        this.greeting2.position(displayWidth/2 - 70, displayHeight/3);
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
     
  
     
  
    }
  }