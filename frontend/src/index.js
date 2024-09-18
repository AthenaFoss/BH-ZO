import Phaser from "phaser";

import levelSprite from "./assets/ship.png";
import playerSprite from "./assets/player.png";

import {
  PLAYER_SPRITE_HEIGHT,
  PLAYER_SPRITE_WIDTH,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  PLAYER_START_X,
  PLAYER_START_Y,
} from "./constants";

import { movementAnimation, movePlayer } from "./utils";

const playerOne = {};
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

    this.anims.create({
      key: "running",
      frames: this.anims.generateFrameNumbers("player"),
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
  }

  update() {
    this.scene.scene.cameras.main.centerOn(
      playerOne.sprite.x,
      playerOne.sprite.y
    );
    movePlayer(pressedKeys, playerOne.sprite);
    movementAnimation(pressedKeys, playerOne.sprite);
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1760,
  height: 670,
  scene: MyGame,
};

const game = new Phaser.Game(config);
