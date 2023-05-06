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
