function contains (object, value) {
  for (let key in object){
    if (object[key] === value || (Number.isNaN(object[key]) && Number.isNaN(value))){
        return true;
    }
    if (typeof object[key] === 'object' && object[key] !== null){
        if (contains (object[key],value)){
            return true;
        }
    }
  }
  return false;
  
};
  
// Do not edit below this line
module.exports = contains;


