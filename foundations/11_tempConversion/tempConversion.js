const convertToCelsius = function(temp) {
  let conversion = (temp-32) * (5/9)
  let cel = Math.round (conversion*10)/10
  return cel
};

const convertToFahrenheit = function(temp) {
  let conversion = (temp * (9/5) + 32)
  let fahr = Math.round (conversion*10)/10
  return fahr
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
