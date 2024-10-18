// Question 1 (20 Marks):
// Write a function that rotates a given 2D array (matrix) by 90 degrees clockwise.

// Sample Input 1:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Sample Output 1:
// [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
// Sample Input 2:
// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// Sample Output 2:
// [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]
// ----------------------------------------------------------------------


// // Input 1
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

//  // if i T[arr] transpose the array then this will become

//  [[1,4,7],
//   [2,5,8],
//   [3,6,9]]

// // i swaped the elements other then diagonal

// // if i reverse the elements along x-axis then that should be my answer

// //  output 1

// [[7, 4, 1],
//  [8, 5, 2],
//  [9, 6, 3]]

function rotateMatrix(arr) {
    // we can iterate on a 2D matrix using two loops
    let n = arr.length;
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            // console.log(arr[i][j]);
            // swap the opposite elements
            [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]]
            // console.log(arr[i][j]);
        }
    }
    //reverse the elements of x axis
    for (let i=0; i<n; i++) {
        arr.reverse();
    }
    return arr
}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));