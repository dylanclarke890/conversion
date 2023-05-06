function greaterThanTenToSN(num: number) {
  let shifts = 0;
  while (num >= 10) {
    num /= 10;
    shifts++;
  }

  return [num, shifts];
}

function lessThanTenToSN(num: number) {
  let shifts = 0;
  while (num < 1) {
    num *= 10;
    shifts++;
  }
  return [num, -shifts];
}

export function toScientificNotation(num: number): string {
  const [n, shifts] = num >= 1 ? greaterThanTenToSN(num) : lessThanTenToSN(num);
  // 1976930957999999.8
  // 10 -> 1 * 10^1
  // 100 -> 1 * 10^2
  // 101 -> 1.01 * 10^2

  return `${n} *10^${shifts}`;
}
