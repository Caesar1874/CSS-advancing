process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

var result;
process.stdin.on('end', function () {
    for(var index = 0; index < input.length; index = index + 3 ){
        if(index === 0) {
            result = eval(input.slice(index, index+3))
        } else {
            result = eval(`${result}`+input.slice(index, index + 2))
        }
    }
    console.log(result)
});


var result;
function value(input) {
    for(var index = 0; index < input.length; index = index + 3 ){
        if(index === 0) {
            result = eval(input.slice(index, index+3))
        } else {
            result = eval(`${result}`+input.slice(index, index + 2))
        }
    }
    console.log(result)

}

value("1+2*3")