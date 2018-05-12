var loadLevel = function(game, n) {
    n = n -1;
    var level = levels[n];
    var bricks = [];
    for (var i = 0; i < level.length; i++) {
        var p = level[i];
        var b = Brick(game, p);
        bricks.push(b);
    }
    return bricks;
}

//这里写的不好
var enableDebugMode = function(game, enable) {
    if (!enable) {
        return;
    }
    window.addEventListener('keydown', function(event){
        if (event.key == 'p') {
            paused = !paused;
        } else if ('123456789'.includes(event.key)) {
            bricks = loadLevel(game, Number(event.key));
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function() {
        var input = event.target;
        log(input.value);
        window.fps = Number(input.value);
    })
}


var paused = false;
var bricks = [];

var __main = function() {
    
    var imags = {
        ball: 'ball.png',
        board: 'board.png',
        brick: 'brick.png',
    }
            
    var game = GuaGame(60, imags, function(g) {
        var s = Scene(g);
        g.runWithScene(s);
    });
    enableDebugMode(game, true);
}

__main();