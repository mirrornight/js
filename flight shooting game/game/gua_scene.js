class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addelements(guaimg) {
        this.elements.push(guaimg)
    }
    draw() {
        for (var i = 0; i < this.elements.length; i++){
            var e = this.elements[i]
            this.game.drawImage(e)
        }
    }
    update() {

    }
}

