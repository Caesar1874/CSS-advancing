/**
 * Created by Administrator on 2016/11/6.
 */

function count() {
    var arr = [];
    for(var i = 1; i <= 4; i++) {
        (function(index) {
            arr.push(function() {
                return index * index;
            });
        })(i)
    }
    return arr;
}

function count() {
    var arr = [];
    for(let i = 1; i <= 4; i++) {
        arr.push(function() {
            return i*i;
        });
    }
    return arr;
}
