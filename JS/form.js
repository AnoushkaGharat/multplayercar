class Form{
   constructor(){
    this.title = createElement("h2");
    this.input = createInput("name");
    this.button = createButton("PLAY");
    this.greeting = createElement("h3");

   } 
 
display(){
    this.title.html("Car Racing");
    this.title.position(130,0);
    

    this.input.position(130,160);


    this.button.position(250,200);


    this.button.mousePressed(function(){
        this.input.hide();
        button.hide();
        player.name = input.value();
        playerCount = playerCount + 1;
        player.index = playerCount;
        player.update(player.name);
        player.updateCount(playerCount);
        this.greeting.html("Hello "+ name);
        this.greeting.position(130,160);
    });

}


}