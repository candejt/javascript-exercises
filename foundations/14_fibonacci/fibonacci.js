const fibonacci = function(count) {
    const n = typeof count!== 'number' ? parseInt(count): count
    if (n<0) return "OOPS"
    if (n===0)return 0

    let a=0
    let b=1
    for (let i=1; i<n; i++){
        const temp=b
        b=b+a
        a=temp
    }
    return b
};

// Do not edit below this line
module.exports = fibonacci;
