/*
DESCRIPTION:
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/

function moveVowel(input) {
    const vowels = "aeiou";
    let front = "";
    let back = "";
    for (let i = 0; i < input.length; i++) {
        const all = input[i];
        if (vowels.includes(all)) {
            back += all;
        } else {
            front += all;
        }
    }
    return front + back;
}

