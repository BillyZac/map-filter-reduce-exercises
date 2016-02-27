var zooData = require('./data')

function entryCalculator (entrants) {
  console.log('==========================');
  console.log(entrants);
  console.log(!entrants);
  console.log('undefined check:', entrants == undefined);
  if (!entrants)
    return 0
};

function schedule (dayName) {
  // your code here
};

function animalCount (species) {
  var animalsArray = zooData.animals
  return animalsArray.reduce(function(accumulator, current) {
    if (!accumulator[current.name]) {
      accumulator[current.name] = 0
    }
    accumulator[current.name] = current.residents.length
    return accumulator
  }, {})
};

function animalMap (options) {
  // your code here
};

function animalPopularity (rating) {
  // your code here
};

function animalsByIds (ids) {
  // your code here
};

function animalByName (animalName) {
  // your code here
};

function employeesByIds (ids) {
  // your code here
};

function employeeByName (employeeName) {
  // your code here
};

function managersForEmployee (idOrName) {
  // your code here
};

function employeeCoverage (idOrName) {
  // your code here
};


module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage
}
