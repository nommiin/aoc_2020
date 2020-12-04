const fs = require("fs"), input = fs.readFileSync("input_4.txt", { encoding: "utf-8"}).split("\n"), req = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const validator = {
    "byr": (v) => {return parseInt(v) >= 1920 && parseInt(v) <= 2002},
    "iyr": (v) => {return parseInt(v) >= 2010 && parseInt(v) <= 2020},
    "eyr": (v) => {return parseInt(v) >= 2020 && parseInt(v) <= 2030},
    "ecl": (v) => {return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].indexOf(v) > -1},
    "pid": (v) => {return v.length == 9;},
    "hgt": (v) => {
        var type = v.slice(-2), val = parseInt(v.slice(0, -2));
        if (type == "cm") return val >= 150 && val <= 193;
        else return val >= 59 && val <= 76;
    },
    "hcl": (v) => {
        if (v.length - 7 != 0) return false; 
        if (v[0] != "#") return false;
        for(var i = 1; i < v.length; v++) {
            var c = v.charCodeAt(i);
            if (((c >= 48 && c <= 57) || (c >= 97 && c <= 102)) == false) return false;
        }
        return true;
    }
}

var data = [];
for(var i = 0; i < input.length; i++) {
    var info = {};
    while (input[i].length != "") {
        input[i++].split(" ").forEach(e => {
            var kvp = e.split(":");
            info[kvp[0]] = kvp[1];
        });
    }
    data.push(info);
}

data.forEach(e => {
    console.log(e);
});
// a
/*
var valid = 0;
data.forEach(e => {
    var c = 0, missing = [];
    for(var i = 0; i < req.length; i++) {
        var val = e[req[i]];
        if (val != undefined) {
            if (validator[req[i]](val) == true) {
                c++;
            }
        }
        else missing.push(req[i]);
    }
    if (c == req.length || missing[0] == "cid") valid++;
});
console.log("Valid: " + valid);*/