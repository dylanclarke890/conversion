// Parts per million to carbon
export function partsPerMillion(parts: number, co2 = false) {
  return parts * (co2 ? 7.82 : 2.13);
}
