/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0, right = 1;

    let count = 1;
    
    while(right < nums.length){
       
        if(nums[left] >= nums[right]){
            right++;
        }
        else{
            nums[left+1] = nums[right];
            left++;
            right = left+1;
            count++;
        }
    }

    return count;
};
