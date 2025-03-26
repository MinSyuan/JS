class gameOver extends Phaser.Scene {
  
    constructor() {
      super("gameOver");
    }

    init(data) {
      console.log(data)
      this.level = data.level;
    }
  
  preload() {
    this.load.image("gameOverImg", "asset/gameover.jpg");
  
  }
  
  create() {
    console.log("*** gameOver scene");
     this.scene.bringToTop("gameOverImg");
  
    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'gameOverImg').setOrigin(0, 0);
  
    // Check for spacebar or any key here
    let enterDown = this.input.keyboard.addKey("ENTER");
  
    // On spacebar event, call the main scene
    enterDown.on("down", function () {
    console.log("Jump to level1SCN");
    window.heart = 3;
  
    if ( this.level==1){
      this.scene.start("level1")
     }else if ( this.level==2){
      this.scene.start("level2")}
      else if (this.level==3){
        this.scene.start("level3")
      }
      },
      this
    );
    
    }
  
  }