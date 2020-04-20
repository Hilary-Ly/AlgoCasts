// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    for (let char of str) { // for-of for ordinary looping
        if (!charMap[char]) charMap[char] = 1
        else charMap[char]++
    }
    for (let char in charMap) { // for-in for object looping
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

module.exports = maxChar;
