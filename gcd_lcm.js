// greatest common divisor
// найбільший спільний дільник
const gcd = (x, y) => !y ? x : gcd(y, x%y);
// least common multiple
// найменше спільне кратне
const lcm = (a, b) => a * b / gcd(a, b);

