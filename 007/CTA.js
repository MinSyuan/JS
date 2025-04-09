class CTA extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'CTA' });
    }

    preload() {

        // Images
         this.load.image("CTA", "asset/CTA.jpg");
         this.load.audio('win', 'asset/win.mp3');

    }

    create () {
        let mainScene = this.scene.get('main');
        if (mainScene && mainScene.bgMusic) {
            mainScene.bgMusic.stop();
        this.winSnd = this.sound.add("win").setVolume(0.3);
        this.winSnd.play()
        }
    const howplay = this.add.image(0, 0, 'CTA');

const scaleX = this.game.config.width / howplay.width;
const scaleY = this.game.config.height / howplay.height;
howplay.setScale(scaleX, scaleY);

howplay.setOrigin(0.5);
howplay.setPosition(this.game.config.width / 2, this.game.config.height /2);

        console.log("This is task spacebar");

        //this.input.once('pointerdown', function(){
        var spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
            console.log("Spacebar pressed, go to main");
            this.scene.start("main"); 
        }, this );

    }

}