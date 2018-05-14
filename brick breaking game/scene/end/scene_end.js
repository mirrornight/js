class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            var s = SceneTitle.new(game);
            game.replaceScene(s);
        })
    }
    draw() {
        this.game.context.fillText("game over, press 'r' to start", 300, 250);
    }
}