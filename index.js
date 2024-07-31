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
    } else {
      throw new Error(
        "X and Y must be arrays of numbers with the same length."
      );
    }
  }
  calcN() {
    return this.X.length;
  }
  Mean(values) {
    let mean = values.reduce((prev, curr) => prev + curr) / values.length;
    return mean;
  }
  claculateSlopeIntercept() {
    let N = this.calcN();
    let numerator = 0;
    let denominator = 0;
    let meanX = this.Mean(this.X, N);
    let meanY = this.Mean(this.Y, N);

    for (let i = 0; i < N; i++) {
      numerator = (this.X[i] - meanX) * (this.Y[i] - meanY);
      denominator = Math.pow(this.X[i] - meanX, 2);
    }
    let slope = numerator / denominator;
    let intercept = meanY - slope * meanX;

    return { slope, intercept };
  }
}

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
let n = randomRange(5);
console.log("Range is: ", n);
for (let i = 0; i < n; i++) {
  const { X, Y } = generateRandomXY(n);
  stLines.push(new FitStraightLine(X, Y));
  const { slope, intercept } = stLines[i].claculateSlopeIntercept();
  slopes.push(slope);
  intercepts.push(intercept);
}
console.log("Slopes: ", slopes);
console.log("Intercepts: ", intercepts);
*/
