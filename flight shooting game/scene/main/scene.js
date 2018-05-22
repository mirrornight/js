var config = {
    player_speed: 10,
    cloud_speed: 1,
    enemy_speed: 5,
    bullet_speed: 5,
    fire_cooldown: 9,
}

class Bullet extends GuaImg {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        this.speed = 20
    }
    update() {
        this.speed = config.bullet_speed
        this.y -= this.speed
    }
}

class Player extends GuaImg {
    constructor(game) {
       super(game, 'player')
       this.setup()
    }
    setup() {
        this.speed = 10
        this.x = 200
        this.y = 500
        this.cooldown = 0
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = config.fire_cooldown
            var b = new Bullet(this.game)
            b.x = this.x + this.w / 2 - b.w / 2
            b.y = this.y - b.h / 2
            this.scene.addelements(b)
        } 
    }
    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }
    }
}

class Enemy extends GuaImg {
    constructor(game) {
        var type = randomBetween(1, 2)
        var name = 'enemy' + type
        super(game, name)
        this.setup()  
    }
    setup() {
        this.speed = randomBetween(5, 10)
        this.y = -randomBetween(0, 350)
        this.x = randomBetween(0, this.game.canvas.width)
    }
    update() {
        this.y += this.speed
        if (this.y > this.game.canvas.height) {
            this.setup()
        }
    }
    
}

class Cloud extends GuaImg {
    constructor(game) {
       super(game, 'cloud')
       this.setup()
    }
    setup() {
        this.speed = 1
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
    }
    update() {
        this.speed = config.cloud_speed
        // 云的移动
        this.y += this.speed
        if (this.y >= this.game.canvas.height) {
            this.y = 0 - this.h
        }
    }
    debug() {
        this.speed = config.cloud_speed
    }
}

class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        this.bg = GuaImg.new(this.game, 'background')
        this.numofenemies = 5
        // this.player = GuaImg.new(this.game, 'player')
        // this.player.x = 200
        // this.player.y = 500
        this.player = new Player(this.game)
        this.cloud = new Cloud(this.game)

        this.addelements(this.bg)
        this.addelements(this.cloud)
        this.addelements(this.player)
        this.addEnemies() 
    }
    addEnemies() {
        var es = []
        for (var i = 0; i < this.numofenemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addelements(e)
        }
        this.enemy = es
    }
    setupInputs() {
        var s = this
        // 飞机移动
        this.game.registerAction('a', function(){
            s.player.moveLeft();
        })
        this.game.registerAction('d', function(){
            s.player.moveRight();
        })
        this.game.registerAction('w', function(){
            s.player.moveUp();
        })
        this.game.registerAction('s', function(){
            s.player.moveDown();
        })
        this.game.registerAction('j', function(){
            s.player.fire()
        })
    }

    update() {
        super.update()
    }
}