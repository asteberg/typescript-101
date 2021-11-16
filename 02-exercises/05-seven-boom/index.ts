// In this exercise we implement the function "sevenBoom"
// that returns the string "Boom!" if any of the provided
// numbers contains the digit 7.

/**
 * Returns
 * - "Boom!" if the digit 7 exists in any of the numbers
 * - "The bomb is disarmed" in any other case
 */
const sevenBoom = (numbers: number[]): "Boom!" | "The bomb is disarmed" => {
    let numbersAsStrings = numbers.map((n) => n.toString())
    return numbersAsStrings.some((s) => s.includes("7"))
        ? "Boom!"
        : "The bomb is disarmed"
}

let result = sevenBoom([1, 2, 3, 4, 5, 6, 7])
console.log(result) // Boom!

result = sevenBoom([8, 6, 33, 100])
console.log(result) // The bomb is disarmed

result = sevenBoom([2, 55, 60, 97, 86])
console.log(result) // Boom!

export {}
