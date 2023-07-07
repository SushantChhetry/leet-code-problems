/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0, right = nums.length - 1;
    let count = 0;
    while (left <= right){
        if(nums[left] === val){
                console.log(nums)

            nums[left] = nums[right];
            nums[right] = -1;
            right--;
        }
        else{
            left++;
        }
    }


    for(let i = 0 ; i< nums.length ; i++){
        if(nums[i] !== -1){
            count++;
        }
    }

    return count;
};

//HINT
//You can solve this problem by using two pointers. Initialize two pointers, one at the beginning and the other at the end of the array. 
//Iterate through the array with the first pointer, checking if the element at the current index is equal to the target element. 
//If it is, swap the element with the element at the end of the array
//and decrement the end pointer. If it's not, increment the first pointer. Keep doing this until the first pointer crosses the end pointer.
