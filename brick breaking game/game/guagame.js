class GuaGame {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d');
        //events
        var self = this
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true;
        })
        window.addEventListener('keyup', function(event){
            self.keydowns[event.key] = false;
        })
        this.init()
    }
    drawImage(img) {
        this.context.drawImage(img.image, img.x , img.y)
    }
    // update
    update() {
        this.scene.update();
    }
    // draw
    draw() {
        this.scene.draw();
    }
    registerAction(key, callback) {
        this.actions[key] = callback;
    }
    runloop() {
        var g = this
        var actions = Object.keys(g.actions);
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i];
            if (g.keydowns[key]) {
                g.actions[key]();
            }
        }
        g.update();
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
        g.draw();
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }
    init() {
        var g = this
        var loads = [];
        // 预先载入所有图片
        var names = Object.keys(g.images);
        for (var i = 0; i < names.length; i++) {
            let name = names[i];
            var path = g.images[name];
            let img = new Image();
            img.src = path;
            img.onload = function() {
                // 存入 g.images 中
                g.images[name] = img;
                // 所有图片都成功载入之后, 调用 run
                loads.push(1);
                log('load images', loads.length, names.length)
                if (loads.length == names.length) {
                    log('load images', g.images);
                    g.run();
                }
            }
        }
    }

    imageByName(name) {
        var g = this
        log('image by name', g.images);
        var img = g.images[name];
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image;
    }
    replaceScene(scene) {
        var g = this
        g.scene = scene;
    }
    runWithScene(scene) {
        var g = this
        g.scene = scene;
        // 开始运行程序
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }
    run() {
        this.runCallback(this);
    }
}

// var GuaGame = function(fps, images, runCallback) {
//     // images 是一个对象，里面是图片的引用名字和图片路径
//     // 程序会在所有图片载入成功后才运行
//     var g = {
//         scene: null,
//         actions: {},
//         keydowns: {},
//         images: {},
//     }
//     var canvas = document.querySelector('#id-canvas');
//     var context = canvas.getContext('2d');
//     g.canvas = canvas;
//     g.context = context;

//     //draw不清晰
//     g.drawImage = function(guaImage) {
//         g.context.drawImage(guaImage.image, guaImage.x , guaImage.y);
//     }

//     //events
//     window.addEventListener('keydown', function(event){
//         g.keydowns[event.key] = true;
//     })
//     window.addEventListener('keyup', function(event){
//         g.keydowns[event.key] = false;
//     })
//     // update
//     g.update = function() {
//         g.scene.update();
//     }
//     // draw
//     g.draw = function() {
//         g.scene.draw();
//     }
//     g.registerAction = function(key, callback) {
//         g.actions[key] = callback;
//     }
//     // timer 这里g.updata();不是很理解，闭包？
//     //setTimeout(...0)所表达的意思是：等待0秒后（这个时间由第二个参数值确定），
//     // 往消息队列插入一条定时器事件消息，并将其第一个参数作为回调函数；
//     // 而当执行栈内同步任务执行完毕时，线程从消息队列读取消息，将该异步任务入栈，
//     // 执行；线程空闲时再次从消息队列读取消息。
//     window.fps = 60;
//     var runloop = function() {
//         var actions = Object.keys(g.actions);
//         for (var i = 0; i < actions.length; i++) {
//             var key = actions[i];
//             if (g.keydowns[key]) {
//                 g.actions[key]();
//             }
//         }
//         g.update();
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         g.draw();
//         setTimeout(function(){
//             runloop()
//         }, 1000/window.fps)
//     }

//     var loads = [];
//     // 预先载入所有图片
//     var names = Object.keys(images);
//     for (var i = 0; i < names.length; i++) {
//         let name = names[i];
//         var path = images[name];
//         let img = new Image();
//         img.src = path;
//         img.onload = function() {
//             // 存入 g.images 中
//             g.images[name] = img;
//             // 所有图片都成功载入之后, 调用 run
//             loads.push(1);
//             log('load images', loads.length, names.length)
//             if (loads.length == names.length) {
//                 log('load images', g.images);
//                 g.run();
//             }
//         }
//     }
//     g.imageByName = function(name) {
//         log('image by name', g.images);
//         var img = g.images[name];
//         var image = {
//             w: img.width,
//             h: img.height,
//             image: img,
//         }
//         return image;
//     }
//     g.replaceScene = function(scene) {
//         g.scene = scene;
//     }
//     g.runWithScene = function(scene) {
//         g.scene = scene;
//         // 开始运行程序
//         setTimeout(function(){
//             runloop()
//         }, 1000/fps)
//     }
//     g.run = function() {
//         runCallback(g);
//     }
    

//     return g;
// }