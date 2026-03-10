const sumAll = function(a,b) {
    if (a<0 || b<0 || typeof a !=="number"|| typeof b !=="number" || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"
    }
    let start = Math.min(a,b)
    let end = Math.max(a,b)

    let totalSum = 0

    for (let i= start; i<=end; i++){
        totalSum += i
    }
    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
