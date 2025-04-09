////////////////////////////////////////////////////////
//
// access this function using updateInventory.call(this)
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function updateInventory() {
    console.log("*** updateInventory()")
    // Emit events showInventory
    this.inventory = {}
    this.inventory.heart = window.heart
     
  console.log('*** updateInventory() Emit event', this.inventory)
//   const showInventoryScene = this.scene.get('showInventory');
//   if (showInventoryScene) {
//     showInventoryScene.events.emit('updateInventory', this.inventory);
//   } else {
//     console.warn("showInventory scene not found!");
//   }
if (this.invEvent) {
    this.invEvent("inventory", { heart: window.heart });
} else {
  this.invEvent = function(event, data) {
    const showInventoryScene = this.scene.get('showInventory');
    if (showInventoryScene) {
      showInventoryScene.events.emit(event, data);
    }
  }.bind(this);
}
this.invEvent("inventory", { heart: window.heart });
}


  function globalHitFire(player, enemy) {
      console.log("*** player overlap enemy");
     
      // Shake screen
     this.cameras.main.shake(100);
     //this.hitenemySnd.play();
     //player red
     player.setTint(0xff0000);
     this.time.delayedCall(200, () => {
       player.clearTint();
     });
	 // deduct heart
          if (window.heart > 0) {
            window.heart--;
          }
    //   enemy.disableBody(true, true);
      
      // Call globalFunctions.js updateInventory
      updateInventory.call(this)
      if (window.heart <= 0) {
        console.log(this.scene.get("gameOver"));
        this.scene.start("gameOver");
    }
}
 
    // if (window.heart == 0){
	  //   console.log("*** player gameOver");
    //   this.scene.start("gameOver");
    //   //this.loselifeSnd.play();
    // }
    
//     function globalHitFire(player, enemy) {
//       // Reduce player's health
//       if (window.heart == 0) {
//           window.heart--;
          
//           // Optional: Add visual feedback
//           player.setTint(0xff0000); // Turn player red briefly
//           player.scene.time.delayedCall(200, () => {
//               player.clearTint();
//           });
//       }
  
//       if (window.heart <= 0) {
//           // Game over logic
//           player.scene.scene.start("gameOver");
//       }
//   }
//   }
  
  ////////////////////////////////////////////////////////
  //
  // access this function with globalCollectKey
  // Uses a JS function to prevent repeated codes
  // 
  /////////////////////////////////////////////////////// 
//  function globalCollectKey(player,item) {
//     console.log("*** player overlap key");
   
    // Shake screen
//    this.cameras.main.shake(100);

//    //this.hitenemySnd.play();

// 	// increase key count
//     window.key++;
//     item.disableBody(true, true);
//     updateInventory.call(this)

