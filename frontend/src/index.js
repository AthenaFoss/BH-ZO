import Phaser from "phaser";

import levelSprite from "./assets/ship.png";
import playerSprite from "./assets/player.png";
import enemySprite from "./assets/enemy.png";
import backgroundMusic from "./assets/The-Pink-Panther.mp3";
import {
  PLAYER_SPRITE_HEIGHT,
  PLAYER_SPRITE_WIDTH,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  PLAYER_START_X,
  PLAYER_START_Y,
} from "./constants";

import {
  ENEMY_SPRITE_WIDTH,
  ENEMY_SPRITE_HEIGHT,
  ENEMY_HEIGHT,
  ENEMY_WIDTH,
  ENEMY_START_X,
  ENEMY_START_Y,
} from "./constants-enemy";

import { movementAnimation, movePlayer } from "./utils";
import {
  moveEnemyAutomatically,
  movementEnemyAnimation,
  updateEnemyMovement,
} from "./enemyUtlis";
import { pacmanLogic } from "./pacman";

const playerOne = {};
const enemy = {};
let pressedKeys = [];


class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("ship", levelSprite);
    this.load.spritesheet("player", playerSprite, {
      frameWidth: PLAYER_SPRITE_WIDTH,
      frameHeight: PLAYER_SPRITE_HEIGHT,
    });

    this.load.spritesheet("enemy", enemySprite, {
      frameWidth: ENEMY_SPRITE_WIDTH,
      frameHeight: ENEMY_SPRITE_HEIGHT,
    });

    this.load.audio("bgMusic", backgroundMusic);
  }


  create() {
  
    const ship = this.add.image(0, 0, "ship");
    playerOne.sprite = this.add.sprite(
      PLAYER_START_X,
      PLAYER_START_Y,
      "player"
    );
    playerOne.sprite.displayHeight = PLAYER_HEIGHT;
    playerOne.sprite.displayWidth = PLAYER_WIDTH;

    enemy.sprite = this.add.sprite(ENEMY_START_X, ENEMY_START_Y, "enemy");
    enemy.sprite.displayHeight = ENEMY_HEIGHT;
    enemy.sprite.displayWidth = ENEMY_WIDTH;

    console.log(playerOne.sprite.x)
    console.log(enemy.sprite.x)




    this.anims.create({
      key: "p-running",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 60,
      repeat: -1,
    });

    this.anims.create({
      key: "e-running",
      frames: this.anims.generateFrameNumbers("enemy"),
      frameRate: 60,
      repeat: -1,
    });

    this.input.keyboard.on("keydown", (e) => {
      if (!pressedKeys.includes(e.code)) {
        pressedKeys.push(e.code);
      }
    });
    this.input.keyboard.on("keyup", (e) => {
      pressedKeys = pressedKeys.filter((key) => key !== e.code);
    });

    this.backgroundMusic = this.sound.add("bgMusic", { loop: true });
    this.backgroundMusic.play();

    // Add toggle switch functionality
    const checkboxInput = document.getElementById("checkboxInput");
    checkboxInput.addEventListener("change", () => {
      this.toggleAudio();
    });
    // Set initial state
    this.toggleAudio();
  }

  update() {
  let alertShown = false; 

    if (window.innerWidth < 1282 && !alertShown) {
     
      window.location.href = "../mobile.html";
      alertShown = true; // Set the flag to true to avoid multiple alerts
      const canvas= document.getElementsByTagName("canvas")
      canvas.style.display = "none"

      console.log("this is enterd")






  } else if (window.innerWidth >= 768) {
      alertShown = false; // Reset the flag if the size is back to normal
  }
    this.scene.scene.cameras.main.centerOn(
      playerOne.sprite.x,
      playerOne.sprite.y
    );
    movePlayer(pressedKeys, playerOne.sprite);
    movementAnimation(pressedKeys, playerOne.sprite);


    moveEnemyAutomatically(enemy.sprite);
    movementEnemyAnimation(enemy.sprite);
    updateEnemyMovement(enemy.sprite);

    pacmanLogic(playerOne.sprite, enemy.sprite)
  }
  toggleAudio() {
    const checkboxInput = document.getElementById("checkboxInput");
    if (checkboxInput.checked) {
      this.backgroundMusic.pause();
    } else {
      this.backgroundMusic.resume();
    }
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1440,
  height: 1080,
  scene: MyGame,
};



const game = new Phaser.Game(config);



