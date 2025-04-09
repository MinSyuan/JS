class gameOver extends Phaser.Scene {
  
    constructor() {
      super({key:"gameOver"});
    }

    init(data) {
      console.log(data)
      this.level = data.level;
    }
  
  preload() {
    this.load.audio('over', 'asset/gameover.mp3');
    this.load.image("gameOverImg", "asset/gameover.jpg");
    this.load.on("complete", function () {
      console.log("All asset loaded!");
    });
  }
  
  create() {
    console.log("*** gameOver scene started");
    let mainScene = this.scene.get('main');
    if (mainScene && mainScene.bgMusic) {
        mainScene.bgMusic.stop();
    this.overSnd = this.sound.add("over").setVolume(0.3);
    this.overSnd.play()
    }
    // this.sys.game.loop.sleep();

    this.gameOverImage = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "gameOverImg");
    const howplay = this.add.image(0, 0, 'gameOverImg');
    const scaleX = this.game.config.width / howplay.width;
    const scaleY = this.game.config.height / howplay.height;
    howplay.setScale(scaleX, scaleY);
    howplay.setOrigin(0.5);
    howplay.setPosition(this.game.config.width / 2, this.game.config.height /2);
    
    // this.scaleGameOverImage();
    //  this.scene.bringToTop("gameOver");
    //  this.add.image(0, 0, 'gameOverImg').setOrigin(0, 0);

  
    // Add image and detect spacebar keypress
    // this.add.text(0, 580, 'Press Enter to continue', { font: '24px Courier', fill: '#000000' });
    
    // Check for spacebar or any key here
    let enterDown = this.input.keyboard.addKey("SPACE");
    enterDown.on("down", function () {
      console.log("Spacebar pressed, go to main");
      window.heart = 3;
      this.scene.start("main"); 
    }, this );
}
} 
//     spaceDown.on('down', function() {
//         this.restart();
//     }, this);
// }

// restart() {
//     // Stop any active scenes
//     this.scene.stop('showInventory');
//     this.scene.stop(this.levelToRestart);
    
//     // Start fresh at the level they died on
//     this.scene.start(this.levelToRestart);

// if (window.heart <= 0) {
//   console.log("*** player gameOver");
//   this.scene.stop("level1");
//   this.scene.start("gameOver", { level: "level1" });
//   console.log("*** gameOver scene started");
// }

// // In level2.js when transitioning to game over
// if (window.heart <= 0) {
//   console.log("*** player gameOver");
//   this.scene.stop("level2");
//   this.scene.start("gameOver", { level: "level2" });
//   console.log("*** gameOver scene started");
// }
// // In level3.js when transitioning to game over
// if (window.heart <= 0) {
//   console.log("*** player gameOver");
//   this.scene.stop("level3");
//   this.scene.start("gameOver", { level: "level3" });
//   console.log("*** gameOver scene started");
// }
