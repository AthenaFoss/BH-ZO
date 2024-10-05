const fs = require("fs");
const PNG = require("png-js");
const IMG_WIDTH = 2160;

// PNG.decode("shipmask.png", function (data) {
//   const result = {};
//   for (let i = 0; i < data.length; i += 4) {
//     const row = Math.floor(i / 4 / IMG_WIDTH);
//     if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) {
//       if (result[row]) {
//         result[row].push((i / 4) % IMG_WIDTH);
//       } else {
//         result[row] = [(i / 4) % IMG_WIDTH];
//       }
//     }
//   }
//   fs.writeFileSync(
//     "./mapBounds.js",
//     "export const LEVEL_BOUNDS = " + JSON.stringify(result)
//   );
// });

// PNG.decode("shipmask.png", function (data) {
//   const result = {};
//   for (let i = 0; i < data.length; i += 4) {
//     const row = Math.floor(i / 4 / IMG_WIDTH);
//     if (data[i] === 255 && data[i + 1] === 0 && data[i + 2] === 0) {
//       if (result[row]) {
//         result[row].push((i / 4) % IMG_WIDTH);
//       } else {
//         result[row] = [(i / 4) % IMG_WIDTH];
//       }
//     }
//   }
//   fs.writeFileSync(
//     "./redline.js",
//     "export const RED_LINE = " + JSON.stringify(result)
//   );
// });


// PNG.decode("enemyTrack.png", function (data) {
//   const result = {};
//   for (let i = 0; i < data.length; i += 4) {
//     const row = Math.floor(i / 4 / IMG_WIDTH);
//     if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 255) {
//       if (result[row]) {
//         result[row].push((i / 4) % IMG_WIDTH);
//       } else {
//         result[row] = [(i / 4) % IMG_WIDTH];
//       }
//     }
//   }
//   fs.writeFileSync(
//     "./enemybounds.js",
//     "export const ENEMY_BOUNDS = " + JSON.stringify(result)
//   );
// });


PNG.decode("pacmangame.png", function (data) {
  const result = {};
  for (let i = 0; i < data.length; i += 4) {
    const row = Math.floor(i / 4 / IMG_WIDTH);
    if (data[i] === 255 && data[i + 1] === 255 && data[i + 2] === 255) {
      if (result[row]) {
        result[row].push((i / 4) % IMG_WIDTH);
      } else {
        result[row] = [(i / 4) % IMG_WIDTH];
      }
    }
  }
  fs.writeFileSync(
    "./pacmangameentry.js",
    "export const GAME_ENTRY = " + JSON.stringify(result)
  );
});
