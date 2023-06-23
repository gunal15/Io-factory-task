function calculateEarnings(n) {
  var maxEarnings = 0;
  var solutions = [];

  for (var T = 0; T <= n / 5; T++) {
    for (var P = 0; P <= n / 4; P++) {
      for (var C = 0; C <= n / 10; C++) {
        var time = T * 5 + P * 4 + C * 10;
        if (time === n) {
          var earnings = T * 1500 + P * 1000 + C * 3000;
          if (earnings > maxEarnings) {
            maxEarnings = earnings;
            solutions = [{ T, P, C }];
          } else if (earnings === maxEarnings) {
            solutions.push({ T, P, C });
          }
        }
      }
    }
  }

  return { maxEarnings, solutions };
}

function printSolution(time, maxEarnings, solutions) {
  console.log(`Time Unit: ${time}`);
  console.log(`Earnings: $${maxEarnings}`);
  console.log(`Solutions`);

  if (solutions.length === 0) {
    console.log("No valid solutions found.");
  } else {
    solutions.forEach((solution, index) => {
      console.log(
        `${index + 1}. T: ${solution.T} P: ${solution.P} C: ${solution.C}`
      );
    });
  }
}

var time1 = 7;
var { maxEarnings: maxEarnings1, solutions: solutions1 } =
  calculateEarnings(time1);
printSolution(time1, maxEarnings1, solutions1);

var time2 = 8;
var { maxEarnings: maxEarnings2, solutions: solutions2 } =
  calculateEarnings(time2);
printSolution(time2, maxEarnings2, solutions2);

var time3 = 13;
var { maxEarnings: maxEarnings3, solutions: solutions3 } =
  calculateEarnings(time3);
printSolution(time3, maxEarnings3, solutions3);
