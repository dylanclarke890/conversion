// Convert from pounds to tons
export function poundsToTons(pounds: number, isMetric = false) {
  return pounds / (isMetric ? 2204.6 : 2000);
}

// Convert from tons to giga
export function tonsToGiga(tons: number) {
  return tons / 1_000_000_000;
}

// Convert from giga to tons
export function gigaToTons(giga: number) {
  return giga * 1_000_000_000;
}

// Convert from tons to pounds
export function tonsToPounds(tons: number, isMetric = false) {
  return tons * (isMetric ? 2204.6 : 2000);
}

// Parts per million to carbon
export function partsPerMillion(parts: number, co2 = false) {
  return parts * (co2 ? 7.82 : 2.13);
}

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

console.log(toScientificNotation(10));

// console.log(`Metric Carbon: ${tonsToPounds(gigaToTons(partsPerMillion(421)), true)}`);
// console.log(`Imperial Carbon: ${tonsToPounds(gigaToTons(partsPerMillion(421)), true)}`);
// console.log(`Metric CO2: ${tonsToPounds(gigaToTons(partsPerMillion(421, true)), false)}`);
// console.log(`Imperial CO2: ${tonsToPounds(gigaToTons(partsPerMillion(421, true)), false)}`);
