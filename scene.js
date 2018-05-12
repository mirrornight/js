var Scene = function(game) {
    var s = {
        game: game,
    }
    //初始化
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

    s.draw = function() {
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
    s.update = function() {
        // 判断游戏结束
        if (ball.y > board.y) {
            // 跳转到游戏结束的场景
            var end = SceneEnd(game);
            game.replaceScene(end);
        }
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
    // mouse event
    var enableDrag = false;
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

    return s
}