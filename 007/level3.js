class level3 extends Phaser.Scene {
    constructor() {
      super({
        key: "level3",
      });
  
      // Put global variable here
    }
  
    preload() {
      // Step 1, load JSON
      console.log("Loading JSON:", "asset/level3map.json");
      this.load.tilemapTiledJSON("level3", "asset/level3map.json");
  
      
  
      // Step 2 : Preload any images here
      //this.load.image("building", "assets/Buildings32x32.png");
      //this.load.image("street", "assets/Street32x32.png");
  
      this.load.image("museumImg", "asset/22_Museum_32x32.png")
      this.load.image("grassImg", "asset/forest_tiles.png")
      this.load.image("decoImg", "asset/gather_plants_1.2.png")
      this.load.image("pipoyaImg", "asset/pipoya.png")
      this.load.image("treeImg", "asset/trees-green.png")
      this.load.spritesheet("jojo","asset/maincharacter.png",{ frameWidth:64, frameHeight:64 })
      this.load.spritesheet("robber","asset/enemy.png",{ frameWidth:64, frameHeight:64 })
    }
  
    create() {
      console.log("*** level3 scene");
      this.cursors = this.input.keyboard.createCursorKeys();
  
      //Step 3 - Create the map from main
      //let map = this.make.tilemap({ key: "world1" });
      let map = this.make.tilemap({ key: "level3" })
  
      // Step 4 Load the game tiles
      // 1st parameter is name in Tiled,
      // 2nd parameter is key in Preload
      //let buildingTiles = map.addTilesetImage("Buildings32x32", "building");
      //let streetTiles = map.addTilesetImage("Street32x32", "street");
  
      let museumTiles = map.addTilesetImage("22_Museum_32x32", "museumImg");
      let grassTiles = map.addTilesetImage("forest_tiles", "grassImg"); 
      let decoTiles = map.addTilesetImage("gather_plants_1.2", "decoImg"); 
      let pipoyaTiles = map.addTilesetImage("pipoya","pipoyaImg")
      let treeTiles = map.addTilesetImage("trees-green","treeImg")


      // Step 5  create an array of tiles
      // let tilesArray = [
      //   buildingTiles,
      //   streetTiles,
      // ];
  
      let tilesArray =[museumTiles,grassTiles,decoTiles,pipoyaTiles,treeTiles]
  
      // Step 6  Load in layers by layers
      //this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
      //this.streetLayer = map.createLayer("streetLayer",tilesArray,0,0);
      //this.buildingLayer = map.createLayer("buildingLayer",tilesArray,0,0);
  
      this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0)
      this.rockroadLayer = map.createLayer("rockroadLayer",tilesArray,0,0)
      this.grassLayer = map.createLayer("grassLayer",tilesArray,0,0)
      this.decoLayer = map.createLayer("decoLayer",tilesArray,0,0)
  
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
      
    this.enemy1 = this.add.sprite(500,850,'robber').play('robber-right')
    this.tweens.add({
        targets: this.enemy1,
        x: 750,
        flipX: true,
        yoyo: true,
        duration: 2000,
        repeat: -1
    })

    this.enemy2 = this.add.sprite(150,150,'robber').play('robber-right')
    this.tweens.add({
        targets: this.enemy2,
        x: 300,
        flipX: true,
        yoyo: true,
        duration: 2000,
        repeat: -1
    })

    this.enemy3 = this.add.sprite(1100,800,'robber').play('robber-right')
    this.tweens.add({
        targets: this.enemy3,
        x: 1350,
        flipX: true,
        yoyo: true,
        duration: 3000,
        repeat: -1
    })

    this.enemy4 = this.add.sprite(1400,500,'robber').play('robber-right')
    this.tweens.add({
        targets: this.enemy4,
        x: 1600,
        flipX: true,
        yoyo: true,
        duration: 3000,
        repeat: -1
    })

    this.enemy5 = this.add.sprite(850,350,'robber').play('robber-right')
    this.tweens.add({
        targets: this.enemy5,
        x: 1250,
        flipX: true,
        yoyo: true,
        duration: 3000,
        repeat: -1
    })


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
  [this.enemy1, this.enemy2, this.enemy3,this.enemy4,this.enemy5],
  globalHitFire,
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
      "buletImg"
    ). play("knifeAnim")    

    this.bullet.setVisible(false);

    let attackLeft = this.input.keyboard.addKey("z");
    let attackRight = this.input.keyboard.addKey("x");

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

    this.physics.add.overlap(
      this.bullet,
      [this.enemy1, this.enemy2, this.enemy3,this.enemy4,this.enemy5],
      this.killenemy,
      null,
      this
    );
// create the arrow keys
this.cursors = this.input.keyboard.createCursorKeys();

  
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
  }
      }
    
    
  /////////////////// end of update //////////////////////////////
  
   //////////// end of class world ////////////////////////
  