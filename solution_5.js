// Question 5 (20 Marks):
// Write a function to find the maximum sum of a contiguous subarray in an array.

// Sample Input 1:
// [−2,1,−3,4,−1,2,1,−5,4]
// Sample Output 1:
// 6 ([4,−1,2,1])
// Sample Input 2:
// [5,4,−1,7,8]
// Sample Output 2:
// 23
// ----------------------------------------------------------------------

// Aproach
// contigious - elements should be continue in manner and should not to be short

// we have to contiouslly creating sub arrays and summing them 
// check if it is maximum or not, if it is then return the sum 

// this require two sum tracking 
// 1 for each current tracking sub array and other one should be maximum 

function maxSumArray(arr) {
    let maxSum  = 0;
    let currentSum = 0;

    // looping through each element
    for (let num of arr) {
        // there will be no any profit if we add negative elements in our current sum
        if(currentSum < 0) {
            currentSum = 0;
        }
        currentSum += num;
        maxSum =  Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSumArray([-2,1,-3,4,-1,2,1,-5,4]))

console.log(maxSumArray([5,4,-1,7,8]))

console.log(maxSumArray([-1,-2,-3,-4]))