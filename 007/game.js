let config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom
    width: 32 * 30,
    height: 32 * 15,
    physics: {
      default: "arcade",
      arcade: {
        gravity: false,
        debug: true,
      },
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    backgroundColor: "#00015c",
    pixelArt: true,
    scene: [main, story, task, howplay, level1SCN, level1, level2, level3, gameOver, showInventory]
  };
  
let game = new Phaser.Game(config);
window.heart = 3
window.key = 0