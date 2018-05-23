var log = console.log.bind(console);

// var log = function(s) {
//     document.querySelector('#id-text-log').value += '\n' + s;
// }


// 矩形相交
var rectIntersects = function(a, b) {
    if (b.y  > a.y && b.y < a.y + a.image.height) {
        if (b.x > a.x && b.x < a.x + a.image.width) {
            return true;
        }
    }
    return false;
}

// 随机返回start，end这个闭区间中的一个整数值
const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}