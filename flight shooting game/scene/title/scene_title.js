class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('s', function(){
            var s = Scene(game);
            game.replaceScene(s);
        })
    }
    draw() {
        this.game.context.fillText("press 's' start", 300, 250);
    }
}