class GuaImg {
    constructor(game, name) {
        this.game = game
        this.texture = game.imageByName(name)
        this.x = 0
        this.y = 0
        this.h = this.texture.height
        this.w = this.texture.width
    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    draw() {

    }
    update() {

    }
}


// class Player extends GuaImg {
//     constructor(game, name) {
//         super(game, name)
        
//     }
// }