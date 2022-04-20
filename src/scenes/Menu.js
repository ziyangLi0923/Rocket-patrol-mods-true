class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        // Menu text
        let  menuConfig = {
            fontFamily: 'cursive',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        menuConfig.fontSize = '60px';
        this.add.text(game.config.width/2, game.config.height/3 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '28px';
        menuConfig.backgroundColor = '#9933ff';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to FIRE', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('bgm');
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('bgm45');
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('bgm','./assets/bgm.m4a');
        this.load.audio('bgm45','./assets/bgm45.m4a');
        this.load.audio('sfx_2explosion','./assets/Sed.explosion.m4a');
    }
}
