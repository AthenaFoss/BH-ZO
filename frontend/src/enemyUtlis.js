import { ENEMY_SPEED } from "./constants-enemy";

import { SHIP_HEIGHT, SHIP_WIDTH, LEVEL_BOUNDS } from "./constants";

const isWithinEnemyBoundaries = (x, y) => {
  return !LEVEL_BOUNDS[y] ? true : !LEVEL_BOUNDS[y].includes(x);
};

export const moveEnemy = (enemy) => {
  let enemyMoved = false;
  const absEnemyX = enemy.x + SHIP_WIDTH / 2;
  const absEnemyY = enemy.y + SHIP_HEIGHT / 2 + 20;

  //   const direction = directions[Math.floor(Math.random() * directions.length)];
  let direction;
  if (
    !LEVEL_BOUNDS[absEnemyY]
      ? true
      : !LEVEL_BOUNDS[absEnemyY].includes(absEnemyX)
  ) {
    if (LEVEL_BOUNDS[absEnemyY]) {
      for (let i = 0; i < LEVEL_BOUNDS[absEnemyY].length; i++) {
        if (absEnemyX < LEVEL_BOUNDS[absEnemyY][i]) {
          direction = "right";
        } else {
          direction = "left";
        }
      }
    }
  }

  //   console.log("direction", direction);

  if (
    direction === "up" &&
    isWithinEnemyBoundaries(absEnemyX, absEnemyY - ENEMY_SPEED)
  ) {
    enemyMoved = true;
    enemy.y = enemy.y - ENEMY_SPEED;
  }
  if (
    direction === "down" &&
    isWithinEnemyBoundaries(absEnemyX, absEnemyY + ENEMY_SPEED)
  ) {
    enemyMoved = true;
    enemy.y = enemy.y + ENEMY_SPEED;
  }
  if (
    direction === "left" &&
    isWithinEnemyBoundaries(absEnemyX - ENEMY_SPEED, absEnemyY)
  ) {
    enemyMoved = true;
    enemy.x = enemy.x - ENEMY_SPEED;
    enemy.flipX = true;
  }
  if (
    direction === "right" &&
    isWithinEnemyBoundaries(absEnemyX + ENEMY_SPEED, absEnemyY)
  ) {
    enemyMoved = true;
    enemy.x = enemy.x + ENEMY_SPEED;
    enemy.flipX = false;
  }

  return enemyMoved;
};

// Function to control enemy animations
export const enemyAnimation = (enemy) => {
  if (!enemy.anims.isPlaying) {
    enemy.play("running");
  }
};

// Function to update enemy movement periodically
export const updateEnemyMovement = (enemy) => {
  if (moveEnemy(enemy)) {
    enemyAnimation(enemy);
  } else {
    enemy.anims.stop();
  }
};
