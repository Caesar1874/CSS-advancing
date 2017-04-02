var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = 0;

rl.on('line', function(line){ // javascript每行数据的回调接口
   if(n === 1) {
       var arr = line.split(" ").reverse();
       for(var index = 0; index < arr.length; index ++) {
           for(var after = index + 1; after < arr.length; after++) {
               if(arr[index] === arr[after]) {
                   arr[after] = "";
               }
           }
       }
       arr.reverse();
       console.log(arr.join(" "))
   }
    n++;
});

function line(line){ // javascript每行数据的回调接口

        var arr = line.split(" ").reverse();
        for(var index = 0; index < arr.length; index ++) {
            for(var after = index + 1; after < arr.length; after++) {
                if(arr[index] === arr[after]) {
                    arr[after] = undefined;
                }
            }
        }
        arr.reverse();
        console.log(arr.join(" "))
    }


line("0 1 1 2")