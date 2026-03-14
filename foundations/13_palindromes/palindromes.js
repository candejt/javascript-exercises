const palindromes = function (string) {
    const alpha='abcdefghijklmnopqrstuvwxyz0123456789'
    const cleanString= string
        .toLowerCase()
        .split('')
        .filter((char)=>alpha.includes(char))
        .join('')
    const stringReverse= cleanString.split('').reverse().join('')
    return cleanString===stringReverse
};

// Do not edit below this line
module.exports = palindromes;
