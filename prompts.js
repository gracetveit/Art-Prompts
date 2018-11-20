function getRandomInt (min, max) {
    // Returns a random int between min and max 
    return Math.floor(Math.random() * (max - min) ) + min;
};

function genList (fileName) {
    // returns a random line from text file 'fileName' seperated by newlines
    var fs = require('fs');

    var list = fs.readFileSync(fileName).toString().split("\r\n");
    var randomItem = list[getRandomInt(0, list.length)];
    return randomItem;
};