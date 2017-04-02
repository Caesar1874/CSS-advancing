process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
    console.log(input)
    console.log("la")
});

process.stdin.on('end', function () {
    input_array = input.split(" ");
    var w = input_array[0];
    var x = input_array[1];
    var y = input_array[2];
    var z = input_array[3];
    var arr = [];
    for(var p = w; p <= x; p ++) {
        for(var q = y; q <= z; q++) {
            arr.push(p / q);
        }
    }
    var set = new Set(arr);
    var arr2 = [...set];
    console.log(arr2.length)
});

/*
function number(input) {
    input_array = input.split(" ");
    var w = input_array[0];
    var x = input_array[1];
    var y = input_array[2];
    var z = input_array[3];
    var arr = [];
    for(var p = w; p <= x; p ++) {
        for(var q = y; q <= z; q++) {
            arr.push(p / q);
        }
    }
    var set = new Set(arr);
    var arr2 = [...set];
    console.log(arr2.length)
}*/
