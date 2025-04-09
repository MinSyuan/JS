class main extends Phaser.Scene {

    constructor() {
        super({
            key: 'main'
        });

        window.heart = 3; //starting with 3 hearts

        // Put global variable here
    }

    preload() {

        // Preload all the assets here

        // Preload any images here
         // Images
         this.load.image("intro", "asset/mygame.jpg");
         this.load.audio('impossible', 'asset/impossible-291820.mp3');
        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {
        console.log('*** main scene');
        const howplay = this.add.image(0, 0, 'intro');

        const scaleX = this.game.config.width / howplay.width;
        const scaleY = this.game.config.height / howplay.height;
        howplay.setScale(scaleX, scaleY);
        
        howplay.setOrigin(0.5);
        howplay.setPosition(this.game.config.width / 2, this.game.config.height /2);

        // turn on loop, adjust the volume
this.bgMusic = this.sound.add("impossible",{loop: true}).setVolume(0.3);
// start the background musicc
this.bgMusic.play();
        
        
// Check for spacebar or any key here
var spaceDown = this.input.keyboard.addKey('SPACE');

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



        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

        //this.music.play()
        //window.music = this.music


        // Add image and detect spacebar keypress
        //this.add.image(0, 0, 'main').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to story');

            this.scene.start('story',
                // Optional parameters
                {

                }
            );
        }, this);


        // // Add any text in the main page
        // this.add.text(70, 400, 'Press spacebar to continue', {
        //     font: '30px Courier',
        //     fill: '#FFFFFF'
        // });


        // Create all the game animations here

    }


}