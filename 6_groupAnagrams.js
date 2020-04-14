// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/
// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams_1 = function (strs) {
    let hash = new Map();

    let getHashKey = function (str) {
        let alphabets = Array(26).fill(0);

        for (let char of str) {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            alphabets[index] = alphabets[index] + 1;
        }

        return alphabets.join('');
    }

    for (let str of strs) {
        let hashKey = getHashKey(str);
        console.log(hashKey);
        if (hash.has(hashKey)) {
            hash.get(hashKey).push(str);
        } else {
            hash.set(hashKey, [str]);
        }
    }

    let output = [];
    for (let [key, values] of hash.entries()) {
        output.push(values);
    }

    return output;
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hash = new Map();

    for (let str of strs) {
        let hashKey = str.split('').sort().join('');

        if (hash.has(hashKey)) {
            hash.get(hashKey).push(str);
        } else {
            hash.set(hashKey, [str]);
        }
    }
    let result = [];
    for (let [key, value] of hash.entries()) {
        result.push(value);
    }

    return result;
}


// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log(groupAnagrams(["tho", "tin", "erg", "end", "pug", "ton", "alb", "mes", "job", "ads", "soy", "toe", "tap", "sen", "ape", "led", "rig", "rig", "con", "wac", "gog", "zen", "hay", "lie", "pay", "kid", "oaf", "arc", "hay", "vet", "sat", "gap", "hop", "ben", "gem", "dem", "pie", "eco", "cub", "coy", "pep", "wot", "wee"]));