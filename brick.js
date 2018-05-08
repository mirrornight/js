var Brick = function() {
    var image = imageFormPath('brick.png');
    var o = {
        image: image,
        x: 0,
        y: 0,
        w: 130,
        h: 20,
        alive: true,
    }
    o.kill = function(){
        o.alive = false;
    }
    o.collide = function(b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o;
}