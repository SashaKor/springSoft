// stARKS -- Alexandra Koroza and Raunak Chowdhury
// Softdev2 pd08
// K21 --  Onions, Bell Peppers, and Celery, Oh My!  JS and the Holy Trinity
// 2019-04-29

var csv_link = 'https://raw.githubusercontent.com/raunakchowdhury/softdevhw2/master/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.csv';

var numschools = document.getElementById('numschools');
var medianethnicity = document.getElementById('medianethnicity');
var percentageEthnicity = document.getElementById('percentageEthnicity');
var numgrades = document.getElementById('numgrades');
console.log(numschools);

d3.csv(csv_link).then(function(data) {
  numschools.innerHTML = numSchools(data, '20052006');
  medianethnicity.innerHTML = medianNumEthnicity(data, '20052006', 'white');
  var perEthnicity = percentEthnicity(data, '20052006', 'white');
  console.log(perEthnicity)
  percentageEthnicity.innerHTML = stringify(perEthnicity);
  numgrades.innerHTML = numSchoolsGrades(data, '20052006', 'grade9', 'grade10');
});

var findYear = function(data, years){
  // data: dataset
  // years: "year1year2"
  return data.filter(function(n){ return n.schoolyear == years; });
};

var stringify = function(array){
  var string = '';
  array.forEach(function(school){
    string += school['%ethnicity'] + ',\n';
  });
  return string;
}

var numSchools = function(data, years){
  // finds the number of schools that exist in that year.
  return findYear(data, years).length;
};

var medianNumEthnicity = function(data, years, ethnicity){
  // finds the median of an ethnic group in all the schools in that year.
  var ethnicity_index = ethnicity + '_num';
  var yearData = findYear(data, years);
  var ethnicityData = yearData.map(function(school){ return parseInt(school[ethnicity_index],10); });
  ethnicityData.sort();
  console.log(ethnicityData);
  if (ethnicityData.length % 2 == 0){
    return (ethnicityData[ethnicityData.length / 2] + ethnicityData[ethnicityData.length / 2 + 1]) / 2;
  }
  return ethnicityData[Math.ceil(ethnicityData.length / 2)];
}

var percentEthnicity = function(data, years, ethnicity){
  // returns chosen ethnicity % of total % in a given year
  var ethnicity_index = ethnicity + '_num';
  var yearData = findYear(data, years);
  var ethnicityData = yearData.map(function(school){
    return {'name': school.Name, '%ethnicity': (school[ethnicity_index] / school.total_enrollment) * 100};
  });
  return ethnicityData;
};

var numSchoolsGrades = function(data, years, grade1, grade2){
  // returns the # of schools that have grades grade1 and grade2 for a given year
  var yearData = findYear(data, years);
  var gradeData = yearData.filter(function(school){ return school[grade1] && school[grade2]; });
  // console.log(gradeData);
  return gradeData.length;
};

console.log('yerr');

// var
