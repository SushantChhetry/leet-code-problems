/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let rot = k % nums.length; // Calculate the effective number of rotations
    
    // Reverse the entire list
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }

    // Reverse the first k elements
    left = 0;
    right = rot - 1;
    while (left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }

    // Reverse the remaining elements after k
    left = rot;
    right = nums.length - 1;
    while (left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
};
