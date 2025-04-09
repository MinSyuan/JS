class level3SCN extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'level3SCN' });
    }

    preload() {

        // Images
         this.load.image("lvl3SCN", "asset/level3scn.jpg");
    }

    create () {
    const howplay = this.add.image(0, 0, 'lvl3SCN');

const scaleX = this.game.config.width / howplay.width;
const scaleY = this.game.config.height / howplay.height;
howplay.setScale(scaleX, scaleY);

howplay.setOrigin(0.5);
howplay.setPosition(this.game.config.width / 2, this.game.config.height /2);

        console.log("This is howplay spacebar");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
            console.log("Spacebar pressed, go to level3");
            this.scene.start("level3"); 
        }, this );

    }

}
