// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} N
 * @return {number}
 */
let memo = {}
var fib = function (N) {

    if (N === 0) return 0
    if (N === 1) return 1
    if (N in memo) return memo[N]
    memo[N] = fib(N - 1) + fib(N - 2)
    return memo[N]
};