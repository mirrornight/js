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
        var board = Board(game);
        var ball = Ball(game);
        var score = 0;
        bricks = loadLevel(game, 1);


        game.registerAction('a', function(){
            board.moveLeft();
        })
        game.registerAction('d', function(){
            board.moveRight();
        })
        game.registerAction('f', function(){
            ball.fire();
        })


        game.updata = function() {
            if (paused) {
                return;
            }
            ball.move();
            if (board.collide(ball)) {
                ball.rebound();
            }
            for (var i = 0; i < bricks.length; i++) {
                if (bricks[i].collide(ball)) {
                    log('砖与球相撞');
                    bricks[i].kill();
                    ball.rebound();
                    // 更新分数
                    score += 10;
                }
            }
            
        }
        var enableDrag = false;
        // mouse event
        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX;
            var y = event.offsetY;
            log('mousedown', x, y);
            // 检查是否点中了ball
            if (ball.hasPoint(x, y)) {
                //设置拖拽状态
                enableDrag = true;
            }
        })

        game.canvas.addEventListener('mousemove', function(event) {
            log(event);
            var x = event.offsetX;
            var y = event.offsetY;   
            if (enableDrag) {
                log('mousemove', x, y);
                ball.x = x;
                ball.y = y;
            }
        })

        game.canvas.addEventListener('mouseup', function(event) {
            log(event);
            var x = event.offsetX;
            var y = event.offsetY;
            log('mouseup', x, y);
            enableDrag = false;
        })

        game.draw = function() {
            game.drawImage(board);
            game.drawImage(ball);
            for (var i = 0; i < bricks.length; i++) {
                if (bricks[i].alive) {
                    game.drawImage(bricks[i]);
                }
            }
            // draw labels
            game.context.fillText("分数：" + score, 10, 580);
        } 
    });
    enableDebugMode(game, true);
}

__main();