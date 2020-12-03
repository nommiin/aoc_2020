const fs = require("fs"), input = fs.readFileSync("input_3.txt").toString().split("\n");

// part 1
{
    let x = 0, t = 0;
    for(var i = 0; i < input.length; i++) {
        if (input[i][x] == "#") t++;
        x = (x + 3) % input[i].length;
    }
    console.log("Trees (Part 1):", t);
}

// part 2
{
    let patterns = [1, 3, 5, 7, 1], count = 0;
    for(var j = 0; j < patterns.length; j++) {
        let y = Math.floor((j + 1) / patterns.length) + 1, x = 0, t = 0;
        for(var i = 0; i < input.length; i += y) {
            if (input[i][x] == "#") t++
            x = (x + patterns[j]) % input[i].length;
        }
        x = 0;
        count = (count == 0 ? t : count * t);
    }
    console.log("Trees (Part 2): " + count);
}

