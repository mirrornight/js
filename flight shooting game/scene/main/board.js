

// // 改为对象
// var Board = function(game) {
//     var o = game.imageByName('board');
//     // var o = {
//     //     image: image,
//     //     x: 200,
//     //     y: 500,
//     //     speed: 8,
//     // }
//     o.x = 200;
//     o.y = 500;
//     o.speed = 8;

//     o.move = function(x) {
//         if (o.x < 0) {
//             o.x = 0;
//         } else if (o.x > 800 - o.w) {
//             o.x = 800 - o.w;
//         } else {
//             o.x = x;
//         }

//     }
//     o.moveLeft = function() {
//         o.move(o.x - o.speed);
//     }
//     o.moveRight = function() {
//         o.move(o.x + o.speed);
//     }

//     o.collide = function(ball) {
//         // if ((ball.y + ball.h) > o.y) {
//         //     if (ball.x > o.x && ball.x < o.x + o.w) {
//         //         return true;
//         //     }
//         // }
//         // return false
//         var a = o;
//         var b = ball;
//         if ((a.x >= b.x && a.x <= b.x + b.w) || (b.x >= a.x && b.x <= a.x + a.w)) {
//             if ((a.y >= b.y && a.y <= b.y + b.h) || (b.y >= a.y && b.y <= a.y + a.h)) {
//                 return true;
//             }
//         }
//         return false;
//     }
//     return o;
// }