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
  
    // On spacebar event, call the main scene
    enterDown.on("down", function () {
      console.log("Spacebar pressed, go to main");
      window.heart = 3;
      this.scene.start("main"); 
    }, this );
}
// scaleGameOverImage() {

//   if (!this.gameOverImage) {
//     console.error("gameOverImage 未定义！");
//     return;
  // }
  // Get screen dimensions
//   const gameOverImage = this.add.image(
//     gameWidth / 2,
//     gameHeight / 2,
//     "gameOverImg"
// );

  
  // Calculate scale while maintaining aspect ratio
//   const scale = Math.min(
//     (gameWidth * 0.8) / gameOverImage.width,
//     (gameHeight * 0.8) / gameOverImage.height
// );
  
//   // Apply the scale
//   this.gameOverImage.setScale(scale);
//   }
}