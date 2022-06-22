// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, 
// return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// best solution is to implement binary search algorithm
function searchInsert(nums: number[], target: number): number {
    let i = 0;
    while(nums[i] <= target){
        if(nums[i] === target){
            return i;
        }

        i++;
    }

    return i;
};

const result = searchInsert([1,3,5,6],8);

console.log({ result });

// function searchInsert(nums: number[], target: number): number {
    
//     let left = 0;
//     let right = nums.length -1;
//     let position = 0;
    
//     while(left < right){
//         position = left + Math.floor((right - left)/2);
//         if(target === nums[position]) {
//             return position;
//         }
//         if(target > nums[position]) {
//             left = position + 1;
//         } else {
//             right = position;
//         }
//     }
    
//     if(target > nums[left]) {
//         return left + 1;
//     }
    
//     // target < nums[left]
//     return left === 0? 0 : left;
// };

// function searchInsert(nums: number[], target: number) {
//     let result = 0;
        
//     if(nums.length==1 && target>nums[0]){
//         return 1;
//     }

//     for(let i=0;i<nums.length-1;i++){
//         if(target == nums[i]){
//             result =  i;
//             break;
//         } else if(target>nums[i] && target<=nums[i+1]){
//             result = i+1;
//             break;
//         } else if(target>nums[i+1] && (nums.length-1==i+1)){
//             result= nums.length;
//             break;
//         } else if(target<nums[i] && i==0){
//             result =  0;
//             break;
//         } else if(target>nums[i] && target>nums[i+1]){
//             continue;
//         }
//     }

//     return result;
// }