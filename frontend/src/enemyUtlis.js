
import { ENEMY_SPEED, ENEMY_BOUNDS } from "./constants-enemy";
import { SHIP_HEIGHT, SHIP_WIDTH } from "./constants";


const isWithinMovementBoundaries = (x, y) => {
  return !ENEMY_BOUNDS[y] ? true : !ENEMY_BOUNDS[y].includes(x);
};


let directions = ["up", "down", "left", "right"];

const getRandomDirection = () => {
  return directions[Math.floor(Math.random() * directions.length)];
};
export const moveEnemyAutomatically = (enemy) => {
  let enemyMoved = false;
  const absEnemyX = enemy.x + SHIP_WIDTH / 2;
  const absEnemyY = enemy.y + SHIP_HEIGHT / 2 + 20;

  if (!enemy.currentDirection) {
    enemy.currentDirection = getRandomDirection();
  }

  if (enemy.currentDirection === "up" && isWithinMovementBoundaries(absEnemyX, absEnemyY - ENEMY_SPEED)) {
    enemy.y -= ENEMY_SPEED;
    enemyMoved = true;
  } else if (enemy.currentDirection === "down" && isWithinMovementBoundaries(absEnemyX, absEnemyY + ENEMY_SPEED)) {
    enemy.y += ENEMY_SPEED;
    enemyMoved = true;
  } else if (enemy.currentDirection === "left" && isWithinMovementBoundaries(absEnemyX - ENEMY_SPEED, absEnemyY)) {
    enemy.x -= ENEMY_SPEED;
    enemy.flipX = true;
    enemyMoved = true;
  } else if (enemy.currentDirection === "right" && isWithinMovementBoundaries(absEnemyX + ENEMY_SPEED, absEnemyY)) {
    enemy.x += ENEMY_SPEED;
    enemy.flipX = false;
    enemyMoved = true;
  } else {

    enemy.currentDirection = getRandomDirection();
  }

  return enemyMoved;
};


export const movementEnemyAnimation = (enemy) => {
  if (moveEnemyAutomatically(enemy)) {
    if (!enemy.anims.isPlaying) {
      enemy.play("e-running");
    }
  } else if (enemy.anims.isPlaying) {
    enemy.anims.stop("e-running");
  }
};

export const updateEnemyMovement = (enemy) => {

  movementEnemyAnimation(enemy);

};
