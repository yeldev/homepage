export const inputIsValid = (...input) => {
  return input.every(num => typeof num === "number" && !isNaN(num))
}