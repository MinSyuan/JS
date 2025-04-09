class howplay extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'howplay' });
    }

    preload() {

        // Images
         this.load.image("HOWplay", "asset/htp.jpg");
    }

    create () {
    const howplay = this.add.image(0, 0, 'HOWplay');

const scaleX = this.game.config.width / howplay.width;
const scaleY = this.game.config.height / howplay.height;
howplay.setScale(scaleX, scaleY);

howplay.setOrigin(0.5);
howplay.setPosition(this.game.config.width / 2, this.game.config.height /2);

        console.log("This is howplay spacebar");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
            console.log("Spacebar pressed, go to level1SCN");
            this.scene.start("level1SCN"); 
        }, this );

    
    // Check for spacebar or any key here

let key1 = this.input.keyboard.addKey(49);
let key2 = this.input.keyboard.addKey(50);
let key3 = this.input.keyboard.addKey(51);

key1.on('down', function(){
    this.scene.start("level1");
 }, this ); 
    key2.on('down', function(){
    this.scene.start("level2");
    }, this );
    key3.on('down', function(){
    this.scene.start("level3");
    }, this ); 

    }
}
