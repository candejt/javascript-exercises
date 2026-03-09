const repeatString = function(item,times) {
    if (times <0) return "ERROR"
    let string=""
    for (let i=0; i<times; i++){
        string += item
    }
    return string
};


// Do not edit below this line
module.exports = repeatString;
