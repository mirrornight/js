// 改为对象
var Board = function(game) {
    var o = game.imageByName('board');
    // var o = {
    //     image: image,
    //     x: 200,
    //     y: 500,
    //     speed: 8,
    // }
    o.x = 200;
    o.y = 500;
    o.speed = 8;

    o.move = function(x) {
        if (o.x < 0) {
            o.x = 0;
        } else if (o.x > 800 - o.image.width) {
            o.x = 800 - o.image.width;
        } else {
            o.x = x;
        }

    }
    o.moveLeft = function() {
        o.move(o.x - o.speed);
    }
    o.moveRight = function() {
        o.move(o.x + o.speed);
    }
    o.collide = function(ball) {
        if ((ball.y + ball.image.height) > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                return true;
            }
        }
        return false
    }
    return o;
}