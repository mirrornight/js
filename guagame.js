var GuaGame = function(fps) {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector('#id-canvas');
    var context = canvas.getContext('2d');
    g.canvas = canvas;
    g.context = context;

    //draw不清晰
    g.drawImage = function(guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x , guaImage.y);
    }

    //events
    window.addEventListener('keydown', function(event){
        g.keydowns[event.key] = true;
    })
    window.addEventListener('keyup', function(event){
        g.keydowns[event.key] = false;
    })
    g.registerAction = function(key, callback) {
        g.actions[key] = callback;
    }
    // timer 这里g.updata();不是很理解，闭包？
    window.fps = 60;
    var runloop = function() {
        var actions = Object.keys(g.actions);
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i];
            if (g.keydowns[key]) {
                g.actions[key]();
            }
        }
        g.updata();
        context.clearRect(0, 0, canvas.width, canvas.height);
        g.draw();
        setTimeout(function(){
            runloop()
        }, 1000/window.fps)
    }
    setTimeout(function(){
        runloop()
    }, 1000/fps)

    return g;
}