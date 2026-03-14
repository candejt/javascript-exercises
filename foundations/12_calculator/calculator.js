const add = function(a,b) {
	const total= a+b
  return total
};

const subtract = function(a,b) {
  const total=a-b
  return total	
};

const sum = function(arr) {
	const total=arr.reduce((acc, curr)=>{
    return acc+curr
  }, 0)
  return total
};


const multiply = function(arr) {
  const total = arr.reduce((acc,curr)=>{
    return acc * curr
  }, 1)
  return total
};

const power = function(a,b) {
	const total = a**b
  return total
};

const factorial = function(a) {
  let total = 1
  for (let i=a; i>0; i--){
    total=total*i
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
