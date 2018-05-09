var Brick = function(position) {
    // position 是[0, 0]格式
    var image = imageFormPath('brick.png');
    var o = {
        image: image,
        x: position[0],
        y: position[1],
        w: 130,
        h: 20,
        alive: true,
        HP: position[2] || 1,
    }
    o.kill = function(){
        o.HP -= 1;
        if (o.HP == 0) {
            o.alive = false;
        }
    }
    o.collide = function(b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o;
}