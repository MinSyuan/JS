class level2 extends Phaser.Scene {
    constructor() {
      super({
        key: "level2",
      });
      this.enemies = []; 
      this.enemiesDefeated = 0; 
      this.totalEnemies = 4;
      this.isPlayerInvulnerable = false    
      // Put global variable here
    }
  
    preload() {
      // Step 1, load JSON
      console.log("Loading JSON:", "asset/level2map.json");
      this.load.tilemapTiledJSON("level2", "asset/level2map.json");
      this.load.audio('shoot', 'asset/submachine-gun-79846.mp3');
      this.load.audio('hurt', 'asset/hurt.mp3');


      // Step 2 : Preload any images here
      //this.load.image("building", "assets/Buildings32x32.png");
      //this.load.image("street", "assets/Street32x32.png");
      
      this.load.image("gameOverImg", "asset/gameover.jpg");
      this.load.image("museumImg", "asset/22_Museum_32x32.png")
      this.load.image("floorImg", "asset/Carpet.png")
      this.load.image("wallImg", "asset/walltexture.png")
      this.load.image("artImg", "asset/7_Art_32x32.png")
      this.load.image("doorImg", "asset/trimsanddoors.png")
      this.load.spritesheet("jojo","asset/maincharacter.png",{ frameWidth:64, frameHeight:64 })
      this.load.spritesheet("robber","asset/enemy.png",{ frameWidth:64, frameHeight:64 })
      this.load.spritesheet("bulletImg", "asset/knife-32x32.png", { frameWidth: 32,frameHeight: 32 });
    }
  
    create() {
      console.log("*** level2 scene");
      this.shootSnd = this.sound.add("shoot").setVolume(0.5);
      this.hurtSnd = this.sound.add("hurt").setVolume(0.5);

      //Step 3 - Create the map from main
      //let map = this.make.tilemap({ key: "world1" });
      let map = this.make.tilemap({ key: "level2" })
  
      // Step 4 Load the game tiles
      // 1st parameter is name in Tiled,
      // 2nd parameter is key in Preload
      //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
      //let streetTiles = map.addTilesetImage("Street32x32", "street");
  
      let museumTiles = map.addTilesetImage("22_Museum_32x32", "museumImg");
      let floorTiles = map.addTilesetImage("Carpet", "floorImg"); 
      let wallTiles = map.addTilesetImage("walltexture", "wallImg"); 
      let artTiles = map.addTilesetImage("7_Art_32x32","artImg")
      let doorTiles = map.addTilesetImage("trimsanddoors","doorImg")

      // Step 5  create an array of tiles
  
      let tilesArray =[museumTiles,floorTiles,wallTiles,artTiles,doorTiles]
  
      // Step 6  Load in layers by layers
      //this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
      //this.streetLayer = map.createLayer("streetLayer",tilesArray,0,0);
      //this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);
  
      this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0)
      this.wallLayer = map.createLayer("wallLayer",tilesArray,0,0)
      this.artLayer = map.createLayer("artLayer",tilesArray,0,0)
      this.exitLayer = map.createLayer("thingsLayer",tilesArray,0,0)
      this.borderLayer = map.createLayer("borderLayer",tilesArray,0,0);

  
      //objectLayer
      let start = map.findObject("objectLayer", obj => obj.name === "start");
      // let enemy1 = map.findObject("objectLayer", obj => obj.name === "enemy1");
  
  
  
      // Add main player here with physics.add.sprite
    
      // this.add.sprite(100, 200, 'jojo').play('jojo-up')
      // this.add.sprite(150, 200, 'jojo').play('jojo-right')
      // this.add.sprite(200, 200, 'jojo').play('jojo-left')
      // this.add.sprite(250, 200, 'jojo').play('jojo-down')
      // this.enemy = this.physics.add.sprite(300, 1100, 'robber');
      this.player = this.physics.add.sprite(start.x,start.y, 'jojo');
      // window.player = this.player
  
      // Add time event / movement here
      this.anims.create({
        key: "jojo-up",
        frames: this.anims.generateFrameNumbers("jojo", { start: 105, end: 112 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "jojo-left",
        frames: this.anims.generateFrameNumbers("jojo", { start: 118, end: 125 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "jojo-down",
        frames: this.anims.generateFrameNumbers("jojo", { start: 131, end: 138 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "jojo-right",
        frames: this.anims.generateFrameNumbers("jojo", { start: 144, end: 151 }),
        frameRate: 5,
        repeat: -1,
      });
  
      //robber
      this.anims.create({
        key: "robber-up",
        frames: this.anims.generateFrameNumbers("robber", { start: 105, end: 112 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "robber-left",
        frames: this.anims.generateFrameNumbers("robber", { start: 118, end: 125 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "robber-down",
        frames: this.anims.generateFrameNumbers("robber", { start: 131, end: 138 }),
        frameRate: 5,
        repeat: -1,
      });
  
      this.anims.create({
        key: "robber-right",
        frames: this.anims.generateFrameNumbers("robber", { start: 144, end: 151 }),
        frameRate: 5,
        repeat: -1,
      });
      
    this.enemy1 = this.physics.add.sprite(120,650,'robber').play('robber-right')
    this.enemy2 = this.physics.add.sprite(1250,100,'robber').play('robber-left')
    this.enemy3 = this.physics.add.sprite(650,650,'robber').play('robber-right')
    this.enemy4 = this.physics.add.sprite(120,400,'robber').play('robber-right')
    this.enemies = [this.enemy1, this.enemy2, this.enemy3, this.enemy4];

    this.tweens.add({
        targets: this.enemy1,
        y: 800,
        flipY: false,
        yoyo: true,
        duration: 2000,
        repeat: -1
    })
    this.tweens.add({
        targets: this.enemy2,
        x: 1000,
        flipX: true,
        yoyo: true,
        duration: 3000,
        repeat: -1,
    })
    this.tweens.add({
        targets: this.enemy3,
        x: 900,
        flipX: true,
        yoyo: true,
        duration: 3000,
        repeat: -1,
    })
    this.tweens.add({
        targets: this.enemy4,
        x: 300,
        flipX: true,
        yoyo: true,
        duration: 3000,
        repeat: -1,
    })

    this.borderLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.borderLayer);

    this.wallLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.wallLayer);

    this.artLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player,this.artLayer);

    // this.thingsLayer.setCollisionByExclusion(-1, true);
    // this.physics.add.collider(this.player,this.thingsLayer);

// livebar
 // Call to update inventory items
 this.time.addEvent({
  delay: 100,
  callback: updateInventory,
  callbackScope: this,
  loop: false,
});

// start another scene in parallel
this.scene.launch("showInventory");

this.physics.add.overlap(
  this.player,
  this.enemies,
  this.playerHitByEnemy,
  null,
  this
);


  // player shoot
    // knive animation
    this.anims.create({
      key: "knifeAnim",
      frames: this.anims.generateFrameNumbers("bulletImg", { start: 0, end: 15 }),
      frameRate: 20,
      repeat: -1,
    });

    this.bullet = this.physics.add.sprite(
      this.player.x,
      this.player.y,
      "bulletImg"
    ). play("knifeAnim")    

    this.bullet.setVisible(false);
    this.bullet.body.setEnable(false); 


    let attackLeft = this.input.keyboard.addKey("z");
    let attackRight = this.input.keyboard.addKey("x");
    let attackUp = this.input.keyboard.addKey("a");
    let attackDown = this.input.keyboard.addKey("s");
    
    attackLeft.on(
      "down",
      function () {
        this.attackLeft();
      },
      this
    );

    attackRight.on(
      "down",
      function () {
        this.attackRight();
      },
      this
    );

    attackUp.on("down", function () {
      this.attackUp();
    }, this);
    
    attackDown.on("down", function () {
      this.attackDown();
    }, this);

    this.physics.add.overlap(
      this.bullet,
      [this.enemy1, this.enemy2, this.enemy3, this.enemy4],
      this.killenemy,
      null,
      this
    );

      // create the arrow keys
      this.cursors = this.input.keyboard.createCursorKeys();
  
      // camera follow player
      this.cameras.main.startFollow(this.player);
      
    // camera follow player
    this.cameras.main.startFollow(this.player);
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
    } /////////////////// end of create //////////////////////////////
  
    update() {
      // this.angle1 = Phaser.Math.Angle.BetweenPoints(this.enemy1, this.player);
      let speed = 300;
      this.player.setVelocity(0);
  
      if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-speed);
        this.player.anims.play("jojo-left", true); // walk left
      } else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(speed);
        this.player.anims.play("jojo-right", true);
      } else if (this.cursors.up.isDown) {
        this.player.body.setVelocityY(-speed);
        this.player.anims.play("jojo-up", true);
      } else if (this.cursors.down.isDown) {
        this.player.body.setVelocityY(speed);
        this.player.anims.play("jojo-down", true);
      } else {
        this.player.anims.stop();
        this.player.body.setVelocity(0, 0);
      }

      
    if (this.cursors.left.isDown) {
      console.log("Left key pressed");
    } else if (this.cursors.right.isDown) {
      console.log("Right key pressed");
    } else if (this.cursors.up.isDown) {
      console.log("Up key pressed");
    } else if (this.cursors.down.isDown) {
      console.log("Down key pressed");
    }
  }
  attackLeft() {
    
    // console.log("attack left");
    this.shootSnd.play()

    this.bullet.x = this.player.x;
    this.bullet.y = this.player.y;

    this.bullet.setVisible(true);
    this.bullet.body.setEnable(true);

	  // speed of the bullet
    this.bullet.body.setVelocityX(-500);
  }
  attackRight() {
    
    // console.log("attack right");
    this.shootSnd.play()

    this.bullet.x = this.player.x;
    this.bullet.y = this.player.y;

    this.bullet.setVisible(true);
    this.bullet.body.setEnable(true);

	  // speed of the bullet
    this.bullet.body.setVelocityX(500);
  }

  attackUp() {
    this.shootSnd.play()

    this.bullet.x = this.player.x;
    this.bullet.y = this.player.y;
    this.bullet.setVisible(true);
    this.bullet.body.setEnable(true);
    this.bullet.body.setVelocityY(-500);
    this.time.delayedCall(1000, () => {
      this.bullet.setVisible(false);
      this.bullet.body.setEnable(false);
      this.bullet.setVelocity(0, 0);
    }, [], this);
  }
  attackDown() {
    this.shootSnd.play()

    this.bullet.x = this.player.x;
    this.bullet.y = this.player.y;
    this.bullet.setVisible(true);
    this.bullet.body.setEnable(true);
    this.bullet.body.setVelocityY(500);
    this.time.delayedCall(1000, () => {
      this.bullet.setVisible(false);
      this.bullet.body.setEnable(false);
      this.bullet.setVelocity(0, 0);
    }, [], this);
  }

 playerHitByEnemy(player, enemy) {
  this.hurtSnd.play()

      if (this.isPlayerInvulnerable) return;
      
      if (window.heart > 0) {
        window.heart -= 1;
        updateInventory.call(this);

        this.cameras.main.shake(300);

        this.invEvent = function(event, data) {
          const showInventoryScene = this.scene.get('showInventory');
          if (showInventoryScene) {
              showInventoryScene.events.emit(event, data);
          }
      }.bind(this);

        this.invEvent("inventory", { heart: window.heart });
        
        this.isPlayerInvulnerable = true;
        player.setTint(0xff0000);
        
        const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, player.x, player.y);
        const knockbackForce = 200;
        player.setVelocity(
          Math.cos(angle) * knockbackForce,
          Math.sin(angle) * knockbackForce
        );
        this.time.delayedCall(1000, () => {
          this.isPlayerInvulnerable = false;
          player.clearTint();
        });
    
      }
      
      if (window.heart <= 0) {
        console.log("*** player gameOver");
        this.scene.stop("level2"); 
        this.scene.start("gameOver");
        console.log("*** gameOver scene started");

      }
    }

    killenemy(bullet, enemy){
      console.log("bullet hit enemy");
      this.cameras.main.shake(300);    
      enemy.disableBody (true, true);
      this.enemiesDefeated++;
      if (this.enemiesDefeated >= this.totalEnemies) {
        this.allEnemiesDefeated();
      }
    }
  
    // play a sound
    // this.hitSnd.play()
    
    allEnemiesDefeated() {
      console.log("All enemies defeated! Proceeding to next level...");
      this.cameras.main.flash(300, 255, 255, 255);
      
      this.time.delayedCall(1000, () => {
        this.scene.start("level3SCN", {
          playerHealth: window.heart,
          inventory: this.inventory
        });
      });
    }

    // Function to jump to level3
 level3SCN(player, enemy) {
  // this.music.stop{}
  this.scene.start("level3SCN", {
    player: player,
    inventory: this.inventory,
  });
}
}
    
  /////////////////// end of update //////////////////////////////
  
   //////////// end of class world ////////////////////////
  