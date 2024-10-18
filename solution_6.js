// Question 6 (20 Marks):

// Write a function to find the majority element (the element that appears more than half the time)
// in an array. Return the element or null if no such element exists.

// Sample Input 1:
// [3, 3, 4, 2, 4, 4, 2, 4, 4]
// Sample Output 1:
// 4

// Sample Input 2:
// [3, 3, 4, 2, 4, 4, 2, 4]
// Sample Output 2:
// null

// ------------------------------------------------------------------------------

// Approach

// we can itterate over the arrays and count the repetation of each element 
// store the count of each value 

// after that we can ittrate over the values and can check weather its repetation is more then half the time of total

// if element repeat more then half time then we return the element else we return null

// using dictionary makes it easy to count each value

function isMajorElement(arr) {

    let map = {};

    for (let num of arr) {
        // well we can make each unique element as a key and its repetaion become its value

        // if key is not exist in map then we create one else we will just increase
        if(!map[num]) {
            map[num] = 1;
        } else if (map[num]) {
            map[num] += 1;
        }
    }
    // console.log(map);
    // half time should be array length divided by 2
    // but we have to check for each element's value

    for (let num of arr) {
        if(map[num]>(arr.length)/2) {
            return num;
        } 
    }
    return null;


}

console.log(isMajorElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));

console.log(isMajorElement([3, 3, 4, 2, 4, 4, 2, 4]));