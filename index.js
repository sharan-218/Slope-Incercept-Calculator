// const ctx = document.querySelector("#canvas").getContext("2d");
// const sp = document.querySelector("#slope");
// const ip = document.querySelector("#intercept");
// const fy = document.querySelector("#fitY");
class FitStraightLine {
  constructor(X, Y) {
    if (
      Array.isArray(X) &&
      Array.isArray(Y) &&
      X.length === Y.length &&
      X.every((x) => typeof x === "number") &&
      Y.every((y) => typeof y === "number")
    ) {
      this.X = X;
      this.Y = Y;
      this.slope = null;
      this.intercept = null;
    } else {
      alert("X and Y must be arrays of numbers with the same length.");
      throw new Error(
        "X and Y must be arrays of numbers with the same length."
      );
    }
  }
  calcN() {
    return this.X.length;
  }
  Mean(values) {
    return values.reduce((prev, curr) => prev + curr) / values.length;
  }
  calculateSlopeIntercept() {
    let N = this.calcN();
    let numerator = 0;
    let denominator = 0;
    let meanX = this.Mean(this.X);
    let meanY = this.Mean(this.Y);

    for (let i = 0; i < N; i++) {
      numerator += (this.X[i] - meanX) * (this.Y[i] - meanY);
      denominator += Math.pow(this.X[i] - meanX, 2);
    }
    if (denominator === 0) throw new Error("Cannot divide by zero");
    this.slope = numerator / denominator;
    this.intercept = meanY - this.slope * meanX;
  }
  predict(x) {
    if (this.slope === null || this.intercept === null) {
      this.calculateSlopeIntercept();
    }
    return this.slope * x + this.intercept;
  }
}

const X = [80, 78, 75, 75, 68, 6.7, 60, 50.9];
const Y = [12, 13, 14, 14, 14, 16, 15, 17];
const stLine = new FitStraightLine(X, Y);
let predictX = stLine.predict(800);
console.log(predictX);

/*
function plotGraph(X, Y, fittedY) {
  new Chart(ctx, {
    type: "scatter", // Scatter plot for individual data points
    data: {
      datasets: [
        {
          label: "Data Points",
          data: X.map((x, i) => ({ x: x, y: Y[i] })),
          backgroundColor: "rgba(75, 192, 192, 1)",
        },
        {
          label: "Fitted Line",
          data: X.map((x, i) => ({ x: x, y: fittedY[i] })),
          type: "line",
          fill: false,
          borderColor: "rgba(255, 99, 132, 1)",
          showLine: true,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "linear",
          position: "bottom",
        },
        y: {
          type: "linear",
        },
      },
    },
  });
}
*/

/*
This program generates random coordinates for points, fits straight lines to these points, and calculates the slopes and intercepts of these lines.
*/
/*
function randomRange(R) {
  return Math.round(Math.random() * R);
}
function generateRandomXY(n) {
  let X = [];
  let Y = [];
  for (let i = 0; i < n; i++) {
    X[i] = Math.random() * (n * 2 + 0.8825 * i) + i;
    Y[i] = Math.random() * (n - i) * 0.8;
  }
  return { X, Y };
}

let stLines = [];
let slopes = [];
let intercepts = [];
let n = randomRange(10);

for (let i = 0; i < n; i++) {
  const { X, Y } = generateRandomXY(n);
  stLines.push(new FitStraightLine(X, Y));
  const { slope, intercept } = stLines[i].calculateSlopeIntercept();
  slopes.push(slope);
  intercepts.push(intercept);
  let fittedY = X.map((x) => x * slope[i] + intercept[i]);
}
console.log("Slopes: ", slopes);
console.log("Intercepts: ", intercepts);
console.log(fittedY);
*/

// const fitLine = new FitStraightLine(X, Y);
// const result = fitLine.calculateSlopeIntercept();
// const fittedY = X.map((x) => x * result.slope + result.intercept);
// (function (slope, intercept, fitY) {
//   sp.innerHTML = `
//     Slope : <b>${slope}</b>
//     `;
//   ip.innerHTML = `
//       Intercept : <b>${intercept}</b>
//     `;
//   fy.innerHTML = `
//     Fitted  Y : <b>${fitY}</b>
//   `;
// })(result.slope, result.intercept, fittedY);
// plotGraph(X, Y, fittedY);
