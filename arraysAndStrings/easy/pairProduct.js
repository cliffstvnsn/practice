// Pair Product
// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

// test_00:
// pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
// test_01:
// pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
// test_02:
// pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
// test_03:
// pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
// test_04:
// pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
// test_05:
// pairProduct([4, 6, 8, 2], 16); // -> [2, 3]

// Solution

const pairProduct = (numbers, targetProduct) => {
    const previousNums = {};
    for (let i = 0; i < numbers.length; i += 1) {
        const num = numbers[i];
        const complement = targetProduct / num;
        if (complement in previousNums) {
            return [i, previousNums[complement]]
        }
        // Believe it or not, this is how you Initialize that object, according to
        // below, the KEY is num, and the VALUE is i.
        previousNums[num] = i;
    }
}