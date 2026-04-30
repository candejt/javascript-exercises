function permutations(array) {

    if (array.length === 0){
        return [[]];
    }
  
    let result = [];
    for (let i=0; i<array.length; i++){
        const currentNum = array[i];

        const remainingNums = array.slice(0, i).concat(array.slice(i + 1));

        const remainingPermutations = permutations(remainingNums);

        for (let p of remainingPermutations) {
            result.push([currentNum, ...p]);
        }
    }
    return result;
};
  
// Do not edit below this line
module.exports = permutations;


