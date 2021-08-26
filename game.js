class Game {
  constructor() {}

  readGameState() {
    var gameref = database.ref("gamestate");
    gameref.on("value", function (data) {
      gamestate = data.val();
    });
  }
  writeGameState(s) {
    database.ref("/").update({
      gamestate: s,
    });
  }
  playGame() {
    form.greeting.hide();
    form.button.hide();
    form.heading.hide();
    form.inputbox.hide();
    player.readallPlayers();
    player.readCars()
    var i = 0;
    var h = 575;
    image(track, 0, -displayHeight * 9, displayWidth, displayHeight * 10);
    for (var plr in allplayers) {
      console.log(array[i], i, h);
      //console.log(allplayers[plr].name)
      //console.log(allplayers[plr].distance)
      array[i].x = h;
      array[i].y = displayHeight - allplayers[plr].distance;
      if (i + 1 == player.playerposition) {
        camera.position.x = displayWidth / 2;
        camera.position.y = array[i].y;
      }
      i = i + 1;
      h = h + 300;
    }
    if (keyDown(UP_ARROW)) {
      player.playerdistance = player.playerdistance + 50;
      player.createPlayerField();
    }
    if(player.playerdistance>8600){
     cars=cars+1
     player.playerrank=cars
     player.writeCars(cars)
     gamestate=2
    }
    drawSprites();
  }
    showRank(){
    alert(player.playername+" got a rank of "+ player.playerrank)
    }
}
