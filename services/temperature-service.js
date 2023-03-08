import { UNITS } from "../constant";

export function getOppositeUnit(unit) {
  return unit === UNITS.celcuis ? UNITS.faranheit : UNITS.celcuis;
}
export function convertTemperaTo(unit, value) {
  if (unit === UNITS.celcuis) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
}
export function isIceTemperature(value, unit) {
  if (unit === UNITS.celcuis) {
    return value <= 0;
  } else {
    return value <= 32;
  }
}
