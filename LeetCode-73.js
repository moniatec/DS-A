// https://leetcode.com/problems/set-matrix-zeroes/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                arr1.push(i)
                arr2.push(j)

            }
        }
    }
    for (let i = 0; i < arr1.length; i++) {
        let ind = arr1[i]
        for (let k = 0; k < n; k++) {
            matrix[ind][k] = 0
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let ind = arr2[i]
        for (let k = 0; k < m; k++) {
            matrix[k][ind] = 0
        }
    }
    return matrix
};