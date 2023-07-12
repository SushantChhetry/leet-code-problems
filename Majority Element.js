/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length <=2){
        return nums[0];
    }

    let numMap = {};

    for(let i = 0 ; i < nums.length ; i++){
        if(numMap[nums[i]]){
            numMap[nums[i]] = numMap[nums[i]]+1;
        }
        else{
            numMap[nums[i]] = 1;
        }
    }
    let max = numMap[nums[0]]; //max is the count for each element
    let maxElement = nums[0];

    for(value in numMap){
    console.log(` ${value}:  ${numMap[value]}`);
        if(numMap[value] >= max){
            max = numMap[value];
            maxElement = value;
        }
    }

    return maxElement;
};
