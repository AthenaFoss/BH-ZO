import { SHIP_HEIGHT, SHIP_WIDTH } from "./constants";

// Set a threshold for the collision detection (you can tweak this value)
const COLLISION_THRESHOLD = 30;

export const pacmanLogic = (player, enemy) => {
    const absPlayerX = player.x + SHIP_WIDTH / 2;
    const absPlayerY = player.y + SHIP_HEIGHT / 2 + 20;

    const absEnemyX = enemy.x + SHIP_WIDTH / 2;
    const absEnemyY = enemy.y + SHIP_HEIGHT / 2 + 20;

    const distanceX = Math.abs(absEnemyX - absPlayerX);
    const distanceY = Math.abs(absEnemyY - absPlayerY);
  
    if (distanceX < COLLISION_THRESHOLD && distanceY < COLLISION_THRESHOLD) {
        alert("ZO ZO ZO ! Game Over")
    }
};
