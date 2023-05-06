const PI_OVER_ONE_EIGHTY = Math.PI / 180;

function degreesToRadians(degrees: number): number {
  return degrees * PI_OVER_ONE_EIGHTY;
}

function radiansToDegrees(rad: number): number {
  return rad / PI_OVER_ONE_EIGHTY;
}
