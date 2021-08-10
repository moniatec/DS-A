// https://leetcode.com/problems/sorting-the-sentence/

/**
 * @param {string} s
 * @return {string}
 */

/**
-create an array1 with the words from the sentence   // array1=[is2, sentence4, This1, a3]
-create array2 with same length as array1 // array2=[*,*,*,*]
-reorder the words OR fill array2 based on the positions //
-loop over array1, extract the positions,fill array2 with words //
-return array2.join('')

*/



var sortSentence = function (s) {
    let array1 = s.split(' ')
    let array2 = new Array(array1.length)
    // console.log(array2)
    for (let i = 0; i < array1.length; i++) {
        let indx = parseInt(array1[i][array1[i].length - 1])
        let word = array1[i].slice(0, array1[i].length - 1)
        // console.log(word)
        array2[indx - 1] = word
        // console.log(array2)
    }
    return array2.join(' ')
};