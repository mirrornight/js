var Ball = function() {
    var image = imageFormPath('ball.png');
    var o = {
        image: image,
        x: 200,
        y: 500,
        speedX: 10,
        speedY: 10,
        fired: false,
    }
    o.move = function() {
        if (o.fired) {
            // console.log('move');
            if (o.x < 0 || o.x > 800) {
                o.speedX *= -1;
            }
            if (o.y < 0 || o.y > 600) {
                o.speedY *= -1;
            }
            o.x += o.speedX;
            o.y += o.speedY;
        }
    }
    o.fire = function() {
        o.fired = true;
    }
    o.rebound = function() {
        o.speedY *= -1;
    }
    return o;
}