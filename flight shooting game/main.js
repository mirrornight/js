//这里写的不好
var enableDebugMode = function(game, enable) {
    if (!enable) {
        return;
    }
    window.addEventListener('keydown', function(event){
        if (event.key == 'p') {
            paused = !paused;
        } else if ('123456789'.includes(event.key)) {
            // bricks = loadLevel(game, Number(event.key));
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
        background: 'img/background.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        bullet: 'img/bullet.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
    }
            
    var game = new GuaGame(60, imags, function(g) {
        var s = Scene.new(g);
        g.runWithScene(s);
    });
    enableDebugMode(game, true);
}

__main();