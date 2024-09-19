import { ENEMY_SPEED, ENEMY_BOUNDS } from "./constants-enemy";

import { SHIP_HEIGHT, SHIP_WIDTH } from "./constants";

// const isWithinEnemyBoundaries = (x, y) => {
//   return !ENEMY_BOUNDS[y] ? true : !ENEMY_BOUNDS[y].includes(x);
// };

// export const moveEnemy = (enemy) => {
//   let enemyMoved = false;
//   const absEnemyX = enemy.x + SHIP_WIDTH / 2;
//   const absEnemyY = enemy.y + SHIP_HEIGHT / 2 + 20;
//   // Check if the enemy is touching or outside the level bounds

//   if (ENEMY_BOUNDS[absEnemyY]) {
//     for (let i = 0; i < ENEMY_BOUNDS[absEnemyY].length; i++) {
//       if (absEnemyX < ENEMY_BOUNDS[absEnemyY][i] && (!ENEMY_BOUNDS[absEnemyY] || !ENEMY_BOUNDS[absEnemyY].includes(absEnemyX))) {
//         enemy.currentDirection = "left";
//       }
//       if (absEnemyX > ENEMY_BOUNDS[absEnemyY][i+1] && (!ENEMY_BOUNDS[absEnemyY] || !ENEMY_BOUNDS[absEnemyY].includes(absEnemyX))) {
//         enemy.currentDirection = "right";
//       }

//     }
//   }

//   // Move based on the current direction
//   if (enemy.currentDirection === "left") {
//     if (isWithinEnemyBoundaries(absEnemyX, absEnemyY - ENEMY_SPEED)) {
//       enemyMoved = true;
//       enemy.x += ENEMY_SPEED;
//       enemy.flipX = true;
//     }
//   }
//   if (enemy.currentDirection === "right") {
//     if (isWithinEnemyBoundaries(absEnemyX, absEnemyY - ENEMY_SPEED)) {
//       enemyMoved = true;
//       enemy.x -= ENEMY_SPEED;
//       enemy.flipX = false;
//     }
//   }

//   return enemyMoved;
//};


const isWithinMovementBoundaries = (x, y) => {
  return !ENEMY_BOUNDS[y] ? true : !ENEMY_BOUNDS[y].includes(x);
};

let directions = ["up", "down", "left", "right"];

const getRandomDirection = () => {
  return directions[Math.floor(Math.random() * 10)];
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
  setInterval(() => {
    movementAnimation(enemy); 
  }, 100);
};























// // Function to control enemy animations
// export const enemyAnimation = (enemy) => {
//   if (!enemy.anims.isPlaying) {
//     enemy.play("running");
//   }
// };

// // Function to update enemy movement periodically
// export const updateEnemyMovement = (enemy) => {
//   if (moveEnemy(enemy)) {
//     enemyAnimation(enemy);
//   } else {
//     enemy.anims.stop();
//   }
// };
