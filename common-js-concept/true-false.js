//
/**
 *
 * truthy:
 * 1.. true
 * 2.. any number ( +ve , -ve) will be truthy other  than 0 ( akhne x aer man (5  , -5) hole true and x aer man 0 hole false)
 * 3.. ' ' string faka hole true
 * 4.. '0', 'false'
 * 5.. {},[]
 *
 *
 * falsy:
 * 1.. false
 * 2.. 0
 * 3.. '' (emty string false)
 * 4.. null
 *
 */
const x = {};
if (x) {
  console.log("value of x is truthy");
} else {
  console.log("value of x is falsy");
}

// oftinal
//check falsy
const y = 0;
if (!y) {
  //!y man ti true noi
  console.log("value is falsy");
}

// check true
const z = 1;
if (!!z) {
  //z aer manti true
  console.log("value is truthy");
}
