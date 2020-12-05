const input = require("fs").readFileSync("input_5.txt", {encoding: "utf-8"}).replace(/F/g, "0").replace(/B/g, "1").replace(/L/g, "0").replace(/R/g, "1").split("\n");

var idmax = 0, ids = [];
for(var i = 0; i < input.length; i++) {
    var row_data = parseInt(input[i].slice(0, 7), 2), col_data = parseInt(input[i].slice(7), 2);
    var id = (row_data * 8) + col_data;
    idmax = Math.max(idmax, id);
    ids.push(id);
}
ids.sort();

console.log(ids);
for(var i = ids[0]; i < input.length; i++) {
    if (ids.includes(i) == false) console.log(i);
}
              //.split("\n");


              /*
for(var i = 0; i < input.length; i++) {
    console.log(input[i]);
}*/
/*
var id = [], idmax = 0;
for(var i = 0; i < input.length; i++) {
    var row = [0, 127];
    for(var j = 0; j < 7; j++) {
        switch (input[i][j]) {
            case "F": {
                row[1] = (row[0] + (row[1] - 1));
                break;
            }

            case "B": {
                row[0] = (row[0] + (row[1] + 1))
                break;
            }
        }
    }

    var col = [0, 7];
    for(var j = 8; j < 10; j++) {
        switch (input[i][j]) {
            case "L": {
                col[1] = (row[0] + (row[1] + 1));
                break;
            }

            case "R": {
                col[0] = (row[0] + (row[1] - 1))
                break;
            }
        }
    }
    id.push(row[0] * 8 + col[0]);
    idmax = Math.max(idmax, id[id.length - 1]);
}
console.log(idmax);*/