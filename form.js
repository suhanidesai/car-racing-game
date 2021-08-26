class Form {
  constructor() {
    this.heading = createElement("h1");
    this.inputbox = createInput("Enter Your Name");
    this.button = createButton("GO");
    this.greeting = createElement("h1");
    this.reset = createButton("reset");
  }
  displayForm() {
    this.heading.html("Welcome to the Car Racing Game");
    this.heading.position(displayWidth - 750, displayHeight - 700);
    this.inputbox.position(displayWidth - 625, displayHeight - 600);
    this.button.position(displayWidth - 590, displayHeight - 500);
    this.button.mousePressed(() => {
      this.heading.hide();
      this.inputbox.hide();
      this.button.hide();
      player.playername = this.inputbox.value();
      this.greeting.html("Welcome " + player.playername);
      this.greeting.position(displayWidth - 625, displayHeight - 600);
      playercount = playercount + 1;
      player.writePlayerCount(playercount);
      player.playerposition = playercount;
      player.createPlayerField();
    });
    this.reset.position(displayWidth - 300, displayHeight - 500);
    this.reset.mousePressed(() => {
      game.writeGameState(0);
      player.writePlayerCount(0);
      var ref = database.ref("allplayers");
      ref.remove();
    });
  }
}
