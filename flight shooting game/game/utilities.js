var log = console.log.bind(console);

// var log = function(s) {
//     document.querySelector('#id-text-log').value += '\n' + s;
// }

var imageFormPath = function(path) {
    var img = new Image();
    img.src = path;
    return img;
}

// 矩形相交
var rectIntersects = function(a, b) {
    if (b.y  > a.y && b.y < a.y + a.image.height) {
        if (b.x > a.x && b.x < a.x + a.image.width) {
            return true;
        }
    }
    return false;
}

const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}