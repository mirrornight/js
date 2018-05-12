var SceneEnd = function(game) {
    var s = {
        game: game,
    }
    //初始化

    s.draw = function() {
        // draw labels
        game.context.fillText("game over", 300, 250);
    }
    s.update = function() {
    }
    return s
}