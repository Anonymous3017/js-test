// Question 2 (20 Marks):

// Write a function to find the first non-repeating character in a string. If there is no non-repeating
// character, return an underscore ('_').

// Sample Input 1:
// "abacabad"
// Sample Output 1:
// “c”
// Sample Input 2:
// "aabbcc"
// Sample Output 2:
// “_”
// ----------------------------------------------------------------------

// Aproach

// so there should be one non repeating characher in the string or there should be not any non repeating character in the string ('_')

// i can count character over itterating it and if the count value is 1 then its not repeating else it is repeating

// i can return the first character which have 1 count in the output

function nonRepeatingCharacter(str) {
    // lets use map again to track count of each character
    let map = {};

    for (let char of str) {
        // console.log(char);
        // char should be the key and its repetaion will be its value
        if(!map[char]) {
            map[char] = 1;
        } else if (map[char]) {
            map[char] += 1;
        }
    }
    // console.log(map);
    // now i have to traverse each element of the map
    // if its value is 1 then return the key
    for (let char of str) {
        if(map[char]===1) {
            return char;
        }
    }
    // if there is no char key found with value === 1 then return '_' 
    return '_';
}

console.log(nonRepeatingCharacter("abacabad"))

console.log(nonRepeatingCharacter("aabbcc"))