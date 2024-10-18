// Question 4 (20 Marks):
// Write a function to group anagrams from a list of strings. Anagrams should be grouped together
// as arrays in a result array.

// Sample Input 1:
// ["eat", "tea", "tan", "ate", "nat", "bat"]
// Sample Output 1:
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
// Sample Input 2:
// ["abc", "bca", "cab", "xyz", "yzx", "zyx"]
// Sample Output 2:
// [["abc", "bca", "cab"], ["xyz", "yzx", "zyx"]]

// ----------------------------------------------------------------------

// Anagram = same alphabets with same repetation

// one approch should be if we short each element then same anagrams will look alike

// we can use dictionary to count same elements but we have to push the element into new array

// console.log("tea".split('').sort().join(''));

// we can use dictionary here too to map each unique key with its value

function anagrams(arr) {
    let map = {};
    let result = [];
    for (let ele of arr ) {
        let key = ele.split('').sort().join(''); // this should be the unique key for common elements
        
        if(!map[key]){
            // if key dosn't exist in map then assign a value to that key
            // we have to push that element to the array
            map[key] = [];
            map[key].push(ele)
        }
        else if(map[key]) {
            map[key].push(ele)
        }
        // console.log(map[key]);
    }
    //now i have to return all the values of the each key
    return Object.values(map);
   
    // insted of counting we have to add the original element so we need an array
}

console.log(anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

console.log(anagrams(["abc", "bca", "cab", "xyz", "yzx", "zyx"]))