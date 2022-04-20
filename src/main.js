let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Menu , Play ]
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyG, keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;


// points breakdown :
// Implement the 'FIRE' UI text from the original game (5)
// Add your own (copyright-free) background music to the Play scene (5)
// Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
// Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)  》 a smaller blue spaceship which is worth 50 points
// Create a new title screen (e.g., new artwork, typography, layout) (10)    》 more clear game title and play introduction
// Create and implement a new weapon (w/ new behavior and graphics) (20)              》 After the rocket is fired, you can press 'G' to double explore the rocket for a small
//                                                                                       speed up(once per a fire since the fuel limit)

// Replace the UI borders with new artwork (10) 》 new UI borders which make the user's perspective be like looking out from the spacecraft  
// 
