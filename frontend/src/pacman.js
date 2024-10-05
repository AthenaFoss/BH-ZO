import { SHIP_HEIGHT, SHIP_WIDTH } from "./constants";

const COLLISION_THRESHOLD = 50;

export const pacmanLogic = (player, enemy) => {
    const absPlayerX = player.x + SHIP_WIDTH / 2;
    const absPlayerY = player.y + SHIP_HEIGHT / 2 + 20;

    const absEnemyX = enemy.x + SHIP_WIDTH / 2;
    const absEnemyY = enemy.y + SHIP_HEIGHT / 2 + 20;

    const distanceX = Math.abs(absEnemyX - absPlayerX);
    const distanceY = Math.abs(absEnemyY - absPlayerY);

    if (distanceX < COLLISION_THRESHOLD && distanceY < COLLISION_THRESHOLD) {
        window.location.href = "/game-over.html";
    }
};
