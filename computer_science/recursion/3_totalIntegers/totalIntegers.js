
const isObject = (value) => typeof value === "object" && value!== null;

function totalIntegers(data) {
  if (!isObject(data)) {
    return;
  }

  let count = 0;
  for (let item of Object.values(data)){
    if (Number.isInteger(item)){
        count++;
    }else if (isObject(item)){
        count += totalIntegers(item)
    }
  }
  return count
};
  
// Do not edit below this line
module.exports = totalIntegers;

totalIntegers([[5], 3])