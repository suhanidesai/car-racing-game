class Player {
  constructor() {
    this.playerposition = null;
    this.playername = null;
    this.playerdistance = 0;
    this.playerrank = null;
  }
  readPlayerCount() {
    var gameref = database.ref("playercount");
    gameref.on("value", function (data) {
      playercount = data.val();
    });
  }
  writePlayerCount(s) {
    database.ref("/").update({
      playercount: s,
    });
  }
  createPlayerField() {
    var field = "allplayers/player" + this.playerposition;
    database.ref(field).set({
      name: this.playername,
      distance: this.playerdistance,
    });
  }
  readallPlayers() {
    var gameref = database.ref("allplayers");
    gameref.on("value", function (data) {
      allplayers = data.val();
    });
  }
  readCars() {
    var carref = database.ref("cars");
    carref.on("value", function (data) {
      cars = data.val();
    });
  }
  writeCars(c) {
    database.ref("/").update({
      cars: c,
    });
  }
}
