import {
  PLAYER_SPEED,
  SHIP_HEIGHT,
  SHIP_WIDTH,
  LEVEL_BOUNDS,
  RED_LINE
} from "./constants";

const openInNewTab = (url) => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
};

const isWithinMovementBoundaries = (x, y) => {
  if ((RED_LINE[y] && RED_LINE[y].includes(x)) ? window.location.href = "/home.html" : "/home.html")


    return !LEVEL_BOUNDS[y] ? true : !LEVEL_BOUNDS[y].includes(x);
};

export const movePlayer = (keys, player) => {
  let playerMoved = false;
  const absPlayerX = player.x + SHIP_WIDTH / 2;
  const absPlayerY = player.y + SHIP_HEIGHT / 2 + 20;

 
  if (
    keys.includes("ArrowUp") &&
    isWithinMovementBoundaries(absPlayerX, absPlayerY - PLAYER_SPEED)
  ) {
    playerMoved = true;
    player.y = player.y - PLAYER_SPEED;
  }
  if (
    keys.includes("ArrowDown") &&
    isWithinMovementBoundaries(absPlayerX, absPlayerY + PLAYER_SPEED)
  ) {
    playerMoved = true;
    player.y = player.y + PLAYER_SPEED;
  }
  if (
    keys.includes("ArrowLeft") &&
    isWithinMovementBoundaries(absPlayerX - PLAYER_SPEED, absPlayerY)
  ) {
    playerMoved = true;
    player.x = player.x - PLAYER_SPEED;
    player.flipX = true;
  }
  if (
    keys.includes("ArrowRight") &&
    isWithinMovementBoundaries(absPlayerX + PLAYER_SPEED, absPlayerY)
  ) {
    playerMoved = true;
    player.x = player.x + PLAYER_SPEED;
    player.flipX = false;
  }
  return playerMoved;
};

export const movementAnimation = (keys, player) => {
  const runningKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  if (
    keys.some((key) => runningKeys.includes(key)) &&
    !player.anims.isPlaying
  ) {
    player.play("p-running");
  } else if (
    !keys.some((key) => runningKeys.includes(key)) &&
    player.anims.isPlaying
  ) {
    player.stop("p-running");
  }
};
