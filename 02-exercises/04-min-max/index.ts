// In this exercise we implement the function "findMinMax"
// that returns the minimum and maximum value from a range
// of numbers.

/**
 * Returns the minimum and maximum number from an array of numbers.
 */
const findMinMax = (numbers: number[]): { min: number; max: number } => {
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers),
    }
}

let result = findMinMax([3, 5, 2, 7, 9, 1])
console.log(result) // { min: 1, max: 9 }

result = findMinMax([10, 0, -10, 3])
console.log(result) // { min: -10, max: 10 }

result = findMinMax([1])
console.log(result) // { min: 1, max: 1 }

export {}
